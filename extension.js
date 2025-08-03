const vscode = require("vscode");
const fs = require("fs");
const path = require("path");

class StructureParser {
  /**
   * Parse text-based folder structure into a tree structure
   */
  static parseTextStructure(text) {
    // Normalize line endings and split properly
    const normalizedText = text.replace(/\r\n/g, "\n").replace(/\r/g, "\n");
    const lines = normalizedText
      .split("\n")
      .filter((line) => line.trim().length > 0);

    console.log(`📝 Processing ${lines.length} lines`);

    const result = [];
    const stack = [];

    for (let i = 0; i < lines.length; i++) {
      const item = this.parseLine(lines[i], i + 1);
      if (item === null) continue;

      // Find the correct parent based on indentation level
      while (stack.length > 0 && stack[stack.length - 1].level >= item.level) {
        stack.pop();
      }

      if (stack.length === 0) {
        result.push(item);
      } else {
        const parent = stack[stack.length - 1];
        if (!parent.children) {
          parent.children = [];
        }
        parent.children.push(item);
      }

      // Only add folders to the stack (not files)
      if (!item.isFile) {
        stack.push(item);
      }
    }

    return result;
  }

  /**
   * Parse individual line to extract name, type, and indentation level
   * UPDATED WITH ROOT LEVEL DETECTION
   */
  static parseLine(line, lineNumber = 0) {
    if (!line || line.trim().length === 0) return null;

    // Remove comments (everything after #)
    let workingLine = line.split("#")[0].trimEnd();

    if (workingLine.trim().length === 0) return null;

    let level = 0;
    let name = "";

    // **FIXED: Root Level Detection - Check this FIRST**
    // Pattern 1: Root level items (starts at beginning, no indentation, no tree characters)
    if (workingLine.match(/^[a-zA-Z_][a-zA-Z0-9_.-]*\/?\s*$/)) {
      name = workingLine.trim();
      level = 0;
      console.log(`🎯 ROOT LEVEL detected: "${name}" | Level: ${level}`);
    }
    // Pattern 2: Standard tree with ├── or └──
    else if (workingLine.match(/^(\s*(?:[│\s]*[│]\s*)*)\s*[├└]──\s*(.+)$/)) {
      const match = workingLine.match(
        /^(\s*(?:[│\s]*[│]\s*)*)\s*[├└]──\s*(.+)$/
      );
      const prefix = match[1];
      name = match[2].trim();
      // Each │ typically represents one level, plus spaces
      const verticalBars = (prefix.match(/│/g) || []).length;
      level = verticalBars + 1; // Children are one level deeper than parent
    }
    // Pattern 3: Items with only vertical bars and spaces
    else if (workingLine.match(/^(\s*(?:[│\s]*[│]\s*)+)\s*(.+)$/)) {
      const match = workingLine.match(/^(\s*(?:[│\s]*[│]\s*)+)\s*(.+)$/);
      const prefix = match[1];
      name = match[2].trim();
      const verticalBars = (prefix.match(/│/g) || []).length;
      level = verticalBars + 1;
    }
    // Pattern 4: Legacy detection for other formats
    else if (workingLine.match(/^([^│├└]*?)([^/\s]+\/?)$/)) {
      const match = workingLine.match(/^([^│├└]*?)([^/\s]+\/?)$/);
      name = match[2].trim();
      level = 0;
    }
    // Fallback: extract name from end of line
    else {
      const trimmed = workingLine.trim();
      if (trimmed.length > 0) {
        name = trimmed;
        // Count leading spaces to estimate level
        const leadingSpaces =
          workingLine.length - workingLine.trimLeft().length;
        level = Math.floor(leadingSpaces / 2);
      }
    }

    if (!name || name.length === 0) return null;

    // Clean up the name (remove any remaining tree characters)
    name = name.replace(/^[├└──\s│]+/, "").trim();

    if (name.length === 0) return null;

    // Determine if it's a file or folder
    const isFile = this.isFilename(name);

    console.log(
      `Line ${lineNumber}: "${name}" | File: ${isFile} | Level: ${level}`
    );

    return {
      name: name,
      isFile: isFile,
      level: level,
      children: undefined,
    };
  }

  /**
   * Determine if a name represents a file (has extension) or folder
   */
  static isFilename(name) {
    // Remove trailing slashes
    const cleanName = name.replace(/\/$/, "");

    // If it ends with /, it's definitely a folder
    if (name.endsWith("/")) return false;

    // Check for file extension
    const lastDot = cleanName.lastIndexOf(".");
    const lastSlash = Math.max(
      cleanName.lastIndexOf("/"),
      cleanName.lastIndexOf("\\")
    );

    // Must have extension after any path separator
    return lastDot > lastSlash && lastDot > 0 && lastDot < cleanName.length - 1;
  }
}

