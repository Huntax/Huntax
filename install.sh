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
chmod 777 Tracker/result.txt
echo
echo '[!] Installed successfully'
