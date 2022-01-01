echo '[!] Updating...'
sudo apt-get update
echo
echo '[!] Installing Dependencies...'
echo '    JS'
sudo apt install nodejs npm
echo '    Python3'
apt-get -y install python3 python3-pip
echo '    ssh'
apt-get -y install ssh
echo '    Requests'
pip3 install requests
echo
echo '[!] Setting Permissions...'
chmod 777 Tracker/result.txt
echo
echo '[!] Installed successfully'
