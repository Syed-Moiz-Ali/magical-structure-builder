const vscode = require("vscode");
const fs = require("fs");
const path = require("path");

// 🎓 Friendly Guide Helper Class
class FriendlyGuide {
  static showWelcomeMessage() {
    return `🎉 Welcome to the Magical Structure Builder! 

Here's how it works in 3 easy steps:
1️⃣ Write your folder names (like: my-project/)
2️⃣ Add your file names (like: index.html)
3️⃣ Click the magic button to create everything!

Need help? Just ask! I'm here to make coding fun! ✨`;
  }

  static getSimpleExample() {
    return `# 🏠 My First Website Project
my-awesome-website/
  index.html        # This is your main page! 🏠
  style.css         # This makes things pretty! 🎨  
  script.js         # This makes things move! ⚡
  images/           # Put your pictures here! 📸
    logo.png
    hero.jpg`;
  }

  static getTutorialContent() {
    return `# 🎓 Welcome to Project Structure Magic School! ✨

## 🌟 What is a Project Structure?
Think of it like organizing your room! Every file and folder has its special place.

## 📚 Lesson 1: Basic Structure
\`\`\`
my-cool-project/          # This is your main folder (like your room!)
  index.html             # Your main webpage (front door!)
  style.css              # Makes things pretty (decorations!)
  script.js              # Makes things interactive (toys that move!)
  images/                # Your picture folder (photo album!)
    cat.jpg
    dog.png
\`\`\`

## 🎯 Lesson 2: File vs Folder Rules
- 📁 **Folders**: End with / or have no dots → \`images/\` or \`components\`
- 📄 **Files**: Have dots in them → \`index.html\` or \`script.js\`

## 🚀 Lesson 3: Try These Examples!

### 🌐 Simple Website
\`\`\`
my-website/
  index.html
  about.html
  contact.html
  css/
    style.css
    colors.css
  js/
    main.js
\`\`\`

### 🎮 Game Project
\`\`\`
awesome-game/
  index.html
  game.js
  player.js
  enemies/
    zombie.js
    robot.js
  sounds/
    jump.mp3
    win.wav
\`\`\`

### 🐍 Python Project
\`\`\`
my-python-app/
  main.py
  helpers.py
  data/
    info.txt
    config.json
  tests/
    test_main.py
\`\`\`

## 🎉 You're Ready!
Copy any example above, paste it in a new file, and click the magic button! 🪄

**Pro Tip**: Start small and add more as you learn! You're doing amazing! 🌟`;
  }
}

