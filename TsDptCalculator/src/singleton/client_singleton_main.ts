import {CALC as calc} from "./operation_singleton";

let calculatorSingleton = calc.singleton.OperationSingleton.getInstance();
	
let firstNumber = 100;
let secondNumber = 20;

calculatorSingleton.operate(calc.singleton.OperationSingleton.ADD_OPERATION, firstNumber, secondNumber);
calculatorSingleton.operate(calc.singleton.OperationSingleton.SUBSTRACT_OPERATION, firstNumber, secondNumber);
calculatorSingleton.operate(calc.singleton.OperationSingleton.MULTIPLY_OPERATION, firstNumber, secondNumber);
calculatorSingleton.operate(calc.singleton.OperationSingleton.DIVIDE_OPERATION, firstNumber, secondNumber);
