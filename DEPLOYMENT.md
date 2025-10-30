# Deployment Guide

## Plan 1: Static Site Deployment

The app is now ready for deployment as a static Progressive Web App (PWA).

### What's Been Implemented

1. **Database Integration**: All 100 question blocks from the database integrated into `src/data/questions.ts`
2. **Production Build Configuration**: Vite optimized with code splitting and minification
3. **Mobile-First Optimization**: Meta tags for mobile devices and PWA capability
4. **PWA Features**:
   - Service worker for offline functionality (`public/sw.js`)
   - Web app manifest (`public/manifest.json`)
   - iOS-specific meta tags for home screen installation

### Build Output

The production build is located in `/build` directory:
- Total bundle size: ~267 KB (gzipped: ~74 KB)
- Split into 3 chunks: vendor (React), UI (Radix components), and main app
- All assets properly minified and optimized

### Deployment Options

#### Option 1: Vercel (Recommended)

1. Create a Vercel account at https://vercel.com
2. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```
3. Deploy:
   ```bash
   cd /Users/annaokatenko/questions_examen/driving_test_training_app_prototype
   vercel
   ```
4. Follow the prompts to link your project
5. For subsequent deployments:
   ```bash
   vercel --prod
   ```

**Configuration**: Create `vercel.json` (optional):
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "build",
  "framework": "vite"
}
```

#### Option 2: Netlify

1. Create a Netlify account at https://netlify.com
2. Install Netlify CLI:
   ```bash
   npm i -g netlify-cli
   ```
3. Deploy:
   ```bash
   cd /Users/annaokatenko/questions_examen/driving_test_training_app_prototype
   netlify deploy
   ```
4. Specify build folder as `build`
5. For production:
   ```bash
   netlify deploy --prod
   ```

**Configuration**: Create `netlify.toml`:
```toml
[build]
  command = "npm run build"
  publish = "build"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

#### Option 3: GitHub Pages

1. Push your code to a GitHub repository
2. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```
3. Add to `package.json`:
   ```json
   "homepage": "https://yourusername.github.io/your-repo-name",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```
4. Deploy:
   ```bash
   npm run deploy
   ```

### Testing Locally

To test the production build locally:

```bash
npm run build
npx serve -s build
```

Then open http://localhost:3000 in your browser.

### PWA Installation

Once deployed, users can install the app:
- **iOS**: Tap Share → Add to Home Screen
- **Android**: Tap menu → Install app / Add to Home Screen
- **Desktop**: Click the install icon in the address bar

### Post-Deployment Checklist

- [ ] Verify all 100 question blocks are accessible
- [ ] Test random block selection
- [ ] Test on mobile devices (iOS and Android)
- [ ] Verify PWA installation works
- [ ] Test offline functionality
- [ ] Check responsive design on different screen sizes
- [ ] Verify service worker is registered (check browser DevTools)

### Future Enhancements (Plan 2)

Once you're ready to add user progress tracking:
1. Implement LocalStorage for saving user answers
2. Add statistics tracking (correct/incorrect answers)
3. Add progress indicators
4. Consider migrating to Plan 4 (Supabase) for cross-device sync

### Support

For issues or questions:
- Check Vite documentation: https://vitejs.dev
- Check your hosting provider's documentation
- Review browser console for errors