// 📋 Template Library
// 📋 Enhanced Template Library with Universal Language Support
class TemplateLibrary {
  static getTemplates() {
    return {
      website: {
        name: "🌐 Simple Website",
        description: "Perfect for your first website!",
        content: `# 🌐 My Awesome Website
my-website/
  index.html          # Your home page! 🏠
  about.html          # Tell people about yourself! 👋
  contact.html        # How people can reach you! 📧
  css/
    style.css         # Main styles! ✨
    colors.css        # All your favorite colors! 🌈
  js/
    main.js           # Add cool interactions! ⚡
    animations.js     # Cool animations! 🎆
  images/
    logo.png          # Your special logo! 🎨
    background.jpg    # Pretty background picture! 🖼️
  .gitignore          # Git settings file! 📝`,
      },

      flutter: {
        name: "📱 Flutter Mobile App",
        description: "Build amazing mobile apps with Clean Architecture!",
        content: `# 📱 My Awesome Flutter App
my-flutter-app/
├── lib/
│   ├── main.dart                    # App starts here! ⭐
│   ├── app/
│   │   ├── app.dart                 # Main app setup! 🔧
│   │   ├── constants/
│   │   │   ├── app_constants.dart   # App settings! 📋
│   │   │   ├── api_constants.dart   # Server settings! 🌐
│   │   │   └── colors.dart          # Pretty colors! 🎨
│   │   └── themes/
│   │       └── app_theme.dart       # Make it look amazing! ✨
│   ├── core/                        # Super important stuff! 💎
│   │   ├── utils/
│   │   │   ├── helpers.dart         # Helpful functions! 🔧
│   │   │   └── validators.dart      # Check if things are right! ✅
│   │   └── errors/
│   │       └── exceptions.dart      # Handle oops moments! 🚨
│   ├── features/                    # Cool app features! ⭐
│   │   └── authentication/          # Login system! 🔐
│   │       ├── data/                # Data storage! 💾
│   │       │   ├── datasources/
│   │       │   │   └── auth_datasource.dart
│   │       │   ├── models/
│   │       │   │   └── user_model.dart
│   │       │   └── repositories/
│   │       │       └── auth_repository_impl.dart
│   │       ├── domain/              # Business logic! 🧠
│   │       │   ├── entities/
│   │       │   │   └── user_entity.dart
│   │       │   ├── repositories/
│   │       │   │   └── auth_repository.dart
│   │       │   └── usecases/
│   │       │       ├── login_usecase.dart
│   │       │       └── register_usecase.dart
│   │       └── presentation/        # What users see! 📱
│   │           ├── providers/
│   │           │   └── auth_provider.dart
│   │           ├── screens/
│   │           │   ├── login_screen.dart
│   │           │   └── register_screen.dart
│   │           └── widgets/
│   │               └── login_button.dart
│   └── shared/                      # Things everyone uses! 🤝
│       ├── widgets/
│       │   ├── awesome_button.dart  # Your special button! 🎯
│       │   └── loading_spinner.dart # Loading animation! ⏳
│       └── services/
│           └── api_service.dart     # Talk to internet! 🌐
├── test/                            # Make sure everything works! 🧪
│   ├── unit/
│   │   └── auth_test.dart
│   └── widget/
│       └── button_test.dart
├── assets/                          # Pictures and sounds! 🖼️
│   ├── images/
│   │   ├── logo.png
│   │   └── splash.png
│   └── fonts/
│       └── custom_font.ttf
└── pubspec.yaml                     # Flutter project info! 📦`,
      },

      react: {
        name: "⚛️ React Web App",
        description: "Modern web app with React!",
        content: `# ⚛️ My React Web App
react-app/
  public/
    index.html        # The starting page! 🏠
    favicon.ico       # Little website icon! 🎯
  src/
    App.js            # Main app component! 📱
    index.js          # App starter! 🚀
    components/
      Header.jsx      # Top of the page! 📄
      Footer.jsx      # Bottom of the page! 👟
      Button.jsx      # Reusable button! 🔘
    pages/
      Home.jsx        # Home page! 🏠
      About.jsx       # About page! 👋
    styles/
      App.css         # Make it look great! 🎨
      index.css       # Global styles! 🌐
    utils/
      helpers.js      # Utility functions! 🔧
  package.json        # App information! 📦
  .gitignore          # Git settings! 📝`,
      },

      python_data: {
        name: "🐍 Python Data Science",
        description: "Analyze data like a scientist!",
        content: `# 🐍 My Python Data Science Project
python-data-project/
  main.py                          # Start your analysis here! 🚀
  data/
    raw/                           # Original data files! 📊
      dataset.csv
      user_data.json
    processed/                     # Clean data! ✨
      clean_data.csv
      filtered_data.json
  notebooks/
    analysis.ipynb                 # Jupyter notebook! 📔
    visualization.ipynb            # Make cool charts! 📈
  src/
    data_processing.py             # Clean your data! 🧹
    visualization.py               # Make cool charts! 📊
    machine_learning.py            # AI magic! 🤖
  tests/
    test_processing.py             # Test your code! ✅
  docs/
    README.md                      # How to use! 📚
  requirements.txt                 # Python packages needed! 📦
  .gitignore                       # Git settings! 📝`,
      },

      python: {
        name: "🐍 Python App",
        description: "Create a Python program!",
        content: `# 🐍 My Python Adventure
python-project/
  main.py             # Your main program! 🐍
  helpers.py          # Helper functions! 🔧
  calculator.py       # Math helper! 🧮
  games.py            # Fun mini games! 🎲
  data/
    info.txt          # Important information! 📝
    settings.json     # Program settings! ⚙️
    scores.txt        # Save high scores! 🏆
  tests/
    test_main.py      # Make sure it works! ✅
  docs/
    readme.md         # How to use your program! 📚
  requirements.txt    # Python packages! 📦`,
      },

      game: {
        name: "🎮 Game Development",
        description: "Build your own awesome game!",
        content: `# 🎮 My Super Cool Game
awesome-game/
  main.dart           # Game starts here! 🚀
  scenes/
    main_menu.dart    # Starting screen! 📱
    game_level.dart   # Where you play! 🎯
    game_over.dart    # When game ends! 🏁
  characters/
    player.dart       # Your hero! 🦸
    enemies/
      zombie.dart     # Scary zombie! 🧟
      robot.dart      # Cool robot! 🤖
      boss.dart       # Big boss fight! 👹
  systems/
    physics.dart      # How things move! ⚡
    collision.dart    # When things bump! 💥
    scoring.dart      # Keep track of points! 🏆
  assets/
    images/
      player_sprite.png    # Character pictures! 🖼️
      enemy_sprites.png    # Bad guy pictures! 👾
      background.jpg       # Game world! 🌍
    sounds/
      jump.wav            # Sound effects! 🔊
      shoot.wav           # Shooting sound! 🔫
      background_music.mp3 # Game music! 🎵
  config/
    game_settings.json   # Game rules! 📋
  README.md              # How to play! 📚`,
      },

      nodejs: {
        name: "🤖 Node.js API Server",
        description: "Build a powerful web server!",
        content: `# 🤖 My Node.js API Server
node-api/
  server.js                        # Server starts here! 🚀
  routes/
    auth.js                        # Login routes! 🔐
    users.js                       # User management! 👥
    products.js                    # Handle products! 📦
  controllers/
    authController.js              # Handle login logic! 🧠
    userController.js              # Handle user logic! 👤
    productController.js           # Handle products! 🛍️
  models/
    User.js                        # User data structure! 👤
    Product.js                     # Product data! 📦
  middleware/
    auth.js                        # Check permissions! 🛡️
    validation.js                  # Validate data! ✅
  config/
    database.js                    # Database setup! 💾
    server.js                      # Server settings! ⚙️
  utils/
    helpers.js                     # Helper functions! 🔧
    logger.js                      # Track what happens! 📝
  tests/
    auth.test.js                   # Test login! 🧪
    users.test.js                  # Test users! 👥
  docs/
    api_documentation.md           # API guide! 📚
  package.json                     # Project info! 📦
  .env.example                     # Environment settings! 🌍
  .gitignore                       # Git settings! 📝`,
      },

      java: {
        name: "☕ Java Spring Boot",
        description: "Enterprise Java application!",
        content: `# ☕ My Java Spring Boot App
java-app/
  src/
    main/
      java/
        com/
          myapp/
            Application.java              # App starter! 🚀
            controllers/
              UserController.java         # Handle web requests! 🌐
              ProductController.java      # Product management! 📦
            services/
              UserService.java            # Business logic! 🧠
              ProductService.java         # Product logic! 🛍️
            repositories/
              UserRepository.java         # Data access! 💾
              ProductRepository.java      # Product data! 📊
            models/
              User.java                   # User data structure! 👤
              Product.java                # Product model! 📦
            config/
              SecurityConfig.java         # Security setup! 🛡️
              DatabaseConfig.java         # Database setup! 💾
      resources/
        application.properties            # App settings! ⚙️
        static/                          # Static files! 📁
        templates/                       # HTML templates! 📄
  test/
    java/
      com/
        myapp/
          UserControllerTest.java        # Test controllers! 🧪
          UserServiceTest.java           # Test business logic! ✅
  pom.xml                                # Project dependencies! 📦
  README.md                              # How to run! 📚
  .gitignore                             # Git settings! 📝`,
      },

      mobile: {
        name: "📱 Mobile App (React Native)",
        description: "Cross-platform mobile app!",
        content: `# 📱 My Cross-Platform Mobile App
mobile-app/
  App.js                    # Main app file! 📱
  src/
    screens/
      HomeScreen.js         # First screen users see! 🏠
      ProfileScreen.js      # User profile! 👤
      SettingsScreen.js     # App settings! ⚙️
      LoginScreen.js        # User login! 🔐
    components/
      Button.js             # Clickable buttons! 🔘
      Card.js               # Information cards! 🃏
      Header.js             # Screen headers! 📄
      Loading.js            # Loading spinner! ⏳
    navigation/
      AppNavigator.js       # Screen navigation! 🧭
    services/
      api.js                # Talk to server! 🌐
      storage.js            # Save data locally! 💾
    utils/
      helpers.js            # Helper functions! 🔧
      constants.js          # App constants! 📋
  assets/
    images/
      logo.png              # App logo! 🎨
      splash.jpg            # Loading screen! 💫
      icons/                # App icons! 🎯
    fonts/
      custom_font.ttf       # Custom fonts! ✍️
  config/
    settings.js             # App configuration! 🔧
  package.json              # Project info! 📦
  .gitignore                # Git settings! 📝`,
      },

      web_full: {
        name: "🌐 Full-Stack Website",
        description: "Complete website with frontend and backend!",
        content: `# 🌐 My Full-Stack Website
fullstack-website/
  frontend/
    public/
      index.html            # Main webpage! 🏠
      favicon.ico           # Website icon! 🎯
    src/
      components/
        Header.jsx          # Top navigation! 📄
        Footer.jsx          # Bottom of page! 👟
        ProductCard.jsx     # Product display! 🛍️
      pages/
        Home.jsx            # Homepage! 🏠
        Shop.jsx            # Shopping page! 🛒
        Contact.jsx         # Contact form! 📧
      styles/
        main.css            # Main styles! 🎨
        components.css      # Component styles! ✨
    package.json            # Frontend packages! 📦
  backend/
    routes/
      products.js           # Product API! 📦
      users.js              # User API! 👥
    models/
      Product.js            # Product data! 🛍️
      User.js               # User data! 👤
    controllers/
      productController.js  # Handle products! 🧠
      userController.js     # Handle users! 👥
    middleware/
      auth.js               # Check login! 🛡️
    server.js               # Backend server! 🚀
    package.json            # Backend packages! 📦
  database/
    migrations/
      create_users.sql      # User table setup! 👥
      create_products.sql   # Product table! 📦
  docs/
    README.md               # How to use! 📚
    API.md                  # API documentation! 📋
  .gitignore                # Git settings! 📝`,
      },
    };
  }

