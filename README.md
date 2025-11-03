# Examen du permis de conduire - Questions Orales

Application d'entraînement pour les questions de vérifications du permis de conduire français.

## 🌐 Live Demo

**Access the app here:** [https://nevinyatko.github.io/public/](https://nevinyatko.github.io/public/)

## 📱 Features

- **100 Question Blocks**: Complete database of verification questions (VI and VE types)
- **Random Block Selection**: Practice with randomized question blocks
- **Manual Block Selection**: Choose specific blocks (0-100)
- **Progressive Web App (PWA)**: Install on mobile devices like a native app
- **Offline Support**: Works without internet after first visit
- **Mobile-First Design**: Optimized for smartphones and tablets

## 🗂️ Question Types

- **VI (Vérification Intérieure)**: Interior verification questions
- **VE (Vérification Extérieure)**: Exterior verification questions
- **3 Questions per Block**: Vérification, QSER, and 1ers Secours

## 🚀 Development

### Prerequisites

- Node.js (v18 or higher)
- npm

### Installation

```bash
npm install
```

### Running Locally

```bash
npm run dev
```

The app will be available at `http://localhost:3000/public/`

### Building for Production

```bash
npm run build
```

The production build will be created in the `build` directory.

## 📦 Deployment

The app is automatically deployed to GitHub Pages using the `gh-pages` package.

### Deploy to GitHub Pages

```bash
npm run deploy
```

This command will:
1. Build the production version
2. Push the build to the `gh-pages` branch
3. Deploy to GitHub Pages at https://nevinyatko.github.io/public/

### GitHub Repository

- **Repository**: [https://github.com/nevinyatko/public](https://github.com/nevinyatko/public)
- **Branch**: `master` (source code)
- **Deployment Branch**: `gh-pages` (production build)

## 🛠️ Tech Stack

- **React 18.3.1** - UI framework
- **TypeScript** - Type safety
- **Vite 6.3.5** - Build tool and dev server
- **Tailwind CSS v4** - Styling
- **Radix UI** - Accessible component primitives
- **Lucide React** - Icons
- **GitHub Pages** - Hosting

## 📱 Installing as PWA

### iOS (Safari)
1. Open the app in Safari
2. Tap the Share button
3. Tap "Add to Home Screen"

### Android (Chrome)
1. Open the app in Chrome
2. Tap the menu (three dots)
3. Tap "Install app" or "Add to Home Screen"

### Desktop
- Click the install icon in the browser address bar

## 📄 Project Structure

```
driving_test_training_app_prototype/
├── public/
│   ├── manifest.json       # PWA manifest
│   └── sw.js              # Service worker for offline support
├── src/
│   ├── components/        # React components
│   │   ├── WelcomeScreen.tsx
│   │   ├── QuestionScreen.tsx
│   │   └── SummaryScreen.tsx
│   ├── data/
│   │   └── questions.ts   # All 100 question blocks
│   ├── App.tsx            # Main app component
│   └── main.tsx           # Entry point
├── vite.config.ts         # Vite configuration
└── package.json           # Dependencies and scripts

```

## 📚 Additional Documentation

- [DEPLOYMENT.md](DEPLOYMENT.md) - Detailed deployment guide
- [IMPLEMENTATION_SUMMARY.md](IMPLEMENTATION_SUMMARY.md) - Complete implementation details

## 🎨 Original Design

The original Figma design is available at: [https://www.figma.com/design/JEmtz0bF5hJM2ydbXLL7ib/Driving-Test-Training-App](https://www.figma.com/design/JEmtz0bF5hJM2ydbXLL7ib/Driving-Test-Training-App)

## 📝 License

This project is private and intended for personal use.

---

**Built with assistance from Claude Code**
