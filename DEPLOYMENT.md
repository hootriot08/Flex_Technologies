# How to Deploy Flex Technologies Website

This guide covers multiple ways to publish your website on the internet.

## Option 1: Vercel (Recommended - Easiest)

Vercel is perfect for React/Vite projects and offers free hosting.

### Steps:

1. **Build your project locally first** (to test):
   ```bash
   npm run build
   ```

2. **Install Vercel CLI** (optional, but recommended):
   ```bash
   npm install -g vercel
   ```

3. **Deploy via CLI**:
   ```bash
   vercel
   ```
   - Follow the prompts
   - It will ask you to login/create account
   - Choose default settings
   - Your site will be live in seconds!

4. **Or deploy via GitHub** (even easier):
   - Push your code to GitHub
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Vite and deploy automatically
   - Every push to main branch = automatic deployment

### Vercel Configuration (optional)

Create `vercel.json` in root if you need custom settings:
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "devCommand": "npm run dev",
  "installCommand": "npm install"
}
```

---

## Option 2: Netlify

Similar to Vercel, very easy to use.

### Steps:

1. **Build your project**:
   ```bash
   npm run build
   ```

2. **Install Netlify CLI**:
   ```bash
   npm install -g netlify-cli
   ```

3. **Deploy**:
   ```bash
   netlify deploy --prod
   ```
   - First time: login and authorize
   - Choose `dist` as your publish directory
   - Your site will be live!

4. **Or use Netlify Drop** (no account needed for testing):
   - Go to [app.netlify.com/drop](https://app.netlify.com/drop)
   - Drag and drop your `dist` folder
   - Get instant URL!

5. **Or connect to GitHub**:
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect GitHub repo
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Deploy!

---

## Option 3: GitHub Pages

Free hosting directly from GitHub.

### Steps:

1. **Install gh-pages package**:
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json**:
   Add these scripts:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

3. **Update vite.config.ts**:
   ```typescript
   import { defineConfig } from 'vite'
   import react from '@vitejs/plugin-react'

   export default defineConfig({
     plugins: [react()],
     base: '/your-repo-name/', // Replace with your GitHub repo name
   })
   ```

4. **Deploy**:
   ```bash
   npm run deploy
   ```

5. **Enable GitHub Pages**:
   - Go to your repo → Settings → Pages
   - Source: `gh-pages` branch
   - Your site will be at: `https://yourusername.github.io/your-repo-name/`

---

## Option 4: Cloudflare Pages

Fast, free, and easy.

### Steps:

1. **Push code to GitHub/GitLab**

2. **Go to [dash.cloudflare.com](https://dash.cloudflare.com)**

3. **Pages → Create a project**

4. **Connect repository**

5. **Build settings**:
   - Build command: `npm run build`
   - Build output directory: `dist`

6. **Deploy!**

---

## Option 5: Traditional Web Hosting (cPanel, etc.)

If you have traditional hosting:

1. **Build your project**:
   ```bash
   npm run build
   ```

2. **Upload the `dist` folder contents** to your web server's `public_html` or `www` directory

3. **Done!**

---

## Quick Comparison

| Platform | Free Tier | Ease of Use | Custom Domain | Auto Deploy |
|----------|-----------|-------------|---------------|-------------|
| **Vercel** | ✅ Yes | ⭐⭐⭐⭐⭐ | ✅ Free | ✅ Yes |
| **Netlify** | ✅ Yes | ⭐⭐⭐⭐⭐ | ✅ Free | ✅ Yes |
| **Cloudflare Pages** | ✅ Yes | ⭐⭐⭐⭐ | ✅ Free | ✅ Yes |
| **GitHub Pages** | ✅ Yes | ⭐⭐⭐ | ✅ Free | ✅ Yes |

---

## Recommended: Vercel (Fastest Setup)

1. Push code to GitHub
2. Go to vercel.com
3. Import GitHub repo
4. Deploy (automatic)
5. Done! 🎉

Your site will get a URL like: `https://flex-technologies.vercel.app`

You can also add a custom domain later in Vercel settings.

---

## Before Deploying

Make sure:
- ✅ All images are in `public/` folder
- ✅ `npm run build` works without errors
- ✅ Test locally with `npm run preview`
- ✅ Check that all links work
- ✅ Verify contact form works

---

## Need Help?

- Vercel Docs: https://vercel.com/docs
- Netlify Docs: https://docs.netlify.com
- Cloudflare Pages: https://developers.cloudflare.com/pages

