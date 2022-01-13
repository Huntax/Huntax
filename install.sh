echo '[!] Updating...'
sudo apt-get update
echo
echo '[!] Installing Dependencies...'
echo '    Python3'
apt-get -y install python3 python3-pip
echo '    ssh'
apt-get -y install ssh
echo '    PHP'
apt-get -y install php
echo '    Requests'
pip3 install requests
echo
echo '[!] Setting Permissions...'
chmod 777 Tracker/filedownload/php/info.txt
chmod 777 Tracker/gdrive/php/result.txt
chmod 777 Tracker/weather/php/result.txt
echo
echo '[!] Installed successfully'
