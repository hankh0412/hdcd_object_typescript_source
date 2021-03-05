import {CALC as calc} from "./abstract_operation";
import {CALC as calc2} from "./divide_operation";

export namespace CALC.lsp.before {

	import AbstractOperation = calc.lsp.before.AbstractOperation;
	import DivideOperation = calc2.lsp.before.DivideOperation;

	export class Calculator {
		
		constructor() {
			
		}
		
		calculate(operation: AbstractOperation, firstNumber: number, secondNumber: number): number {
			//Change_Start
			if(operation instanceof DivideOperation) {
				if(secondNumber === 0) {
					return -999;
				}
			}
			//Change_End
			
			let answer = operation.operate(firstNumber, secondNumber);
			
			return answer;
		}
		
		toString() {
		    return "Calculator";
		}
		
	}

}
