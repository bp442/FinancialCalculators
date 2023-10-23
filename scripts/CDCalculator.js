"use strict";

window.onload = init;

function init() {
    const calculateBtn = document.getElementById("calculateValueBtn");
    calculateBtn.onclick = calculateValue;
}


function calculateValue() {
    const deposit = Number(document.getElementById("depositText").value);
    const interestRate = Number(document.getElementById("interestRateText").value) / 100; //converts it into a decimal rate
    const durationLength = Number(document.getElementById("lengthText").value);

    const totalValue = (deposit * ((Math.pow(1 + (interestRate/365), (durationLength * 365))))).toFixed(2);
    const totalInterest = (totalValue - deposit).toFixed(2);

    const answer = "Your CD's value after " + durationLength + " years will be $" + totalValue + 
    " and your total interest earned will be $" + totalInterest + ".";

    document.getElementById("CDValue").value = answer;
}