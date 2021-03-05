import {CALC as calc} from "./abstract_operation";

export namespace CALC.ocp.after {

	import AbstractOperation = calc.ocp.after.AbstractOperation;
	
	export class DivideOperation extends AbstractOperation {
		
		constructor() {
			super();
		}
	
		operate(firstNumber: number, secondNumber: number): number {
		    return firstNumber / secondNumber;
		}
		
		toString() {
		    return "DivideOperation";
		}
		
	}

}
