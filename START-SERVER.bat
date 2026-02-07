@echo off
setlocal
echo ========================================
echo Portfolio Server Starter
echo ========================================
echo.

REM Add Node.js to PATH
set "PATH=C:\Program Files\nodejs;%PATH%"

REM Navigate to project directory
cd /d "C:\Users\NEW USER\Desktop\Projects\designer-portfolio"

echo Checking for Node.js...
node -v >nul 2>&1
if %errorlevel% neq 0 (
    echo ERROR: Node.js not found in C:\Program Files\nodejs
    echo Please reinstall Node.js from nodejs.org
    pause
    exit /b 1
)

echo Checking for dependencies...
if not exist "node_modules\" (
    echo node_modules not found. Installing dependencies...
    echo This may take a few minutes...
    call npm install
)

echo Starting server...
echo Please wait for the "Ready" message.
echo.

call npm run dev

if %errorlevel% neq 0 (
    echo.
    echo Server failed to start. 
    echo Try running CLEAN-BUILD.bat if the problem persists.
    pause
)
