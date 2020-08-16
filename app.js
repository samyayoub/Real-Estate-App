var interestTotal, loanValue, paidTotal;

// Calling function to calculate results
var calculateMonthlyPayment = document.querySelector(
	"#calculateMonthlyPayment"
);
var calculatePaid = document.querySelector("#calculatePaid");

function monthlyPaymentCalculations() {
	// Grabbing values entered by end user
	loanValue = document.querySelector("#loanValue").value;
	var loanTerm = document.querySelector("#loanTerm").value;
	var loanInterest = document.querySelector("#loanInterest").value;
	var interest = loanInterest / 100;
	interest = interest / 12;

	// loanValue = loanValue
	// 	.toFixed(2)
	// 	.toString()
	// 	.replace(/\B(?=(\d{3})+(?!\d))/g, ","); // Puts comma for thousands

	// Math to calculate monthly payment
	// D = {[(1 + r)^n] - 1} / [r(1 + r)^n]
	var noOfMonths = 12 * loanTerm;
	var temp1 = Math.pow(1 + interest, noOfMonths);
	var temp2 = temp1 - 1;
	var temp3 = interest * temp1;
	var temp4 = temp2 / temp3;
	window.result = loanValue / temp4;
	window.result = window.result
		.toFixed(2)
		.toString()
		.replace(/\B(?=(\d{3})+(?!\d))/g, ","); // Puts comma for thousands

	document.querySelector(
		"#result"
	).innerHTML = `Monthly mortgage payment = $${window.result}`;
}

function paidCalculations() {
	loanValue = document.querySelector("#loanValue").value;
	var loanTerm = document.querySelector("#loanTerm").value;

	let paidTotal = window.result * loanTerm * 12;
	let interestPaid = paidTotal - loanValue;
	paidTotal = paidTotal.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ","); // Puts comma for thousands
	interestPaid = interestPaid.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ","); // Puts comma for thousands

	document.querySelector(
		"#result"
	).innerHTML = `Total Interest will be paid = $${interestPaid} with total of $${paidTotal}`;
}

// Adding event listeners to wait on end user to press "Calculate" button
calculateMonthlyPayment.addEventListener("click", monthlyPaymentCalculations);
calculatePaid.addEventListener("click", paidCalculations);
