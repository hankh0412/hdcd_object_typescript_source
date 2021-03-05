import {CALC as calc} from "./abstract_operation";

export namespace CALC.lsp.before {

	import AbstractOperation = calc.lsp.before.AbstractOperation;

	export class Calculator {
		
		constructor() {
			
		}
		
		calculate(operation: AbstractOperation, firstNumber: number, secondNumber: number): number {
			let answer = operation.operate(firstNumber, secondNumber);
			
			return answer;
		}
		
		toString() {
		    return "Calculator";
		}
		
	}

}
