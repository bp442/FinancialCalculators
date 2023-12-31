"use strict";

window.onload = init;

function init() {
    const calculateBtn = document.getElementById("calculateMortgageBtn");
    calculateBtn.onclick = calculatePayments;
}


function calculatePayments() {
    const principal = Number(document.getElementById("principalText").value);
    const interestRate = Number(document.getElementById("interestRateText").value) / 100; //converts it into a decimal rate
    const loanLengthYears = Number(document.getElementById("loanLengthText").value);

    let monthlyPayment = (principal * (interestRate/12) * (Math.pow((1 + (interestRate/12)), (loanLengthYears * 12)) / 
    ((Math.pow((1 + (interestRate/12)), (loanLengthYears * 12)) - 1)))).toFixed(2);
    const totalInterest = ((monthlyPayment * (loanLengthYears * 12)) - principal).toFixed(2);


    const answer = "Your monthly payments will be $" + monthlyPayment + " and your total interest paid will be $" + totalInterest + ".";
    document.getElementById("monthlyPayAndTotalInterest").value = answer;
}