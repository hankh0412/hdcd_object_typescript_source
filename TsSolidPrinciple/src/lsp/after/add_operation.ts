import {CALC as calc} from "./abstract_operation";

export namespace CALC.lsp.after {

	import AbstractOperation = calc.lsp.after.AbstractOperation;
	
	export class AddOperation extends AbstractOperation {
		
		constructor() {
			super();
		}
	
		operate(firstNumber: number, secondNumber: number): number {
		    return firstNumber + secondNumber;
		}
		
		toString() {
		    return "AddOperation";
		}
		
	}

}
