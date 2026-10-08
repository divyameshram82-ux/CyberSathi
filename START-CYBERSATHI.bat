@echo off
setlocal
cd /d "%~dp0"

echo Starting CyberSathi local web server...

where py >nul 2>&1
if %errorlevel%==0 (
  start "CyberSathi Server" cmd /k "cd /d %~dp0 && py -m http.server 5500"
  timeout /t 2 /nobreak >nul
  start "" "http://127.0.0.1:5500/index.html"
  exit /b
)

where python >nul 2>&1
if %errorlevel%==0 (
  start "CyberSathi Server" cmd /k "cd /d %~dp0 && python -m http.server 5500"
  timeout /t 2 /nobreak >nul
  start "" "http://127.0.0.1:5500/index.html"
  exit /b
)

echo.
echo Python was not found on this computer.
echo Install Python, then double-click this file again.
echo Alternatively, use VS Code Live Server or any static web server.
pause
