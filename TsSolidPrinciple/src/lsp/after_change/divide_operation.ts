import {CALC as calc} from "./abstract_operation";

export namespace CALC.lsp.after {

	import AbstractOperation = calc.lsp.after.AbstractOperation;
	
	export class DivideOperation extends AbstractOperation {
		
		constructor() {
			super();
		}
	
		operate(firstNumber: number, secondNumber: number): number {
		    return firstNumber / secondNumber;
		}
		
		isInvalidNumber(firstNumber: number, secondNumber: number): boolean {
			if(secondNumber === 0) {
				return true;
			}
			
			return false;
		}
		
		toString() {
		    return "DivideOperation";
		}
		
	}

}
