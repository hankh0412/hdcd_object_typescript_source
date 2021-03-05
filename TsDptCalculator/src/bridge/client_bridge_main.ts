import {CALC as calc} from "./base_operation";
import {CALC as calc2} from "./refined_operation_abstraction";

let firstNumber = 100;
let secondNumber = 20;

let baseOperation = new calc.bridge.BaseOperation();
	
let operationAbstraction = new calc2.bridge.RefinedOperationAbstraction(baseOperation);

console.log(firstNumber + " + " + secondNumber + " = " + operationAbstraction.add(firstNumber, secondNumber));
console.log(firstNumber + " - " + secondNumber + " = " + operationAbstraction.substract(firstNumber, secondNumber));
console.log(firstNumber + " * " + secondNumber + " = " + operationAbstraction.multiply(firstNumber, secondNumber));
console.log(firstNumber + " / " + secondNumber + " = " + operationAbstraction.divide(firstNumber, secondNumber));

let refinedOperationAbstraction = operationAbstraction;

console.log("sqrt(" + firstNumber + ") = " + refinedOperationAbstraction.sqrt(firstNumber));
console.log("pow(10, 2) = " + refinedOperationAbstraction.pow(10, 2));
