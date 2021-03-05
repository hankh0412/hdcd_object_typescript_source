import {CALC as calc} from "./abstract_operation";

export namespace CALC.isp.before {

	import AbstractOperation = calc.isp.before.AbstractOperation;

	export class Calculator {

		private operation: AbstractOperation;
		
		constructor() {
			
		}
		
		calculate(firstNumber: number, secondNumber: number): number {
			let answer = this.operation.operate(firstNumber, secondNumber);
			
			return answer;
		}
		
		setOperation(operation: AbstractOperation): void {
			this.operation = operation;
		}
		
		//Change_Start
		newDisplay(operation: AbstractOperation, firstNumber: number, secondNumber: number): void {
		//Change_End
			let answer = operation.operate(firstNumber, secondNumber);
			
			let operator = operation.getOperator();
			
			console.log(firstNumber + operator + secondNumber + " = " + answer);
		}
		
		
		toString() {
		    return "Calculator";
		}
	
	}	

}
