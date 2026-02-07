@echo off
setlocal
echo ========================================
echo Portfolio Clean Build
echo ========================================
echo.

REM Add Node.js to PATH
set "PATH=C:\Program Files\nodejs;%PATH%"

REM Navigate to project directory
cd /d "C:\Users\NEW USER\Desktop\designer-portfolio"

echo Deleting .next folder...
if exist ".next\" rmdir /s /q ".next"

echo Deleting node_modules folder...
if exist "node_modules\" rmdir /s /q "node_modules"

echo Deleting package-lock.json...
if exist "package-lock.json" del /q "package-lock.json"

echo Reinstalling dependencies...
echo This will take a few minutes...
call npm install

echo.
echo Done! Now starting server...
call npm run dev

pause
