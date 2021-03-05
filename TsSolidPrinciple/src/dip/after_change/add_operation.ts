import {CALC as calc} from "./abstract_operation";

export namespace CALC.dip.after {

	import AbstractOperation = calc.dip.after.AbstractOperation;
	
	export class AddOperation extends AbstractOperation {
		
		constructor() {
			super();
		}
	
		operate(firstNumber: number, secondNumber: number): number {
		    return firstNumber + secondNumber;
		}
		
		toString(): string {
		    return "AddOperation";
		}
		
	}

}
