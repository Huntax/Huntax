function info(){

    // Grabbing OS Info from Landed user
    
    var ptForm = navigator.platform;
    var cpuCore = navigator.hardwareConcurrency;
    var ram = navigator.deviceMemory;
    var ver = navigator.userAgent;
    var str = ver;
    var os = ver;
    var ven;
    var ren;
    var gl;
    
    
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
        
        */
    
    
    //GPU info
    
    
    try
    {
    gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    }
    catch (e) {}
    if (gl)
    {
    debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
    ven = gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL);
    ren = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
    }
    if (ven == undefined)
    {
    ven = 'Not Available';
    console.log('GPU Vendor not available')
    }
    if (ren == undefined)
    {
    ren = 'Not Available';
    console.log('GPU Renderer not available')
    }
    console.log(ven);
    console.log(ren);
    
    /*   
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
    */
    
    
    
    // Detecting the user's browser
    
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
    
    
    // Screen size of users device
    
    var ht = window.screen.height
    var wd = window.screen.width
    
    
    // Getting IP Address of the Landed User
    
    /*function getLocation(){
    
        fetch('https://api.ipify.org/?format=json')
        .then(results => results.json()).then(data => ipAdr= data.ip );
        
        fetch('https://geolocation-db.com/json/')
        .then(results => results.json()).then(data => console.log(`Latitude: ${data.latitude}, Longitude: ${data.longitude}`));
    }
    getLocation()
    */
    
    //debugging with array
    
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
    
    // Fetching the received data

    $.ajax({
        type: 'POST',
        url: '/php/info.php',
        data: {Ptf: ptForm, Brw: browser, Cc: cpuCore, Ram: ram, Ven: ven, Ren: ren, Ht: ht, Wd: wd, Os: os},
        success: function(){console.log('Got Device Information');},
        mimeType: 'text'
        });
    
    
    }
    