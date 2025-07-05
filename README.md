# 🎵 GMT Music Decoder

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)
[![Open Source Love](https://badges.frapsoft.com/os/v2/open-source.svg?v=103)](https://github.com/ellerbrock/open-source-badges/)
[![GitHub Repo](https://img.shields.io/badge/View%20on-GitHub-black?logo=github)](https://github.com/GarvitOfficial/GMT-Music-Decoder)


## 🚀 Live Demo

**🔗 [https://gmt-music-decoder.netlify.app/](https://gmt-music-decoder.netlify.app/)**

A modern web application for identifying and managing your music collection. Built with React, TypeScript, and TailwindCSS.

![Main Interface](/screenshots/main.png)
*Main application interface*

## 🚀 Features

- **Modern UI**: Clean, responsive interface built with React and TailwindCSS
- **Type Safety**: Built with TypeScript for better developer experience
- **Fast & Lightweight**: Optimized with Vite for quick development and builds
- **Responsive Design**: Works on desktop and mobile devices
- **Dark/Light Mode**: Built-in theme support

## 🔑 API Configuration

This application uses ACRCloud's audio recognition API. To get started, you'll need to:

1. Sign up for an ACRCloud account at [https://www.acrcloud.com/](https://www.acrcloud.com/)
2. Create a new project in the ACRCloud console
3. Get your API credentials (Host, Access Key, and Secret Key)
4. [Read the API documentation](https://docs.acrcloud.com/reference/identification-api) for more details

Update the configuration in `src/services/acrcloud.ts` with your credentials:

```typescript
const ACR_CONFIG = {
  host: 'your-host',
  endpoint: '/v1/identify',
  access_key: 'your-access-key',
  secret_key: 'your-secret-key',
  signature_version: '1',
  data_type: 'audio',
  secure: true,
}
```

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: TailwindCSS with PostCSS
- **UI Components**: Framer Motion, Lucide Icons
- **State Management**: React Context API
- **Routing**: React Router v6
- **Build Tool**: Vite
- **Package Manager**: npm

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm (comes with Node.js)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/GarvitOfficial/GMT-Music-Decoder.git
   cd GMT-Music-Decoder
   ```

2. **Navigate to the project directory and install dependencies**
   ```bash
   cd src
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   The application will be available at `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## 📸 Screenshots

### Main Interface
![Main Interface](/screenshots/main.png)

### Web Version
![Web Version](/screenshots/web.png)

## 🏗️ Project Structure

```
GMT-Music-Decoder/
├── src/
│   ├── public/           # Static assets
│   ├── src/
│   │   ├── components/   # Reusable UI components
│   │   ├── pages/        # Application pages
│   │   │   ├── Home.tsx  # Main page
│   │   │   ├── About.tsx # About page
│   │   │   └── Settings.tsx # Settings page
│   │   ├── App.tsx       # Main application component
│   │   ├── main.tsx      # Application entry point
│   │   └── index.css     # Global styles
│   ├── package.json      # Project dependencies
│   └── vite.config.ts    # Vite configuration
├── screenshots/          # Application screenshots
└── README.md             # Project documentation
```

## 🎯 Project Goals

- Create a modern, responsive music management interface
- Implement smooth animations and transitions
- Ensure type safety with TypeScript
- Optimize for performance and accessibility

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

Please ensure your code follows the project's style and includes appropriate tests.

### Development Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Make your changes and ensure all tests pass
4. Commit your changes with a descriptive commit message
5. Push to your fork and submit a pull request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

## 👥 Team & Open Source

This project is open source and contributions are welcome! Feel free to submit issues and pull requests.

[![Star on GitHub](https://img.shields.io/github/stars/GarvitOfficial/GMT-Music-Decoder?style=social)](https://github.com/GarvitOfficial/GMT-Music-Decoder/stargazers)
[![Fork on GitHub](https://img.shields.io/github/forks/GarvitOfficial/GMT-Music-Decoder?style=social)](https://github.com/GarvitOfficial/GMT-Music-Decoder/fork)

```bash
# Clone the repository
git clone https://github.com/GarvitOfficial/GMT-Music-Decoder.git
```

## 🙏 Acknowledgments

- [Vite](https://vitejs.dev/) - For the amazing build tooling
- [React](https://reactjs.org/) - For the UI library
- [TailwindCSS](https://tailwindcss.com/) - For the utility-first CSS framework
- [Lucide Icons](https://lucide.dev/) - For the beautiful icons

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Made with ❤️  | [MIT License](LICENSE)
