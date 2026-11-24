@echo off
cd /d "%~dp0"
echo === Bajando contenedores anteriores ===
docker compose down
echo === Construyendo y levantando (backend, frontend, mysql) ===
docker compose up --build
pause