  static async showTemplateSelector() {
    const templates = this.getTemplates();
    const items = Object.keys(templates).map((key) => ({
      label: templates[key].name,
      description: templates[key].description,
      detail: "✨ Click to use this awesome template!",
      template: key,
    }));

    const selected = await vscode.window.showQuickPick(items, {
      placeHolder: "🎨 Pick your favorite project template!",
      title: "🌟 Ready-Made Templates - Perfect for Getting Started!",
      matchOnDescription: true,
      matchOnDetail: true,
    });

    if (selected) {
      const template = templates[selected.template];
      const doc = await vscode.workspace.openTextDocument({
        content: template.content,
        language: "plaintext",
      });

      await vscode.window.showTextDocument(doc);

      // 🎊 Enhanced success message with next steps
      const nextSteps = await vscode.window.showInformationMessage(
        `🎉 ${template.name} template loaded! What would you like to do next?`,
        "🚀 Create Structure Now!",
        "👀 Preview First",
        "📝 Edit Template"
      );

      if (nextSteps === "🚀 Create Structure Now!") {
        // Auto-trigger structure creation
        setTimeout(() => {
          vscode.commands.executeCommand(
            "universalGenerator.createFromActiveEditor"
          );
        }, 1000);
      } else if (nextSteps === "👀 Preview First") {
        // Auto-trigger preview
        setTimeout(() => {
          vscode.commands.executeCommand("universalGenerator.previewStructure");
        }, 500);
      }
    }
  }

