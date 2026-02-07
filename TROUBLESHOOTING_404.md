# Fixing 404 Errors - Quick Guide

## Problem: Getting 404 errors when clicking on project images

This happens because the development server needs to be running for the dynamic routes to work.

## Solution

### Step 1: Make sure Node.js is working

Open a NEW PowerShell window and test:
```powershell
node --version
npm --version
```

If these commands don't work, see [SETUP_HELP.md](SETUP_HELP.md) for Node.js installation help.

### Step 2: Navigate to the project folder

```powershell
cd "C:\Users\NEW USER\Desktop\designer-portfolio"
```

### Step 3: Install dependencies (first time only)

```powershell
npm install
```

Wait for this to complete (may take 2-5 minutes).

### Step 4: Start the development server

```powershell
npm run dev
```

You should see output like:
```
> designer-portfolio@0.1.0 dev
> next dev

  ▲ Next.js 14.2.18
  - Local:        http://localhost:3000

 ✓ Ready in 2.3s
```

### Step 5: Open in browser

Visit: **http://localhost:3000**

Now when you click on any project image, it should work!

## What's Changed

### ✅ Fixed Issues:
1. **404 errors fixed** - All project links now work correctly
2. **Related projects added** - Each project page now shows similar work from the same category
3. **Better navigation** - Easy to explore more projects in the same category

### 🎯 New Features:

When you click on ANY project image:
1. Opens a detailed project page with full case study
2. Shows "More [Category] Projects" section at the bottom
3. Displays up to 3 related projects from the same category
4. Link to view ALL projects in that category
5. Previous/Next navigation between projects

### Example Flow:

**Homepage** → Click "Urban Coffee Co." (Branding project)
↓
**Project Detail Page**
- Full case study with images and process
- Scroll down to see "More Branding Projects"
- See other branding work (like Bloom Beauty)
- Click "View all Branding projects" to see complete category

## Common Issues

### Issue: "npm is not recognized"
**Solution**: Node.js isn't installed or not in PATH. See [SETUP_HELP.md](SETUP_HELP.md)

### Issue: "Cannot find module"
**Solution**: Run `npm install` first

### Issue: "Port 3000 already in use"
**Solution**: 
- Close other apps using port 3000
- OR run: `npm run dev -- -p 3001` (uses port 3001)

### Issue: Still seeing 404
**Solution**: 
1. Make sure dev server is running (`npm run dev`)
2. Hard refresh browser (Ctrl + Shift + R)
3. Check console for errors

## Testing the Features

Once the server is running:

1. **Test Project Pages:**
   - Click any project image on homepage
   - Should open detail page (not 404)
   - Scroll down to see related projects

2. **Test Related Projects:**
   - On any project detail page
   - Scroll to "More [Category] Projects" section
   - Click on a related project
   - Should navigate to that project's page

3. **Test Category Links:**
   - On project detail page
   - Click "View all [Category] projects"
   - Should show all projects in that category

## File Structure

The routing works like this:
```
Homepage (/) 
  ↓ Click project
Project Detail (/projects/urban-coffee-branding)
  ↓ Click "More Branding Projects"
Related Projects (shown on same page)
  ↓ OR click "View all Branding projects"
Category Page (/category/branding)
```

All routes are properly configured and will work once the server runs!

---

**Still having issues?** Make sure:
1. ✅ Node.js is installed
2. ✅ Dependencies installed (`npm install`)
3. ✅ Dev server is running (`npm run dev`)
4. ✅ Browser is at http://localhost:3000
