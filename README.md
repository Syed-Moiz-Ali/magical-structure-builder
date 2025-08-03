# Flutter Clean Architecture Generator

**Generate complete Flutter project structures with Clean Architecture pattern instantly.**

A powerful VS Code extension that allows developers to create comprehensive project folder structures using a simple text-based interface. Perfect for setting up Clean Architecture patterns, feature-based structures, and any custom project organization.

## 🚀 Features

✅ **Complete Project Structure Generation**: Creates lib/, core/, features/, shared/, and test/ folders with all subdirectories  
✅ **Clean Architecture Support**: Follows data/domain/presentation layer patterns  
✅ **Interactive Interface**: Text-based input with convenient create buttons  
✅ **Real-time Preview**: See exactly what will be created before generation  
✅ **Universal Compatibility**: Works with any project structure format (Flutter, React, Node.js, etc.)  
✅ **Smart Parsing**: Handles various tree formats and indentation styles  
✅ **Instant Creation**: Generate 100+ files and folders in seconds  
✅ **Error Handling**: Comprehensive validation and helpful error messages

## 📦 Installation

### From VS Code Marketplace

1. Open **VS Code**
2. Go to **Extensions** (`Ctrl+Shift+X`)
3. Search for **"Flutter Clean Architecture Generator"**
4. Click **Install**
5. Reload VS Code if prompted

### From VSIX File

1. Download the `.vsix` file
2. Open **VS Code Extensions** panel
3. Click **three dots menu** (⋯) → **"Install from VSIX..."**
4. Select the downloaded file

## 🎯 Quick Start

### Basic Usage

1. **Open any folder** in VS Code
2. **Press `Ctrl+Shift+P`** (or `Cmd+Shift+P` on Mac)
3. **Search for**: `"Flutter: Open Structure Editor"`
4. **Paste your folder structure** in the text editor
5. **Click "🚀 Create Project Structure"** button

### Example Structure

```
lib/
├── main.dart
├── app/
│   ├── app.dart
│   ├── constants/
│   │   ├── app_constants.dart
│   │   ├── api_constants.dart
│   │   └── route_constants.dart
│   └── config/
│       ├── app_config.dart
│       └── theme_config.dart
├── core/
│   ├── base/
│   │   ├── base_provider.dart
│   │   └── base_repository.dart
│   ├── errors/
│   │   ├── exceptions.dart
│   │   └── failures.dart
│   └── utils/
│       ├── validators.dart
│       └── helpers.dart
├── features/
│   └── authentication/
│       ├── data/
│       │   ├── datasources/
│       │   │   ├── auth_local_datasource.dart
│       │   │   └── auth_remote_datasource.dart
│       │   ├── models/
│       │   │   └── user_model.dart
│       │   └── repositories/
│       │       └── auth_repository_impl.dart
│       ├── domain/
│       │   ├── entities/
│       │   │   └── user_entity.dart
│       │   ├── repositories/
│       │   │   └── auth_repository.dart
│       │   └── usecases/
│       │       ├── login_usecase.dart
│       │       └── register_usecase.dart
│       └── presentation/
│           ├── providers/
│           │   └── auth_provider.dart
│           ├── screens/
│           │   ├── login_screen.dart
│           │   └── register_screen.dart
│           └── widgets/
│               └── auth_form.dart
└── shared/
    ├── widgets/
    │   └── custom_button.dart
    └── services/
        └── api_service.dart
```

## 🛠️ Detailed Usage

### Command Palette Commands

| Command                          | Description                                      |
| -------------------------------- | ------------------------------------------------ |
| `Flutter: Open Structure Editor` | Opens text editor for inputting folder structure |
| `Create Project Structure`       | Creates the project structure from active editor |
| `Preview Structure`              | Shows preview of what will be created            |

### Interface Elements

**📝 Text Editor Interface**

- Clean, focused editing environment
- Syntax highlighting for folder structures
- Auto-detection of structure patterns

**🚀 Create Button**

- Appears automatically when valid structure is detected
- One-click project generation
- Progress tracking during creation

**👁️ Preview Button**

- Shows detailed preview before creation
- File and folder count summary
- Tree visualization of structure

### Supported Formats

The extension intelligently parses various tree formats:

**Standard Tree Format**

```
project/
├── src/
│   ├── components/
│   │   └── Header.tsx
│   └── utils/
│       └── helpers.js
└── public/
    └── index.html
```

**Simple Indented Format**

```
project/
  src/
    components/
      Header.tsx
    utils/
      helpers.js
  public/
    index.html
```

**Comments Supported**

```
lib/
├── main.dart          # App entry point
├── core/              # Core functionality
│   └── utils/         # Helper utilities
└── features/          # Feature modules
```

## 🎨 Screenshots

