@echo off

@echo make sure this script is ran in the correct directory

docker pull postgres || exit /b 1

@echo Image Pulled

set /p name= Please enter a container name: 

set /p password= Please enter a password: 

set /p dbName= Please enter a name for the DB: 

docker run --name %name% -e POSTGRES_PASSWORD=%password% -e POSTGRES_DB=%dbName% -p 5432:5432 -d postgres || echo Docker error: %ERRORLEVEL% && exit /b %ERRORLEVEL%

@echo Container Made

@echo Creating .env file with container data 

echo DB_NAME=%dbName%>> .env
echo DB_USER=postgres >> .env
echo DB_PASSWORD=%password% >> .env
echo DB_HOST=localhost >> .env
echo DB_PORT=5432 >> .env
echo CONTAINER_NAME=%name% >> .env

echo DATABASE_URL=postgresql://postgres:%password%@localhost:5432/%dbName% >> .env

@echo variables written