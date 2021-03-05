import {CALC as calc} from "./abstract_operation_strategy";

export namespace CALC.strategy {

	import AbstractOperationStrategy = calc.strategy.AbstractOperationStrategy;
	
	export class AddOperationStrategy extends AbstractOperationStrategy {
		
		constructor() {
			super();
		}
	
		getAnswer(firstNumber: number, secondNumber: number): number {
			return firstNumber + secondNumber;
		}
		
		getOperator(): string {
			return "+";
		}
		
	}

}
