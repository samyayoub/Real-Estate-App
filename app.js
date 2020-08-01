let calculateResult = document.querySelector("#calculateResult");

function calculations() {
	let loanValue = document.querySelector("#loanValue").value;
	let loanTerm = document.querySelector("#loanTerm").value;
	let loanInterest = document.querySelector("#loanInterest").value;
	let interest = loanInterest / 100;
	let temp = loanValue * (interest / 12) * (1 + interest / 12);
	let temp2 = temp ^ ((12 * loanTerm) / (1 + interest / 12));
	let result = temp2 ^ (12 * loanTerm - 1);

	document.querySelector(
		"#result"
	).innerHTML = `Monthly mortgage payment = $${result}`;
}

calculateResult.addEventListener("click", calculations);

// P x (r / n) x (1 + r / n)^n(t)] / (1 + r / n)^n(t) - 1
// P - loanValue - loan amount
// r - loanInterest - The annual interest rate
// t - loanTerm - The number of years
// n - The number of payments per year 12
