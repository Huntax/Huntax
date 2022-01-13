cd /Tracker
php -S 127.0.0.1:8000
ssh -R weatherfindersite:80:127.0.0.1:8000 serveo.net
