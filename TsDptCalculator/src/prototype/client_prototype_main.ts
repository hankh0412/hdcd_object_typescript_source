import {CALC as calc} from "./client";

let client = new calc.prototype.Client();
	
let firstNumber = 100;
let secondNumber = 20;

const operators = [ "+", "-", "*", "/" ];

for (let operator of operators) {
	client.setOperation(operator, firstNumber, secondNumber);
	client.operate();
}
