// Calling function to calculate results
var calculateMonthlyPayment = document.querySelector(
	"#calculateMonthlyPayment"
);
var calculateInterestPaid = document.querySelector("#calculateInterestPaid");

function monthlyPaymentCalculations() {
	// Grabbing values entered by end user
	var loanValue = document.querySelector("#loanValue").value;
	var loanTerm = document.querySelector("#loanTerm").value;
	var loanInterest = document.querySelector("#loanInterest").value;
	var interest = loanInterest / 100;
	interest = interest / 12;

	// Math to calculate monthly payment
	// D = {[(1 + r)^n] - 1} / [r(1 + r)^n]
	var noOfMonths = 12 * loanTerm;
	var temp1 = Math.pow(1 + interest, noOfMonths);
	var temp2 = temp1 - 1;
	var temp3 = interest * temp1;
	var temp4 = temp2 / temp3;
	var result = loanValue / temp4;
	result = result
		.toFixed(2)
		.toString()
		.replace(/\B(?=(\d{3})+(?!\d))/g, ","); // Puts comma for thousands

	document.querySelector(
		"#result"
	).innerHTML = `Monthly mortgage payment = $${result}`;
}

// function calculations() {
// 	monthlyPaymentCalculations();
// 	interestCalculations();
// }

function interestCalculations() {
	var loanValue = document.querySelector("#loanValue").value;
	var loanTerm = document.querySelector("#loanTerm").value;
	var loanInterest = document.querySelector("#loanInterest").value;
	var interest = loanInterest / 100;
	let interestTotal = loanValue * interest * loanTerm;
	interestTotal = interestTotal
		.toFixed(2)
		.toString()
		.replace(/\B(?=(\d{3})+(?!\d))/g, ","); // Puts comma for thousands

	document.querySelector(
		"#result"
	).innerHTML = `Total Interest will be paid = ${interestTotal}`;
}

// Adding event listener to wait on end user to press "Calculate" button
calculateMonthlyPayment.addEventListener("click", monthlyPaymentCalculations);
calculateInterestPaid.addEventListener("click", interestCalculations);
