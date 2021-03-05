import {CALC as calc} from "./abstract_operation";

export namespace CALC.ocp.after {

	import AbstractOperation = calc.ocp.after.AbstractOperation;

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
		
		toString() {
		    return "Calculator";
		}
		
	}

}