  // 🎯 Get templates by category for better organization
  static getTemplatesByCategory() {
    const templates = this.getTemplates();
    return {
      "🌐 Web Development": ["website", "react", "nodejs", "web_full"],
      "📱 Mobile Development": ["flutter", "mobile"],
      "🐍 Data & Python": ["python", "python_data"],
      "🎮 Game Development": ["game"],
      "☕ Enterprise": ["java"],
    };
  }

  // 🚀 Show categorized template selector (alternative method)
}

// 🏗️ Enhanced Structure Parser with Kid-Friendly Comments
class StructureParser {
  static parseTextStructure(text) {
    // 🧹 First, let's clean up the text and make it neat!
    const normalizedText = text.replace(/\r\n/g, "\n").replace(/\r/g, "\n");

    // 📝 Now let's split it into lines (like cutting paper into strips!)
    const lines = normalizedText
      .split("\n")
      .filter((line) => line.trim().length > 0); // Keep only lines with words!

    // 🏗️ This is where we build our magical structure!
    const result = [];
    const stack = []; // Think of this like a stack of building blocks!

    // 🔄 Let's look at each line one by one!
    for (let i = 0; i < lines.length; i++) {
      // 🔍 Figure out what this line is trying to tell us
      const item = this.parseLine(lines[i], i + 1);

      // 🚫 Skip empty or confusing lines
      if (item === null) continue;

      // 🏗️ Build our folder tree like stacking blocks!
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

      // 📁 If it's a folder, add it to our stack for future children!
      if (!item.isFile) {
        stack.push(item);
      }
    }

    return result;
  }

  static parseLine(line, lineNumber = 0) {
    if (!line || line.trim().length === 0) return null;

    // 🧹 Remove comments (everything after #)
    let workingLine = line.split("#")[0].trimEnd();
    if (workingLine.trim().length === 0) return null;

    let level = 0;
    let name = "";

    // 🏠 Root level detection (top-level folders/files)
    if (workingLine.match(/^[a-zA-Z_\.][a-zA-Z0-9_.-]*[\/\\]?\s*$/)) {
      name = workingLine.trim();
      level = 0;
    }
    // 🌳 Tree format detection (├── or └──)
    else if (workingLine.match(/^(\s*(?:[│\s]*[│]\s*)*)\s*[├└]──\s*(.+)$/)) {
      const match = workingLine.match(
        /^(\s*(?:[│\s]*[│]\s*)*)\s*[├└]──\s*(.+)$/
      );
      const prefix = match[1];
      name = match[2].trim();
      const verticalBars = (prefix.match(/│/g) || []).length;
      level = verticalBars + 1;
    }
    // 📐 Space-based indentation (fallback)
    else {
      const trimmed = workingLine.trim();
      if (trimmed.length > 0) {
        name = trimmed;
        const leadingSpaces =
          workingLine.length - workingLine.trimLeft().length;
        level = Math.floor(leadingSpaces / 2); // 2 spaces per level
      }
    }

    if (!name || name.length === 0) return null;

    // 🧽 Clean up the name (remove tree drawing characters)
    name = name.replace(/^[├└──\s│]+/, "").trim();
    name = this.cleanFileName(name);

    if (name.length === 0) return null;

    // 🔍 Figure out if it's a file or folder
    const isFile = this.isFilename(name);

    console.log(
      `📝 Line ${lineNumber}: "${name}" | ${
        isFile ? "📄 File" : "📁 Folder"
      } | Level: ${level}`
    );

    return {
      name: name,
      isFile: isFile,
      level: level,
      children: undefined,
    };
  }

