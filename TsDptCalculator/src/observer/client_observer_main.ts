import {CALC as calc} from "./operation_subject";
import {CALC as calc2} from "./add_operation_observer";
import {CALC as calc3} from "./substract_operation_observer";
import {CALC as calc4} from "./multiply_operation_observer";
import {CALC as calc5} from "./divide_operation_observer";

let operationSubject = new calc.observer.OperationSubject();
	
let addObserver = new calc2.observer.AddOperationObserver(operationSubject);
let substractObserver = new calc3.observer.SubstractOperationObserver(operationSubject);
let multiplyObserver = new calc4.observer.MultiplyOperationObserver(operationSubject);
let divideObserver = new calc5.observer.DivideOperationObserver(operationSubject);

operationSubject.registerObserver(addObserver);
operationSubject.registerObserver(substractObserver);
operationSubject.registerObserver(multiplyObserver);
operationSubject.registerObserver(divideObserver);

let firstNumber = 100;
let secondNumber = 20;

operationSubject.setNumber(firstNumber, secondNumber);

firstNumber = 200;
secondNumber = -30;

operationSubject.setNumber(firstNumber, secondNumber);
