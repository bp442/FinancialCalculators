"use strict";

window.onload = init;

function init() {
    const calculateBtn = document.getElementById("calculateValueBtn");
    calculateBtn.onclick = calculateValue;
}


function calculateValue() {
    const monthlyPayout = Number(document.getElementById("monthlyPayoutText").value);
    const interestRate = Number(document.getElementById("interestRateText").value) / 100; //converts it into a decimal rate
    const monthlyInterestRate = interestRate / 12;
    const durationLengthYears = Number(document.getElementById("lengthText").value);
    const durationLengthMonths = durationLengthYears * 12;

    const presentValue = (monthlyPayout * ((1 - (1 / (Math.pow((1 + monthlyInterestRate) , durationLengthMonths)))) / monthlyInterestRate)).toFixed(2);

    const answer = "To fund an annuity that pays $" + monthlyPayout + " for " + durationLengthYears + 
    " years and earns an expected " + interestRate * 100 + "% interest, you would need to invest $" + 
    presentValue + " today.";

    document.getElementById("investValue").value = answer;
}