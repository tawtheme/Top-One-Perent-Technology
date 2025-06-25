# Top One Percent Technology - Angular Project

This is an Angular project set up with Tailwind CSS for building modern web applications.

## 🚀 Features

- **Angular 19** - Latest version with modern features
- **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- **SCSS Support** - Enhanced styling capabilities
- **Routing** - Built-in Angular routing
- **Responsive Design** - Mobile-first approach with Tailwind CSS

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (version 18 or higher)
- **npm** (comes with Node.js)
- **Angular CLI** (install globally with `npm install -g @angular/cli`)

## 🛠️ Installation

1. **Clone the repository** (if not already done):
   ```bash
   git clone <repository-url>
   cd top-one-percent-tech
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

## 🏃‍♂️ Development

### Start Development Server

```bash
ng serve
```

The application will be available at `http://localhost:4200/`

### Build for Production

```bash
ng build
```

The build artifacts will be stored in the `dist/` directory.

### Run Tests

```bash
ng test
```

### Lint Code

```bash
ng lint
```

## 🎨 Tailwind CSS

This project is configured with Tailwind CSS for styling. The configuration files are:

- `tailwind.config.js` - Tailwind configuration
- `postcss.config.js` - PostCSS configuration
- `src/styles.scss` - Global styles with Tailwind directives

### Using Tailwind CSS

You can use Tailwind utility classes directly in your HTML templates:

```html
<div class="bg-blue-500 text-white p-4 rounded-lg shadow-md">
  <h1 class="text-2xl font-bold mb-2">Hello World</h1>
  <p class="text-blue-100">This is styled with Tailwind CSS</p>
</div>
```

### Customizing Tailwind

To customize Tailwind CSS, edit the `tailwind.config.js` file:

```javascript
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#1e40af',
      },
    },
  },
  plugins: [],
}
```

## 📁 Project Structure

```
src/
├── app/
│   ├── app.component.html      # Main app template
│   ├── app.component.ts        # Main app component
│   ├── app.component.scss      # App component styles
│   ├── app.config.ts          # App configuration
│   └── app.routes.ts          # Routing configuration
├── styles.scss                # Global styles with Tailwind
└── main.ts                   # Application entry point
```

## 🔧 Configuration Files

- `angular.json` - Angular workspace configuration
- `tsconfig.json` - TypeScript configuration
- `tailwind.config.js` - Tailwind CSS configuration
- `postcss.config.js` - PostCSS configuration
- `package.json` - Project dependencies and scripts

## 📚 Useful Commands

- `ng generate component <name>` - Generate a new component
- `ng generate service <name>` - Generate a new service
- `ng generate pipe <name>` - Generate a new pipe
- `ng generate directive <name>` - Generate a new directive

## 🌟 Getting Started

1. Start the development server: `ng serve`
2. Open your browser and navigate to `http://localhost:4200`
3. Start building your application!

## 📖 Resources

- [Angular Documentation](https://angular.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Angular CLI Documentation](https://angular.dev/tools/cli)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test your changes
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.