  static cleanFileName(name) {
    // 🧹 Remove comments and arrows from file names
    const cleanedName = name
      .split("#")[0] // Remove # comments
      .split("->")[0] // Remove -> arrows
      .split("//")[0] // Remove // comments
      .split("/*")[0] // Remove /* comments
      .trim();

    return cleanedName;
  }

  static isFilename(name) {
    // 🧹 Remove trailing slashes for folders
    const cleanName = name.replace(/[\/\\]$/, "");

    // 📁 If it ends with / or \, it's definitely a folder
    if (name.endsWith("/") || name.endsWith("\\")) return false;

    // ⭐ If it starts with a dot, it's a file (dotfiles like .gitignore)
    if (cleanName.startsWith(".")) {
      console.log(`⭐ Found a special dotfile: "${cleanName}"`);
      return true;
    }

    // 📄 If it has an extension (.js, .html, .py, etc.), it's a file
    const extensionPattern = /\.[a-zA-Z0-9]{1,10}$/;
    if (extensionPattern.test(cleanName)) {
      console.log(`📄 Found a file with extension: "${cleanName}"`);
      return true;
    }

    // 📁 Everything else is probably a folder
    return false;
  }
}

// 🏗️ Enhanced Structure Creator with Friendly Messages
class StructureCreator {
  static async createStructure(basePath, items) {
    let filesCreated = 0;
    let foldersCreated = 0;

    for (const item of items) {
      const result = await this.createItem(basePath, item);
      filesCreated += result.files;
      foldersCreated += result.folders;
    }

    return { files: filesCreated, folders: foldersCreated };
  }

  static async createItem(basePath, item) {
    const cleanName = item.name.replace(/[\/\\]$/, "");
    const fullPath = path.join(basePath, cleanName);
    let filesCreated = 0;
    let foldersCreated = 0;

    try {
      if (item.isFile) {
        // 📄 Creating a file!
        const dir = path.dirname(fullPath);
        if (!fs.existsSync(dir)) {
          fs.mkdirSync(dir, { recursive: true });
        }
        fs.writeFileSync(fullPath, "", "utf8");
        console.log(`✅ Hooray! Created your file: ${cleanName} 🎉`);
        filesCreated = 1;
      } else {
        // 📁 Creating a folder!
        if (!fs.existsSync(fullPath)) {
          fs.mkdirSync(fullPath, { recursive: true });
        }
        console.log(`📁 Awesome! Created your folder: ${cleanName} 🌟`);
        foldersCreated = 1;

        // 👶 Create any children (files/folders inside this folder)
        if (item.children && item.children.length > 0) {
          const childResults = await this.createStructure(
            fullPath,
            item.children
          );
          filesCreated += childResults.files;
          foldersCreated += childResults.folders;
        }
      }
    } catch (error) {
      // 🤗 Friendly error message with helpful solutions
      const friendlyMessage = `😅 Oops! I had trouble creating "${cleanName}". 

💡 Here's what might help:
• Check if the name has special characters (try removing them!)
• Make sure you have permission to create files here  
• Try using a simpler name

Don't worry - coding has bumps sometimes! Let's try again! 🚀`;

      console.error(friendlyMessage);
      vscode.window.showErrorMessage(
        `😅 Couldn't create "${cleanName}" - let's try a simpler name!`
      );
      throw error;
    }

    return { files: filesCreated, folders: foldersCreated };
  }
}

// 🎯 Enhanced CodeLens Provider - The Magic Button!
class SimpleCodeLensProvider {
  constructor() {
    this._onDidChangeCodeLenses = new vscode.EventEmitter();
    this.onDidChangeCodeLenses = this._onDidChangeCodeLenses.event;
    this.lastDocumentUri = null;
    this.lastDocumentVersion = null;
    this.updateTimeout = null; // 🔧 Add this line to fix the error!
  }

  provideCodeLenses(document, token) {
    const text = document.getText();

    // 🔄 Check if document changed to avoid unnecessary updates
    if (
      this.lastDocumentUri === document.uri.toString() &&
      this.lastDocumentVersion === document.version
    ) {
      return this.lastCodeLenses || [];
    }

    this.lastDocumentUri = document.uri.toString();
    this.lastDocumentVersion = document.version;

    // 🔍 Show magic button only if we detect a project structure
    if (this.containsStructurePattern(text)) {
      const codeLenses = [];

      // 📍 Find a good position for the button (end of document)
      const lastLineIndex = document.lineCount - 1;
      const lastLine = document.lineAt(lastLineIndex);

      // If last line has content, position after it
      // If last line is empty, position at the beginning of that line
      let startPos, endPos;

      if (lastLine.text.trim().length > 0) {
        // Last line has content - position after it
        startPos = new vscode.Position(lastLineIndex, lastLine.text.length);
        endPos = new vscode.Position(lastLineIndex, lastLine.text.length);
      } else {
        // Last line is empty - position at beginning of that line
        startPos = new vscode.Position(lastLineIndex, 0);
        endPos = new vscode.Position(lastLineIndex, 0);
      }

      const range = new vscode.Range(startPos, endPos);
      // ✨ The magical button that makes everything happen!
      const mainCommand = {
        title: "🪄 ✨ MAGIC BUTTON - Click Here to Create Your Project! ✨ 🚀",
        command: "universalGenerator.showQuickPick",
        tooltip: "🎉 Click here to bring your project structure to life!",
      };

      codeLenses.push(new vscode.CodeLens(range, mainCommand));
      this.lastCodeLenses = codeLenses;
      return codeLenses;
    }

    this.lastCodeLenses = [];
    return [];
  }

