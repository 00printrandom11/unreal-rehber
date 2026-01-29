@echo off
:: Calisma dizinini bat dosyasinin oldugu yere ayarla
cd /d "%~dp0"

echo Unreal Rehber Sunucusu Hazirlaniyor...

:: .md dosyalarini temizle (node_modules haric)
echo Gereksiz dosyalar temizleniyor (.md)...
del /q *.md >nul 2>&1
for /d %%d in (*) do (
    if /i "%%d" neq "node_modules" (
        if /i "%%d" neq ".git" (
             if /i "%%d" neq ".idea" (
                del /s /q "%%d\*.md" >nul 2>&1
             )
        )
    )
)

:: Node.js kontrolu
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo HATA: Node.js yuklu degil! Lutfen Node.js yukleyin.
    pause
    exit
)

:: package.json kontrolu
if not exist "package.json" (
    echo HATA: package.json dosyasi bulunamadi!
    echo Lutfen bu dosyayi proje klasorunun icinde calistirdiginizdan emin olun.
    pause
    exit
)

:: Bagimliliklari yukle
if not exist "node_modules" (
    echo Bagimliliklar yukleniyor...
    call npm install
)

:: Rastgele port olustur (3000-9000 arasi)
set /a PORT=%random% %% 6001 + 3000

echo.
echo Sunucu su adreste baslatiliyor: http://localhost:%PORT%
echo.

:: Tarayiciyi ac
start http://localhost:%PORT%

:: Sunucuyu baslat
call npx vite --port %PORT% --host

pause