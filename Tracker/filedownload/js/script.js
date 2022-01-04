function info(){

// Grabbing OS Info from Landed user


function osInfo(){
    /*
    const os = require('os');
    
    
    const username = os.userInfo().username;
    const uid = os.userInfo().uid;
    const homedir = os.userInfo().homedir;
    const shell = os.userInfo().shell;
    const osType = os.type();
    const osArch = os.arch();
    const osVersion =os.version();
    const modelInfo = os.cpus()[1].model;
    const speedInfo = os.cpus()[1].speed;
    var freemem = (os.freemem() /1024/1024/1024).toFixed(2);
    var freeRam = (os.totalmem() /1024/1024/1024).toFixed(2);
    
    
    console.log(username);
    console.log(osType);
    console.log(osArch);
    console.log(uid);
    console.log(homedir);
    console.log(shell);
    console.log(osVersion);
    console.log(modelInfo);
    console.log(speedInfo);
    console.log(`Free Space: ${freemem} GB`);
    console.log(`Free RAM: ${freeRam} GB`)
    */ 

    var ptForm = navigator.platform;
    var cpuCore = navigator.hardwareConcurrency;
    var ram = navigator.deviceMemory;
    var ver = navigator.userAgent;
    var str = ver;
    var os = ver;
    
    
    os = os.substring(0, os.indexOf(')'));
    os = os.split(';');
    os = os[1];
    if (os == undefined)
    {
        os = 'Not Available';
        console.log('OS is not available')
    }
    os = os.trim();
    console.log(os);
    
}
osInfo()   




//GPU info 

function getVideoCardInfo() {
    const gl = document.createElement('canvas').getContext('webgl');

    if (!gl) {
        console.log('No WebGl')
    }
    
    const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');

    if(debugInfo){
        return {
            ven: gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL),
            ren:  gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL),
        };
    }

    return {
        error: "no WEBGL_debug_renderer_info",
    };
}
getVideoCardInfo()



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

var isBlink = (isChrome || isOpera) && window.CSS;{
    browser = 'Blink';}

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
}
browserFind()

/*
if (ver.indexOf('Firefox') != -1)
{
    str = str.substring(str.indexOf(' Firefox/') + 1);
    str = str.split(' ');
    brw = str[0];
    console.log(str[0]);
}
else if (ver.indexOf('Chrome') != -1)
{
    str = str.substring(str.indexOf(' Chrome/') + 1);
    str = str.split(' ');
    brw = str[0];
    console.log(str[0]);
}
else if (ver.indexOf('Safari') != -1)
{
    str = str.substring(str.indexOf(' Safari/') + 1);
    str = str.split(' ');
    brw = str[0];
    console.log(str[0]);
}
else if (ver.indexOf('Edge') != -1)
{
    str = str.substring(str.indexOf(' Edge/') + 1);
    str = str.split(' ');
    brw = str[0];
    console.log(str[0]);
}
else
{
    brw = 'Not Available'
    console.log('Browser is not available')
}
*/


// Screen size of users device

var ht = window.screen.height
var wd = window.screen.width


// Fetching the received data

/*

var array = {};
var elements = []
array.elements = elements;

var singleElement = {
    "OS Name": osType,
    "Browser Name": browser,
    "IP Address": ipAdr,
    "GPU": renderer,
    "Height": ht,
    "Width": wd

}
array.elements.push(singleElement);

*/

$.ajax({
    type: 'POST',
    url: '/php/info.php',
    data: {Ptf: ptForm, Brw: browser, Cc: cpuCore, Ram: ram, Ven: ven, Ren: ren, Ht: ht, Wd: wd, Os: os},
    success: function(){console.log('Got Device Information');},
    mimeType: 'text'
    });


}
