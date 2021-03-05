import {CALC as calc} from "./operation_adaptee";
import {CALC as calc2} from "./add_operation";
import {CALC as calc3} from "./substract_operation";
import {CALC as calc4} from "./multiply_operation";
import {CALC as calc5} from "./divide_operation_adapter";
	
let firstNumber = 100;
let secondNumber = 20;

let operationTarget = new calc2.adapter.AddOperation();

let answer = operationTarget.operate(firstNumber, secondNumber);

console.log(firstNumber + " + " + secondNumber + " = " + answer);

operationTarget = new calc3.adapter.SubstractOperation();
answer = operationTarget.operate(firstNumber, secondNumber);

console.log(firstNumber + " - " + secondNumber + " = " + answer);

operationTarget = new calc4.adapter.MultiplyOperation();
answer = operationTarget.operate(firstNumber, secondNumber);

console.log(firstNumber + " * " + secondNumber + " = " + answer);

let operationAdaptee = new calc.adapter.OperationAdaptee();

operationTarget = new calc5.adapter.DivideOperationAdapter(operationAdaptee);
answer = operationTarget.operate(firstNumber, secondNumber);

console.log(firstNumber + " / " + secondNumber + " = " + answer);
