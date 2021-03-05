import {CALC as calc} from "./calculator";
import {CALC as calc2} from "./add_operation";
import {CALC as calc3} from "./substract_operation";
import {CALC as calc4} from "./multiply_operation";
import {CALC as calc5} from "./divide_operation";

export namespace CALC.dip.before {

	import Calculator = calc.dip.before.Calculator;
	import AddOperation = calc2.dip.before.AddOperation;
	import SubstractOperation = calc3.dip.before.SubstractOperation;
	import MultiplyOperation = calc4.dip.before.MultiplyOperation;
	import DivideOperation = calc5.dip.before.DivideOperation;

	export class Client {
		
		constructor() {
			
		}
		
		main(): void {
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
			
			//Change_Start
			let divideOperation = new DivideOperation();
			calculator.setDivideOperation(divideOperation);
			
			answer = calculator.calculate("/", firstNumber, secondNumber);
			
			console.log(firstNumber + "/" + secondNumber + " = " + answer);
			//Change_End
			
		}
		
		toString(): string {
		    return "Client";
		}
		
	}

}
