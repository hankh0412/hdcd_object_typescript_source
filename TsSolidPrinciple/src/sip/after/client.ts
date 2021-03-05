import {CALC as calc} from "./calculator";
import {CALC as calc2} from "./add_operation";
import {CALC as calc3} from "./substract_operation";
import {CALC as calc4} from "./multiply_operation";

export namespace CALC.sip.after {

	import Calculator = calc.sip.after.Calculator;
	import AddOperation = calc2.sip.after.AddOperation;
	import SubstractOperation = calc3.sip.after.SubstractOperation;
	import MultiplyOperation = calc4.sip.after.MultiplyOperation;
	
	export class Client {
		
		constructor() {
			
		}
		
		main() {
			let calculator = new Calculator();
			
			let firstNumber = 100;
			let secondNumber = 20;
			
			let addOperation = new AddOperation();
			calculator.setAddOperation(addOperation);
			
			let answer = calculator.calculate("+", firstNumber, secondNumber);
			
			console.log(firstNumber + "+" + secondNumber + " = " + answer);
			
			let substractOperation = new SubstractOperation();
			calculator.setSubstractOperation(substractOperation);
			
			answer = calculator.calculate("-", firstNumber, secondNumber);
			
			console.log(firstNumber + "-" + secondNumber + " = " + answer);
			
			let multiplyOperation = new MultiplyOperation();
			calculator.setMultiplyOperation(multiplyOperation);
			
			answer = calculator.calculate("*", firstNumber, secondNumber);
			
			console.log(firstNumber + "*" + secondNumber + " = " + answer);
		}
		
		toString() {
		    return "Client";
		}
		
	}

}
