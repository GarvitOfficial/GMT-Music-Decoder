# 🚀 Setup Guide - GMT Music Decoder

This guide will walk you through setting up the GMT Music Decoder app from scratch.

## 📋 Prerequisites

Before you begin, make sure you have the following installed:

- **Node.js** (v16 or higher)
  - Download from [nodejs.org](https://nodejs.org/)
  - Verify installation: `node --version`

- **npm** (comes with Node.js)
  - Verify installation: `npm --version`

- **Git** (optional, for version control)
  - Download from [git-scm.com](https://git-scm.com/)

## 🛠️ Step-by-Step Setup

### 1. Project Setup

```bash
# Navigate to your desired directory
cd /path/to/your/projects

# Clone the repository (if using Git)
git clone <your-repo-url>
cd gmt-music-decoder

# Or create a new directory and copy files
mkdir gmt-music-decoder
cd gmt-music-decoder
```

### 2. Install Dependencies

```bash
# Install all required packages
npm install

# This will install:
# - React 18.3.1
# - TypeScript 5.5.3
# - Vite 5.4.1
# - Tailwind CSS 3.4.1
# - Framer Motion 11.0.8
# - React Hot Toast 2.4.1
# - And other dependencies...
```

### 3. Configure ACRCloud (Optional)

If you want to use your own ACRCloud account:

1. **Sign up for ACRCloud**
   - Go to [acrcloud.com](https://acrcloud.com)
   - Create a free account
   - Get your access key and secret

2. **Update configuration**
   - Open `src/services/acrcloud.ts`
   - Replace the placeholder values with your credentials:

```typescript
const ACR_CONFIG = {
  host: 'identify-ap-southeast-1.acrcloud.com',
  access_key: 'YOUR_ACCESS_KEY_HERE',
  access_secret: 'YOUR_ACCESS_SECRET_HERE',
  endpoint: '/v1/identify',
}
```

3. **Or use environment variables**
   - Create a `.env` file in the root directory:

```env
VITE_ACR_HOST=identify-ap-southeast-1.acrcloud.com
VITE_ACR_ACCESS_KEY=your_access_key_here
VITE_ACR_ACCESS_SECRET=your_access_secret_here
```

### 4. Start Development Server

```bash
# Start the development server
npm run dev

# You should see output like:
# VITE v5.4.19  ready in 395 ms
# ➜  Local:   http://localhost:5173/
# ➜  Network: use --host to expose
```

### 5. Open in Browser

Navigate to `http://localhost:5173` in your web browser.

## 🎯 Testing the App

### Test File Upload

1. **Prepare a test audio file**
   - Use any MP3, WAV, M4A, FLAC, AAC, AMR, or APE file
   - Make sure it's a recognizable song

2. **Upload the file**
   - Drag and drop the file onto the upload zone
   - Or click "Choose File" to browse

3. **Wait for results**
   - The app will analyze the audio
   - You should see song details appear

### Test Features

- ✅ **Navigation**: Click through different pages
- ✅ **Responsive Design**: Resize browser window
- ✅ **Animations**: Hover over elements
- ✅ **Mobile**: Test on mobile device or dev tools

## 🔧 Troubleshooting

### Common Issues

**1. Port already in use**
```bash
# Kill process on port 5173
lsof -ti:5173 | xargs kill -9

# Or use a different port
npm run dev -- --port 3000
```

**2. Dependencies not installed**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

**3. TypeScript errors**
```bash
# Check TypeScript configuration
npx tsc --noEmit
```

**4. Build errors**
```bash
# Clear build cache
rm -rf dist
npm run build
```

### Performance Issues

**1. Slow development server**
```bash
# Use faster package manager
npm install -g pnpm
pnpm install
pnpm dev
```

**2. Large bundle size**
```bash
# Analyze bundle
npm run build
npx vite-bundle-analyzer dist
```

## 🚀 Production Deployment

### Build for Production

```bash
# Create optimized build
npm run build

# Preview production build
npm run preview
```

### Deploy to Vercel

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

3. **Follow prompts**
   - Link to existing project or create new
   - Set build command: `npm run build`
   - Set output directory: `dist`

### Deploy to Netlify

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Upload to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop the `dist` folder
   - Or connect your Git repository

### Deploy to GitHub Pages

1. **Add GitHub Pages dependency**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add scripts to package.json**
   ```json
   {
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Deploy**
   ```bash
   npm run deploy
   ```

## 📱 Mobile Testing

### iOS Safari
- Test on actual device or simulator
- Check for touch interactions
- Verify responsive design

### Android Chrome
- Test on actual device or emulator
- Check for file upload functionality
- Verify animations performance

### PWA Features (Future)
- Add service worker for offline support
- Implement app manifest
- Enable "Add to Home Screen"

## 🔒 Security Considerations

### Environment Variables
- Never commit API keys to Git
- Use `.env.local` for local development
- Set environment variables in deployment platform

### CORS Configuration
- Configure allowed origins in ACRCloud
- Set up proper CORS headers if needed

### HTTPS
- Always use HTTPS in production
- Configure SSL certificates
- Enable HSTS headers

## 📊 Monitoring & Analytics

### Performance Monitoring
- Use Lighthouse for performance audits
- Monitor Core Web Vitals
- Track user interactions

### Error Tracking
- Implement error boundaries
- Use Sentry or similar service
- Monitor API failures

## 🎨 Customization

### Styling
- Modify `tailwind.config.js` for theme changes
- Update `src/index.css` for custom styles
- Add new components in `src/components/`

### Features
- Add new pages in `src/pages/`
- Extend services in `src/services/`
- Update routing in `src/App.tsx`

## 📞 Support

If you encounter any issues:

1. **Check the documentation**
2. **Search existing issues**
3. **Create a new issue** with:
   - Error message
   - Steps to reproduce
   - Browser/OS information
   - Screenshots if applicable

---

**Happy coding! 🎵✨** 