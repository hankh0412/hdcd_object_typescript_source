import {CALC as calc} from "./add_operation_subject";
import {CALC as calc2} from "./substract_operation_subject";
import {CALC as calc3} from "./multiply_operation_subject";
import {CALC as calc4} from "./divide_operation_subject";
import {CALC as calc5} from "./divide_operation_proxy";

var firstNumber = 100;
var secondNumber = 20;

var result;

var operationSubject = new calc.proxy.AddOperationSubject();				
result = operationSubject.operate(firstNumber, secondNumber);

console.log(firstNumber + " + " + secondNumber + " = " + result);

operationSubject = new calc2.proxy.SubstractOperationSubject();				
result = operationSubject.operate(firstNumber, secondNumber);

console.log(firstNumber + " - " + secondNumber + " = " + result);

operationSubject = new calc3.proxy.MultiplyOperationSubject();				
result = operationSubject.operate(firstNumber, secondNumber);

console.log(firstNumber + " * " + secondNumber + " = " + result);

operationSubject = new calc5.proxy.DivideOperationProxy(new calc4.proxy.DivideOperationSubject());		
result = operationSubject.operate(firstNumber, secondNumber);

console.log(firstNumber + " / " + secondNumber + " = " + result);

operationSubject = new calc5.proxy.DivideOperationProxy(new calc4.proxy.DivideOperationSubject());

firstNumber = 10;
secondNumber = 0;

try {
	result = operationSubject.operate(firstNumber, secondNumber);
	
	console.log(firstNumber + " / " + secondNumber + " = " + result);
} catch (e) {			
	console.log(e);
}
