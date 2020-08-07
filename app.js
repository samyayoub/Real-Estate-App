// Calling function to calculate results
let calculateResult = document.querySelector("#calculateResult");

function calculations() {
	// Grabbing values entered by end user
	let loanValue = document.querySelector("#loanValue").value;
	let loanTerm = document.querySelector("#loanTerm").value;
	let loanInterest = document.querySelector("#loanInterest").value;
	let interest = loanInterest / 100;
	interest = interest / 12;

	// Math to calculate monthly payment
	// D = {[(1 + r)^n] - 1} / [r(1 + r)^n]
	let noOfMonths = 12 * loanTerm;
	let temp1 = Math.pow(1 + interest, noOfMonths);
	let temp2 = temp1 - 1;
	let temp3 = interest * temp1;
	let temp4 = temp2 / temp3;
	let result = loanValue / temp4;
	result = result.toFixed(2);

	document.querySelector(
		"#result"
	).innerHTML = `Monthly mortgage payment = $${result}`;
}

// Adding event listener to wait on end user to press "Calculate" button
calculateResult.addEventListener("click", calculations);
