"use strict";

window.onload = init;

function init() {
    const convertBtn = document.getElementById("convertBtn");
    convertBtn.onclick = tempConversion;
}

function tempConversion(){
    let tempToBeConverted = Number(document.getElementById("inputTemperatureText").value);
    let convertedTemp;
    var FtoCRadio = document.getElementById("FtoC");
    var CtoFRadio = document.getElementById("CtoF");

    if(FtoCRadio.checked){
    convertedTemp = ((tempToBeConverted - 32) * (5/9)).toFixed(2);
    document.getElementById("convertedAnswer").value = tempToBeConverted + "F converts to " + convertedTemp + "C.";
    }
    else if(CtoFRadio.checked){
        convertedTemp = (tempToBeConverted * (9/5) + 32).toFixed(2);
        document.getElementById("convertedAnswer").value = tempToBeConverted + "C converts to " + convertedTemp + "F.";
    }
}