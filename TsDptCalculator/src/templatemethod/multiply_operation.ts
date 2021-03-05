import {CALC as calc} from "./abstract_operation";

export namespace CALC.templatemethod {

	import AbstractOperation = calc.templatemethod.AbstractOperation;
	
	export class MultiplyOperation extends AbstractOperation {
		
		constructor() {
			super();
		}
	
		getAnswer(firstNumber: number, secondNumber: number): number {
			return firstNumber * secondNumber;
		}
		
		getOperator(): string {
			return "*";
		}
		
	}

}
