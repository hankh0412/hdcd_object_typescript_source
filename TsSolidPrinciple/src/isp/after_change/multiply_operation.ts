import {CALC as calc} from "./abstract_operation";

export namespace CALC.isp.after {

	import AbstractOperation = calc.isp.after.AbstractOperation;
	
	export class MultiplyOperation extends AbstractOperation {
		
		constructor() {
			super();
		}
	
		operate(firstNumber: number, secondNumber: number): number {
		    return firstNumber * secondNumber;
		}
		
		getOperator() {
			return "*";
		}
		
		toString() {
		    return "MultiplyOperation";
		}
		
	}

}
