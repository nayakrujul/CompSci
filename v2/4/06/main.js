const target = document.getElementById("js-target");

let userAgentString = navigator.userAgent;

let safariAgent = userAgentString.indexOf("Safari") > -1;
let chromeAgent = userAgentString.indexOf("Chrome") > -1; 
let IExplorerAgent = userAgentString.indexOf("MSIE") > -1 ||  
                     userAgentString.indexOf("rv:") > -1;
let edgeAgent = userAgentString.indexOf("Edg") > -1;
let firefoxAgent = userAgentString.indexOf("Firefox") > -1;
let operaAgent = userAgentString.indexOf("OP") > -1;

let out = "a browser";
if (safariAgent) out = "Safari";
if (chromeAgent) out = "Google Chrome";
if (IExplorerAgent) out = "Internet Explorer";
if (edgeAgent) out = "Microsoft Edge";
if (firefoxAgent) out = "Firefox";
if (operaAgent) out = "Opera";

target.innerHTML = out;