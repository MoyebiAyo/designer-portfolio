# Mouse Technologies Portfolio - Setup Guide

## 🚀 Quick Start

### Local Development
Run `START-ALL.bat` to start both servers:
- **Portfolio**: http://localhost:3000
- **CMS Admin**: http://localhost:3333

### Sanity CMS Login
1. Visit http://localhost:3333
2. Login with your GitHub account (Moyebi Ayodele)
3. Add projects with images directly in the CMS

## 📦 Deploy to Vercel (Free)

1. **Install Vercel CLI**:
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy**:
   ```bash
   vercel --prod
   ```

4. **Setup Sanity CORS**:
   After deployment, add your Vercel URL to Sanity:
   ```bash
   sanity cors add https://your-site.vercel.app --credentials
   ```

## 🎨 Managing Content

### Add New Projects
1. Open CMS: http://localhost:3333
2. Click "Project" → "Create"
3. Fill in:
   - Title
   - Slug (auto-generated)
   - Category
   - Upload thumbnail & project images
   - Problem, Solution, Process, Results
   - Year & Client
4. Click "Publish"

### Update Existing Projects
1. Open project in CMS
2. Make changes
3. Click "Publish"

Changes appear live on your site instantly!

## 🌐 Production URLs
- **Portfolio**: TBD (after Vercel deployment)
- **CMS**: http://localhost:3333 (local) or https://your-project.sanity.studio (hosted)
