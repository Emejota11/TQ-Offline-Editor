@echo off
setlocal
cd /d "%~dp0"
title Crear TQ Offline Editor v1
where node >nul 2>nul
if errorlevel 1 goto no_node
where npm >nul 2>nul
if errorlevel 1 goto no_node
node -e "process.exit(Number(process.versions.node.split('.')[0]) >= 22 ? 0 : 1)"
if errorlevel 1 goto old_node
call npm install --no-audit --no-fund
if errorlevel 1 goto failed
call npm run dist
if errorlevel 1 goto failed
echo.
echo EXE creado en la carpeta dist.
explorer "%~dp0dist"
pause
exit /b 0
:no_node
echo Primero instala Node.js LTS desde https://nodejs.org/
echo Luego cierra esta ventana y abre CREAR_EXE.cmd otra vez.
pause
exit /b 1
:old_node
echo Actualiza Node.js a la version LTS actual desde https://nodejs.org/
pause
exit /b 1
:failed
echo.
echo No se pudo terminar. No compartas un EXE sin probar.
echo Envia a ChatGPT una captura con el primer error de esta ventana.
pause
exit /b 1
