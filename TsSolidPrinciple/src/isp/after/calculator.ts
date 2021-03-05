import {CALC as calc} from "./abstract_operation";
import {CALC as calc2} from "./idisplayable";

export namespace CALC.isp.after {

	import AbstractOperation = calc.isp.after.AbstractOperation;
	import IDisplayable = calc2.isp.after.IDisplayable;
	
	export class Calculator implements IDisplayable {
		
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
		
		display(operation: AbstractOperation, firstNumber: number, secondNumber: number): void {
			let answer = operation.operate(firstNumber, secondNumber);
			
			let operator = operation.getOperator();
			
			console.log(firstNumber + operator + secondNumber + " = " + answer);
		}
		
		toString() {
		    return "Calculator";
		}
		
	}

}