class StructureCreator {
  /**
   * Create the file and folder structure recursively
   */
  static async createStructure(basePath, items) {
    for (const item of items) {
      await this.createItem(basePath, item);
    }
  }

  /**
   * Create individual file or folder
   * UPDATED WITH BETTER FOLDER CREATION
   */
  static async createItem(basePath, item) {
    // Clean the name
    const cleanName = item.name.replace(/\/$/, "");
    const fullPath = path.join(basePath, cleanName);

    try {
      if (item.isFile) {
        // Create parent directories if they don't exist
        const dir = path.dirname(fullPath);
        if (!fs.existsSync(dir)) {
          fs.mkdirSync(dir, { recursive: true });
        }

        // Create the file with empty content
        fs.writeFileSync(fullPath, "", "utf8");
        console.log(`✅ Created file: ${cleanName}`);
      } else {
        // **IMPORTANT: Always create the folder first**
        if (!fs.existsSync(fullPath)) {
          fs.mkdirSync(fullPath, { recursive: true });
        }
        console.log(`📁 Created folder: ${cleanName}`);

        // Recursively create children
        if (item.children && item.children.length > 0) {
          await this.createStructure(fullPath, item.children);
        }
      }
    } catch (error) {
      console.error(`❌ Error creating "${cleanName}": ${error}`);
      throw error;
    }
  }
}

/**
 * CodeLens provider to show "Create Structure" button in editor
 */
class StructureCodeLensProvider {
  constructor() {
    this._onDidChangeCodeLenses = new vscode.EventEmitter();
    this.onDidChangeCodeLenses = this._onDidChangeCodeLenses.event;
  }

  provideCodeLenses(document, token) {
    const text = document.getText();

    // Only show CodeLens if document contains folder structure
    if (this.containsFolderStructure(text)) {
      const codeLenses = [];

      // Add "Create Structure" button at the top
      const range = new vscode.Range(0, 0, 0, 0);
      const createCommand = {
        title: "🚀 Create Project Structure",
        command: "universalGenerator.createFromActiveEditor",
      };
      codeLenses.push(new vscode.CodeLens(range, createCommand));

      // Add "Preview Structure" button
      const previewCommand = {
        title: "👁️ Preview Structure",
        command: "universalGenerator.previewStructure",
      };
      codeLenses.push(new vscode.CodeLens(range, previewCommand));

      return codeLenses;
    }

    return [];
  }

  containsFolderStructure(text) {
    // Check if text contains folder structure patterns
    return (
      text.includes("├──") ||
      text.includes("└──") ||
      text.includes(".dart") ||
      text.includes("/") ||
      text.includes("lib/") // Added specific check for lib/
    );
  }

  refresh() {
    this._onDidChangeCodeLenses.fire();
  }
}

/**
 * Extension activation
 */
