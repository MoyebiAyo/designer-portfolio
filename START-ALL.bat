@echo off
title Mouse Technologies - Portfolio + CMS
color 0A

echo ========================================
echo   MOUSE TECHNOLOGIES PORTFOLIO
echo   Starting Dev Servers...
echo ========================================
echo.

cd /d "%~dp0"

echo [1/2] Starting Next.js Portfolio (Port 3000)...
start "Portfolio - http://localhost:3000" cmd /k "npm run dev"

timeout /t 3 /nobreak >nul

echo [2/2] Starting Sanity CMS (Port 3333)...
start "Sanity Studio - http://localhost:3333" cmd /k "npm run sanity"

timeout /t 5 /nobreak >nul

echo.
echo ========================================
echo   SERVERS RUNNING:
echo   Portfolio: http://localhost:3000
echo   CMS Admin: http://localhost:3333
echo ========================================
echo.
echo Press any key to open both in browser...
pause >nul

start http://localhost:3000
start http://localhost:3333

echo.
echo Servers are running in separate windows.
echo Close those windows to stop the servers.
echo.
pause
