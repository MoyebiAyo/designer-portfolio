# Node.js Setup & Troubleshooting Guide

## Problem: npm/node commands not recognized

If you're seeing errors like "npm is not recognized" or "node is not recognized", this means Node.js isn't properly configured in your system PATH.

## Solution Steps

### Step 1: Verify Node.js Installation

1. Close ALL PowerShell/Command Prompt windows
2. Open a **NEW** PowerShell window (as Administrator is best)
3. Try these commands:
   ```powershell
   node --version
   npm --version
   ```

### Step 2: If Still Not Working - Add to PATH Manually

1. **Find Node.js installation path**:
   - Default location: `C:\Program Files\nodejs\`
   - Or search for "node.exe" in File Explorer

2. **Add to PATH**:
   - Press `Windows + X` → Select "System"
   - Click "Advanced system settings"
   - Click "Environment Variables"
   - Under "System variables", find "Path" → Click "Edit"
   - Click "New" and add: `C:\Program Files\nodejs\`
   - Click "OK" on all windows

3. **Restart everything**:
   - Close ALL terminal windows
   - Open a NEW PowerShell window
   - Try `node --version` again

### Step 3: Reinstall Node.js (if needed)

If the above doesn't work:

1. **Uninstall Node.js**:
   - Go to Settings → Apps → Find Node.js → Uninstall

2. **Download latest LTS version**:
   - Visit: https://nodejs.org/
   - Download the "LTS" version (recommended)

3. **Install with these options**:
   - ✅ Check "Automatically install necessary tools"
   - ✅ Check "Add to PATH"
   - Complete installation

4. **Restart computer** (important!)

5. **Verify**:
   ```powershell
   node --version
   npm --version
   ```

## Once Node.js Works

Navigate to the project and install dependencies:

```powershell
cd C:\Users\NEW USER\Desktop\designer-portfolio
npm install
```

This will take a few minutes to download all dependencies.

## Running the Project

After installation completes:

```powershell
npm run dev
```

Then open your browser to: http://localhost:3000

## Common Issues

### Issue: "Cannot find module"
**Solution**: Delete `node_modules` folder and `package-lock.json`, then run `npm install` again

### Issue: Port 3000 already in use
**Solution**: Either:
- Close the other app using port 3000
- Or run: `npm run dev -- -p 3001` (uses port 3001 instead)

### Issue: Images not loading
**Solution**: Check your internet connection (images are from Unsplash)

### Issue: Dark mode not working
**Solution**: Clear browser cache and refresh

## Still Having Issues?

### Alternative: Use Node Version Manager (nvm)

1. Download nvm-windows: https://github.com/coreybutler/nvm-windows/releases
2. Install nvm
3. Open PowerShell and run:
   ```powershell
   nvm install 20.10.0
   nvm use 20.10.0
   ```

### Check Node.js Installation Location

Run this in PowerShell:
```powershell
where.exe node
where.exe npm
```

This shows you where Node.js is installed.

## Getting Help

If you continue having issues:
1. Check Node.js official docs: https://nodejs.org/en/docs/
2. Visit Stack Overflow: https://stackoverflow.com/questions/tagged/node.js
3. Node.js Discord: https://discord.gg/nodejs

---

Good luck! Once Node.js is working, the portfolio will run smoothly. 🚀
