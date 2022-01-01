echo '[!] Updating...'
sudo apt update
echo '[!] Installing Dependencies...'
echo '    JS'
sudo apt install nodejs npm
echo '[!] Setting Permissions...'
chmod 777 Tracker/result.txt
echo
echo '[!] Installed successfully'
