import {CALC as calc} from "./abstract_operation";

export namespace CALC.lsp.after {

	import AbstractOperation = calc.lsp.after.AbstractOperation;

	export class Calculator {
		
		constructor() {
			
		}
		
		calculate(operation: AbstractOperation, firstNumber: number, secondNumber: number): number {
			if(operation.isInvalidNumber(firstNumber, secondNumber)) {
				return -999;
			}
			
			let answer = operation.operate(firstNumber, secondNumber);
			
			return answer;
		}
		
		toString() {
		    return "Calculator";
		}
		
	}

}
