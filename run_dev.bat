@echo off
set PATH=C:\Program Files\nodejs;%PATH%
cd /d D:\AI_stuff\Rollo-Max
echo Installing dependencies...
call npm install
echo.
echo Starting dev server...
call npm run dev