### Extension in Action

_Text editor interface with create buttons_

### Structure Preview

_Preview window showing generated structure_

### File Explorer Result

_Complete folder structure in VS Code Explorer_

## 📋 Requirements

- **VS Code**: Version 1.74.0 or higher
- **Workspace**: An open folder/workspace in VS Code
- **Node.js**: Not required for usage (only for development)

## ⚙️ Configuration

The extension works out-of-the-box with no configuration required. However, you can customize behavior through VS Code settings:

```json
{
  "flutterGenerator.autoRefreshExplorer": true,
  "flutterGenerator.showProgressNotifications": true,
  "flutterGenerator.validateStructureBeforeCreation": true
}
```

## 🔧 Advanced Features

### Multi-Language Support

Works with any programming language and framework:

- **Flutter/Dart**: Complete Clean Architecture
- **React/TypeScript**: Component-based structures
- **Node.js**: Server-side project organization
- **Python**: Package and module structures
- **Java**: Maven/Gradle project layouts

### Smart Detection

- **File vs Folder**: Automatically detects based on extensions
- **Nested Structures**: Handles unlimited nesting levels
- **Root Level**: Properly creates parent directories
- **Duplicate Prevention**: Avoids overwriting existing files

### Error Handling

- **Validation**: Checks structure before creation
- **Permissions**: Handles file system permission issues
- **Conflict Resolution**: Manages existing file conflicts
- **Helpful Messages**: Clear error descriptions and solutions

## 🐛 Troubleshooting

### Common Issues

**❌ Extension not showing commands**

- **Solution**: Restart VS Code and ensure extension is enabled
- **Check**: Extensions panel for activation status

**❌ "Please open a folder first" error**

- **Solution**: Open a workspace folder in VS Code
- **Note**: Extension requires an active workspace

**❌ Structure not parsing correctly**

- **Solution**: Ensure proper indentation and tree characters
- **Tip**: Use the preview function to verify parsing

**❌ Files not being created**

- **Solution**: Check folder permissions
- **Verify**: Workspace folder has write permissions

### Debug Mode

Enable detailed logging in VS Code Developer Tools:

1. **Help** → **Toggle Developer Tools**
2. **Console** tab
3. Look for extension logs with `📝`, `✅`, `❌` prefixes

### Support

- **Issues**: [GitHub Issues](https://github.com/yourusername/file-structure-generator/issues)
- **Questions**: [Discussions](https://github.com/yourusername/file-structure-generator/discussions)
- **Email**: your.email@example.com

## 🚀 Performance

- **Speed**: Creates 100+ files in under 2 seconds
- **Memory**: Minimal memory footprint
- **Scalability**: Handles large project structures efficiently
- **Compatibility**: Works with all VS Code themes and extensions

## 🤝 Contributing

We welcome contributions! Here's how to get started:

### Development Setup

```bash
# Clone the repository
git clone https://github.com/yourusername/file-structure-generator

# Install dependencies
cd file-structure-generator
npm install

# Open in VS Code
code .

# Start development
# Press F5 to launch Extension Development Host
```

### Contributing Guidelines

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Code Standards

- **JavaScript ES6+**: Modern JavaScript features
- **Clear Comments**: Document complex logic
- **Error Handling**: Comprehensive error management
- **Testing**: Add tests for new features

## 📝 Changelog

### 1.0.0 (Latest)

- ✨ **Initial Release**
- 🚀 **Complete project structure generation**
- 🎯 **Clean Architecture pattern support**
- 📱 **Interactive text editor interface**
- 👁️ **Structure preview functionality**
- 🔧 **Universal language support**
- 📊 **Progress tracking and notifications**

### Planned Features

- 🎨 **Custom templates and presets**
- 🔗 **Git integration for version control**
- 📦 **Package.json/pubspec.yaml generation**
- 🎯 **More architecture patterns (MVVM, MVC)**
- 🌐 **Multi-workspace support**

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2024 Your Name

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## 🌟 Acknowledgments

- **Flutter Team**: For the amazing framework
- **VS Code Team**: For the excellent extension API
- **Clean Architecture**: Robert C. Martin's architectural pattern
- **Community**: All contributors and users

## 📊 Stats

![VS Code Marketplace](https://img.shields.io/visual-studio-marketplace/vio/visual-studio-marketplace/d/shields.io/visual-studio-marketplace/.shields.io/visual-studio-marketplace/last-updated/your-publisher this extension helps you, please give it a star on the marketplace!\*\*)

**🔗 Connect with us:**

- GitHub: [@yourusername](https://github.com/yourusername)
- Twitter: [@yourusername](https://twitter.com/yourusername)
- LinkedIn: [Your Name](https://linkedin.com/in/yourname)

_Made with ❤️ for the Flutter community_
