import {CALC as calc} from "./calculator";
import {CALC as calc2} from "./add_operation";
import {CALC as calc3} from "./substract_operation";
import {CALC as calc4} from "./multiply_operation";
import {CALC as calc5} from "./divide_operation";

export namespace CALC.ocp.before {

	import Calculator = calc.ocp.before.Calculator;
	import AddOperation = calc2.ocp.before.AddOperation;
	import SubstractOperation = calc3.ocp.before.SubstractOperation;
	import MultiplyOperation = calc4.ocp.before.MultiplyOperation;
	import DivideOperation = calc5.ocp.before.DivideOperation;

	export class Client {
		
		constructor() {
			
		}
		
		main() {
			let calculator = new Calculator();
			
			let firstNumber = 100;
			let secondNumber = 20;
			
			let operation = new AddOperation();
			calculator.setAddOperation(operation);
			
			let answer = calculator.add(firstNumber, secondNumber);
			
			console.log(firstNumber + "+" + secondNumber + " = " + answer);
			
			operation = new SubstractOperation();
			calculator.setSubstractOperation(operation);
			
			answer = calculator.substract(firstNumber, secondNumber);
			
			console.log(firstNumber + "-" + secondNumber + " = " + answer);
			
			operation = new MultiplyOperation();
			calculator.setMultiplyOperation(operation);
			
			answer = calculator.multiply(firstNumber, secondNumber);
			
			console.log(firstNumber + "*" + secondNumber + " = " + answer);
			
			//Change_Start
			operation = new DivideOperation();
			calculator.setDivideOperation(operation);
			
			answer = calculator.divide(firstNumber, secondNumber);
			
			console.log(firstNumber + "/" + secondNumber + " = " + answer);
			//Change_End
		}
		
		toString() {
		    return "Client";
		}
		
	}

}