  containsStructurePattern(text) {
    // 🔍 Look for patterns that suggest a project structure
    return (
      text.includes("├──") ||
      text.includes("└──") ||
      text.includes("/") ||
      text.includes("\\") ||
      text.includes("src/") ||
      text.includes("lib/") ||
      text.includes("app/") ||
      text.includes("components/") ||
      text.includes("index.html") ||
      text.includes("main.py") ||
      text.includes("App.js") ||
      /\.\w{1,10}(?:\s|$)/m.test(text)
    );
  }

  refresh() {
    this.lastDocumentUri = null;
    this.lastDocumentVersion = null;
    this._onDidChangeCodeLenses.fire();
  }
}

// 🚀 Main Extension Activation Function
function activate(context) {
  console.log("🎉 Magical Structure Builder is waking up!");

  const codeLensProvider = new SimpleCodeLensProvider();

  // 👀 Register the magic button provider
  const codeLensDisposable = vscode.languages.registerCodeLensProvider(
    "*",
    codeLensProvider
  );

  // 🎯 Main Command: Show the awesome menu
  let quickPickDisposable = vscode.commands.registerCommand(
    "universalGenerator.showQuickPick",
    async () => {
      const items = [
        {
          label: "🚀 Create My Project Structure",
          description: "Turn my text into real folders and files!",
          detail:
            "✨ This is the magic button - it creates everything for you!",
          action: "create",
        },
        {
          label: "👀 Show Me What You'll Create",
          description: "Let me see before you build it",
          detail: "🔍 Perfect for checking everything looks right first!",
          action: "preview",
        },
        {
          label: "📚 Teach Me With Examples",
          description: "Show me how to write project structures",
          detail: "🎓 Great for learning - includes lots of helpful examples!",
          action: "tutorial",
        },
        {
          label: "🎨 Use a Ready-Made Template",
          description: "Start with a pre-made project layout",
          detail:
            "⚡ Super quick - choose from website, game, or app templates!",
          action: "template",
        },
        {
          label: "📝 Start Fresh With Examples",
          description: "Open a new file with helpful examples",
          detail: "🌟 Perfect for beginners - shows you exactly what to do!",
          action: "new",
        },
      ];

      const selected = await vscode.window.showQuickPick(items, {
        placeHolder: "🌟 What would you like to do today? Pick your adventure!",
        title: "🎉 Magical Structure Builder - Let's Create Something Awesome!",
        matchOnDescription: true,
        matchOnDetail: true,
      });

      // 🎊 Encouraging messages for each choice
      if (selected) {
        switch (selected.action) {
          case "create":
            vscode.window.showInformationMessage(
              "🎯 Great choice! Let's build your project! 🏗️"
            );
            await vscode.commands.executeCommand(
              "universalGenerator.createFromActiveEditor"
            );
            break;
          case "preview":
            vscode.window.showInformationMessage(
              "👁️ Smart thinking! Let's preview first! 🔍"
            );
            await vscode.commands.executeCommand(
              "universalGenerator.previewStructure"
            );
            break;
          case "tutorial":
            vscode.window.showInformationMessage(
              "📖 Learning mode activated! You're doing great! 🌟"
            );
            await vscode.commands.executeCommand(
              "universalGenerator.showTutorial"
            );
            break;
          case "template":
            vscode.window.showInformationMessage(
              "🎨 Template time! Let's pick something cool! ✨"
            );
            await TemplateLibrary.showTemplateSelector();
            break;
          case "new":
            vscode.window.showInformationMessage(
              "📝 New project adventure starting! 🚀"
            );
            await vscode.commands.executeCommand(
              "universalGenerator.createFromText"
            );
            break;
        }
      }
    }
  );

  // 📚 Tutorial Command
  let tutorialDisposable = vscode.commands.registerCommand(
    "universalGenerator.showTutorial",
    async () => {
      const doc = await vscode.workspace.openTextDocument({
        content: FriendlyGuide.getTutorialContent(),
        language: "markdown",
      });

      await vscode.window.showTextDocument(doc);
      vscode.window.showInformationMessage(
        "📚 Tutorial opened! Take your time and have fun learning! 🎓"
      );
    }
  );

  // 📝 Create New File Command
  let openEditorDisposable = vscode.commands.registerCommand(
    "universalGenerator.createFromText",
    async () => {
      try {
        if (
          !vscode.workspace.workspaceFolders ||
          vscode.workspace.workspaceFolders.length === 0
        ) {
          vscode.window.showErrorMessage(
            "🏠 Please open a folder first so I know where to create your project!"
          );
          return;
        }

        const doc = await vscode.workspace.openTextDocument({
          content: `# 🎉 Welcome to the Magical Project Builder! ✨

# 🌟 How It Works:
# 1️⃣ Write your folder names (end with /)
# 2️⃣ Write your file names (with extensions like .html, .js, .py)
# 3️⃣ Click the magic button that appears below!

# 🎯 Quick Start Examples:

## 🌐 Simple Website Project
mern-task-manager/
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   └── taskController.js
│   ├── models/
│   │   └── Task.js
│   ├── routes/
│   │   └── taskRoutes.js
│   ├── .env
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   └── TaskList.js
│   │   │   └── TaskForm.js
│   │   ├── App.js
│   │   ├── index.js
│   │   └── api.js
│   ├── package.json
│   └── .env
│
└── README.md


# 🎨 Pro Tips:
# - Folders end with / (like: images/)
# - Files have dots (like: index.html)
# - Use # for notes (like this!)
# - Start simple, then add more!

# ✨ Replace this with your own project idea and click the magic button! 🪄`,
          language: "plaintext",
        });

        await vscode.window.showTextDocument(doc);

        // 🔄 Refresh the magic button
        setTimeout(() => {
          codeLensProvider.refresh();
        }, 200);

        vscode.window.showInformationMessage(
          "🎊 Perfect! Now write your project structure above and watch for the magic button! ✨"
        );
      } catch (error) {
        vscode.window.showErrorMessage(
          `😅 Oops! Something went wrong: ${error.message}`
        );
      }
    }
  );

  // 🏗️ Create Structure Command
  let createFromEditorDisposable = vscode.commands.registerCommand(
    "universalGenerator.createFromActiveEditor",
    async () => {
      try {
        const activeEditor = vscode.window.activeTextEditor;

        if (!activeEditor) {
          vscode.window.showErrorMessage(
            "📝 Please open a file first so I can read your project structure!"
          );
          return;
        }

        if (
          !vscode.workspace.workspaceFolders ||
          vscode.workspace.workspaceFolders.length === 0
        ) {
          vscode.window.showErrorMessage(
            "🏠 Please open a folder first so I know where to create your awesome project!"
          );
          return;
        }

        const text = activeEditor.document.getText();
        if (!text.trim()) {
          vscode.window.showErrorMessage(
            "📝 Your file is empty! Please write your project structure first! 🎯"
          );
          return;
        }

        // 🤔 Ask for confirmation with a friendly message
        const confirm = await vscode.window.showWarningMessage(
          "🎉 Ready to create your amazing project? This will make real folders and files!",
          { modal: true },
          "🚀 Yes! Let's Build It!",
          "🤔 Let Me Check Again",
          "❌ Cancel"
        );

        if (confirm !== "🚀 Yes! Let's Build It!") {
          if (confirm === "🤔 Let Me Check Again") {
            vscode.window.showInformationMessage(
              "👍 Good idea! Take your time to make it perfect! ✨"
            );
          }
          return;
        }

        const rootPath = vscode.workspace.workspaceFolders[0].uri.fsPath;

        // 🎊 Show progress with encouraging messages
        const results = await vscode.window.withProgress(
          {
            location: vscode.ProgressLocation.Notification,
            title: "✨ Creating your awesome project...",
            cancellable: false,
          },
          async (progress) => {
            progress.report({
              increment: 0,
              message: "🔍 Reading your structure...",
            });

            const parsedStructure = StructureParser.parseTextStructure(text);

            if (parsedStructure.length === 0) {
              throw new Error(
                "😅 I couldn't understand your structure! Try using simple names with folders ending in / and files with extensions like .html 🎯"
              );
            }

            progress.report({
              increment: 30,
              message: "🏗️ Creating folders and files...",
            });
            const results = await StructureCreator.createStructure(
              rootPath,
              parsedStructure
            );

            progress.report({
              increment: 90,
              message: "🎨 Adding finishing touches...",
            });

            // Small delay to show completion
            await new Promise((resolve) => setTimeout(resolve, 500));

            progress.report({ increment: 100, message: "🎉 Ta-da! All done!" });

            return results;
          }
        );

        // 🎊 Celebration message with details
        const totalItems = results.files + results.folders;
        vscode.window.showInformationMessage(
          `🎊 AMAZING! Your project is ready! 🎯
          
📁 Created ${results.folders} folders
📄 Created ${results.files} files  
📊 Total: ${totalItems} items

You're becoming a coding superstar! ⭐`
        );

        // 🔄 Refresh the file explorer to show new files
        await vscode.commands.executeCommand(
          "workbench.files.action.refreshFilesExplorer"
        );

        // 🎯 Offer to open a file
        if (results.files > 0) {
          const openFile = await vscode.window.showInformationMessage(
            "🚀 Want to start coding right away?",
            "📝 Open a file",
            "👍 I'm good!"
          );

          if (openFile === "📝 Open a file") {
            // Try to find and open index.html, main.py, or App.js
            const commonFiles = ["index.html", "main.py", "App.js", "game.js"];
            for (const fileName of commonFiles) {
              try {
                const filePath = path.join(rootPath, fileName);
                if (fs.existsSync(filePath)) {
                  const doc = await vscode.workspace.openTextDocument(filePath);
                  await vscode.window.showTextDocument(doc);
                  break;
                }
              } catch (error) {
                // Continue to next file
              }
            }
          }
        }
      } catch (error) {
        vscode.window.showErrorMessage(`😅 Oops! ${error.message}`);
      }
    }
  );

  // 👀 Preview Structure Command
  let previewDisposable = vscode.commands.registerCommand(
    "universalGenerator.previewStructure",
    async () => {
      try {
        const activeEditor = vscode.window.activeTextEditor;
        if (!activeEditor) {
          vscode.window.showErrorMessage(
            "📝 Please open a file with your project structure first!"
          );
          return;
        }

        const text = activeEditor.document.getText();
        const parsedStructure = StructureParser.parseTextStructure(text);

        if (parsedStructure.length === 0) {
          vscode.window.showWarningMessage(
            "🤔 I couldn't find a valid project structure to preview. Try adding some folders and files! 📁📄"
          );
          return;
        }

        const previewContent = generatePreviewContent(parsedStructure);
        const previewDoc = await vscode.workspace.openTextDocument({
          content: previewContent,
          language: "markdown",
        });

        await vscode.window.showTextDocument(
          previewDoc,
          vscode.ViewColumn.Beside
        );

        vscode.window.showInformationMessage(
          "👁️ Preview ready! Check it out and then come back to create it! 🚀"
        );
      } catch (error) {
        vscode.window.showErrorMessage(`😅 Preview error: ${error.message}`);
      }
    }
  );

  // 🔄 Monitor document changes
  const onDidChangeTextDocument = vscode.workspace.onDidChangeTextDocument(
    (event) => {
      // Debounce CodeLens updates
      clearTimeout(codeLensProvider.updateTimeout);
      codeLensProvider.updateTimeout = setTimeout(() => {
        codeLensProvider.refresh();
      }, 1000);
    }
  );

  // 🎊 Show welcome message for new users
  const config = vscode.workspace.getConfiguration("magicalStructureBuilder");
  if (!config.get("hasSeenWelcome")) {
    vscode.window
      .showInformationMessage(
        "🎉 Welcome to Magical Structure Builder! Ready to create amazing projects?",
        "🚀 Show Me How!",
        "📚 Open Tutorial",
        "👍 I'm Ready!"
      )
      .then((choice) => {
        if (choice === "🚀 Show Me How!") {
          vscode.commands.executeCommand("universalGenerator.createFromText");
        } else if (choice === "📚 Open Tutorial") {
          vscode.commands.executeCommand("universalGenerator.showTutorial");
        }
        config.update(
          "hasSeenWelcome",
          true,
          vscode.ConfigurationTarget.Global
        );
      });
  }

  // 📋 Register all commands and providers
  context.subscriptions.push(
    codeLensDisposable,
    onDidChangeTextDocument,
    quickPickDisposable,
    tutorialDisposable,
    openEditorDisposable,
    createFromEditorDisposable,
    previewDisposable
  );

  console.log(
    "✅ Magical Structure Builder is ready to create amazing projects!"
  );
}

