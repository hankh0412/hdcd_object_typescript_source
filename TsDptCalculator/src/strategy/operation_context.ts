import {CALC as calc} from "./abstract_operation_strategy";

export namespace CALC.strategy {

	import AbstractOperationStrategy = calc.strategy.AbstractOperationStrategy;

	export class OperationContext {

		private operationStrategy: AbstractOperationStrategy;
		
		constructor() {
			
		}
		
		operate(firstNumber: number, secondNumber: number): void {
			let answer = this.operationStrategy.getAnswer(firstNumber, secondNumber);
	
			let operator = this.operationStrategy.getOperator();
	
			let result = firstNumber + operator + secondNumber + "=" + answer;
	
			this.print(result);
		}
		
		setOperationStrategy(operationStrategy: AbstractOperationStrategy): void {
			this.operationStrategy = operationStrategy;
		}
		
		print(result: string) {
			console.log(result);
		}
		
	}

}
