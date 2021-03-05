import {CALC as calc} from "./abstract_operator";

export namespace CALC.factorymethod {

	import AbstractOperator = calc.factorymethod.AbstractOperator;

	export class MultiplyOperator extends AbstractOperator {
		
		constructor() {
			super();
		}
	
		getAnswer(firstNumber: number, secondNumber: number): number {
			return firstNumber * secondNumber;
		}
		
		getDescription(): string {
			return "*";
		}
		
	}

}
