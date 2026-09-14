@echo off
setlocal

echo ============================================
echo HandzJ Tech Website - Setup and Launch
echo ============================================
echo.

where node >nul 2>nul
if errorlevel 1 (
    echo [ERROR] Node.js was not found on this machine.
    echo Install Node.js from https://nodejs.org/ then run this file again.
    pause
    exit /b 1
)

where npm >nul 2>nul
if errorlevel 1 (
    echo [ERROR] npm was not found on this machine.
    echo Reinstall Node.js from https://nodejs.org/ then run this file again.
    pause
    exit /b 1
)

if not exist "node_modules" (
    echo Installing dependencies, this may take a few minutes...
    call npm install
    if errorlevel 1 (
        echo.
        echo [ERROR] npm install failed. See the messages above.
        pause
        exit /b 1
    )
) else (
    echo Dependencies already installed, skipping npm install.
    echo Delete the node_modules folder to force a fresh install.
)

echo.
echo Starting the development server at http://localhost:3000
echo Press Ctrl+C in this window to stop the server.
echo.

call npm run dev

endlocal
