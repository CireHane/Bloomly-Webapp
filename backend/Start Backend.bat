@echo off
setlocal
title Bloomly Backend
cd /d "%~dp0"

echo.
echo Welcome %USERNAME%
echo.

where python >nul 2>nul
if errorlevel 1 (
    echo Python not found on this PC. Install Python first, then run this again.
    pause
    exit /b 1
)

if exist ".venv\Scripts\python.exe" (
    echo venv already there. Skipping.
) else (
    echo Making venv...
    python -m venv .venv
    if errorlevel 1 (
        echo Failed to make venv.
        pause
        exit /b 1
    )
)

set "NEEDS_INSTALL=1"
".venv\Scripts\python.exe" -c "import fastapi, uvicorn, supabase, dotenv" >nul 2>nul
if not errorlevel 1 set "NEEDS_INSTALL=0"

if "%NEEDS_INSTALL%"=="1" (
    echo Installing requirements...
    ".venv\Scripts\python.exe" -m pip install -q -r requirements.txt
    if errorlevel 1 (
        echo Install failed. Check your internet.
        pause
        exit /b 1
    )
) else (
    echo Requirements already installed. Skipping.
)

rem ---- .env: copy template if missing, then fill in the keys ----
if not exist ".env" (
    copy /y ".env.example" ".env" >nul
    echo Made .env from template.
)

rem ---- publishable key (Supabase dashboard - Settings - API Keys) ----
findstr /c:"SUPABASE_PUBLISHABLE_KEY=$" ".env" >nul 2>nul
if errorlevel 1 goto skippub
echo.
echo Publishable key is still empty. Get it from Supabase dashboard - Settings - API Keys.
:askpub
set "PUBKEY="
set /p "PUBKEY=Paste it here: "
if not defined PUBKEY goto askpub
powershell -NoProfile -Command "(Get-Content -LiteralPath '.env') | ForEach-Object { $_.Replace('SUPABASE_PUBLISHABLE_KEY=', 'SUPABASE_PUBLISHABLE_KEY=' + $env:PUBKEY) } | Set-Content -LiteralPath '.env' -Encoding ASCII"
set "PUBKEY="
echo Publishable key saved.
:skippub

rem ---- secret key (click the eye icon to see it) ----
findstr /c:"SUPABASE_SECRET_KEY=$" ".env" >nul 2>nul
if errorlevel 1 goto skipsec
echo.
echo Secret key is still empty. Get it from Supabase dashboard - Settings - API Keys (eye icon).
:asksec
set "SECKEY="
set /p "SECKEY=Paste it here: "
if not defined SECKEY goto asksec
powershell -NoProfile -Command "(Get-Content -LiteralPath '.env') | ForEach-Object { $_.Replace('SUPABASE_SECRET_KEY=', 'SUPABASE_SECRET_KEY=' + $env:SECKEY) } | Set-Content -LiteralPath '.env' -Encoding ASCII"
set "SECKEY="
echo Secret key saved.
:skipsec

echo.
call .venv\Scripts\activate.bat
choice /c YN /m "Start backend server now? "

if errorlevel 2 goto shell

echo.
echo Server on http://127.0.0.1:8000   docs at http://127.0.0.1:8000/docs
echo Press Ctrl+C to stop it.
echo.
uvicorn main:app --reload

:shell
echo.
echo venv is on. Run uvicorn again if you need it. Type exit to close.
echo.
cmd /k
endlocal