// 📊 Preview Content Generator
function generatePreviewContent(items) {
  let content = "# 👁️ Project Structure Preview\n\n";
  content += "## 🎯 Here's what I'll create for you:\n\n";

  function buildTree(items, level) {
    let result = "";
    for (const item of items) {
      const indent = "  ".repeat(level);
      const icon = item.isFile ? "📄" : "📁";
      result += `${indent}${icon} **${item.name}**${
        item.isFile ? " _(file)_" : " _(folder)_"
      }\n`;

      if (item.children && item.children.length > 0) {
        result += buildTree(item.children, level + 1);
      }
    }
    return result;
  }

  content += buildTree(items, 0);

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
  content += `\n## 📊 Summary\n\n`;
  content += `- 📁 **Total Folders:** ${counts.folders}\n`;
  content += `- 📄 **Total Files:** ${counts.files}\n`;
  content += `- 🎯 **Total Items:** ${counts.files + counts.folders}\n\n`;

  content += `## 🚀 Next Steps\n\n`;
  content += `1. 👀 Review the structure above\n`;
  content += `2. 🔄 Go back to your structure file to make changes\n`;
  content += `3. 🎯 Click the magic button to create everything!\n\n`;
  content += `**Ready to build your awesome project? Let's go! ✨**`;

  return content;
}

// 🔄 Extension Deactivation
function deactivate() {
  console.log("👋 Magical Structure Builder is taking a break! See you soon!");
}

module.exports = { activate, deactivate };