function activate(context) {
  // Register CodeLens provider
  const codeLensProvider = new StructureCodeLensProvider();
  const codeLensDisposable = vscode.languages.registerCodeLensProvider(
    "*",
    codeLensProvider
  );

  // Command: Open text editor for structure input
  let openEditorDisposable = vscode.commands.registerCommand(
    "universalGenerator.createFromText",
    async () => {
      try {
        if (
          !vscode.workspace.workspaceFolders ||
          vscode.workspace.workspaceFolders.length === 0
        ) {
          vscode.window.showErrorMessage("Please open a folder first!");
          return;
        }

        // Create a new document with template
        const doc = await vscode.workspace.openTextDocument({
          content: `# Flutter Clean Architecture Generator
# Paste your folder structure below and click the "Create Structure" button that appears above
# Make sure to start with your root folder (e.g., lib/)

# Example format:
lib/
├── main.dart
├── app/
│   ├── app.dart
│   └── constants/
│       └── app_constants.dart
└── core/
    └── utils.dart

# Replace the example above with your actual structure`,
          language: "plaintext",
        });

        await vscode.window.showTextDocument(doc);

        // Refresh CodeLens to show buttons
        setTimeout(() => {
          codeLensProvider.refresh();
        }, 100);

        vscode.window.showInformationMessage(
          '📝 Paste your folder structure (starting with root folder) and click the "Create Structure" button above!'
        );
      } catch (error) {
        vscode.window.showErrorMessage(`❌ Error: ${error.message}`);
        console.error("Extension error:", error);
      }
    }
  );

  // Command: Create structure from active editor
  let createFromEditorDisposable = vscode.commands.registerCommand(
    "universalGenerator.createFromActiveEditor",
    async () => {
      try {
        const activeEditor = vscode.window.activeTextEditor;

        if (!activeEditor) {
          vscode.window.showErrorMessage("No active text editor found!");
          return;
        }

        if (
          !vscode.workspace.workspaceFolders ||
          vscode.workspace.workspaceFolders.length === 0
        ) {
          vscode.window.showErrorMessage(
            "Please open a workspace folder first!"
          );
          return;
        }

        const text = activeEditor.document.getText();

        if (!text.trim() || text.includes("Replace the example above")) {
          vscode.window.showErrorMessage(
            "Please replace the example with your actual folder structure!"
          );
          return;
        }

        const rootPath = vscode.workspace.workspaceFolders[0].uri.fsPath;

        await vscode.window.withProgress(
          {
            location: vscode.ProgressLocation.Notification,
            title: "Creating project structure...",
            cancellable: false,
          },
          async (progress) => {
            progress.report({ increment: 0, message: "Parsing structure..." });

            const parsedStructure = StructureParser.parseTextStructure(text);
            console.log(`📊 Parsed ${parsedStructure.length} root items`);
            console.log(
              "📋 Full parsed structure:",
              JSON.stringify(parsedStructure, null, 2)
            );

            if (parsedStructure.length === 0) {
              throw new Error(
                "Could not parse any valid structure from the input"
              );
            }

            progress.report({
              increment: 30,
              message: "Creating folders and files...",
            });

            await StructureCreator.createStructure(rootPath, parsedStructure);

            progress.report({ increment: 100, message: "Complete!" });
          }
        );

        vscode.window.showInformationMessage(
          "✅ Project structure created successfully!"
        );
        await vscode.commands.executeCommand(
          "workbench.files.action.refreshFilesExplorer"
        );
      } catch (error) {
        vscode.window.showErrorMessage(`❌ Error: ${error.message}`);
        console.error("Extension error:", error);
      }
    }
  );

  // Command: Preview structure before creating
  let previewDisposable = vscode.commands.registerCommand(
    "universalGenerator.previewStructure",
    async () => {
      try {
        const activeEditor = vscode.window.activeTextEditor;

        if (!activeEditor) {
          vscode.window.showErrorMessage("No active text editor found!");
          return;
        }

        const text = activeEditor.document.getText();
        const parsedStructure = StructureParser.parseTextStructure(text);

        if (parsedStructure.length === 0) {
          vscode.window.showWarningMessage(
            "No valid structure found to preview"
          );
          return;
        }

        // Create preview content
        const previewContent = generatePreviewContent(parsedStructure);

        // Show in new document
        const previewDoc = await vscode.workspace.openTextDocument({
          content: previewContent,
          language: "plaintext",
        });

        await vscode.window.showTextDocument(
          previewDoc,
          vscode.ViewColumn.Beside
        );
      } catch (error) {
        vscode.window.showErrorMessage(`❌ Preview error: ${error.message}`);
      }
    }
  );

  // Helper function to generate preview content
  function generatePreviewContent(items, level = 0) {
    let content = "# Structure Preview\n\n";

    function buildTree(items, level) {
      let result = "";
      for (const item of items) {
        const indent = "  ".repeat(level);
        const icon = item.isFile ? "📄" : "📁";
        result += `${indent}${icon} ${item.name}\n`;

        if (item.children && item.children.length > 0) {
          result += buildTree(item.children, level + 1);
        }
      }
      return result;
    }

    content += buildTree(items, 0);
    content += "\n\n# Summary\n";

    function countItems(items) {
      let files = 0;
      let folders = 0;

      for (const item of items) {
        if (item.isFile) {
          files++;
        } else {
          folders++;
        }

        if (item.children) {
          const childCounts = countItems(item.children);
          files += childCounts.files;
          folders += childCounts.folders;
        }
      }

      return { files, folders };
    }

    const counts = countItems(items);
    content += `- 📁 Total Folders: ${counts.folders}\n`;
    content += `- 📄 Total Files: ${counts.files}\n`;
    content += `- 📊 Total Items: ${counts.files + counts.folders}`;

    return content;
  }

  context.subscriptions.push(
    codeLensDisposable,
    openEditorDisposable,
    createFromEditorDisposable,
    previewDisposable
  );
}

function deactivate() {}

module.exports = { activate, deactivate };
