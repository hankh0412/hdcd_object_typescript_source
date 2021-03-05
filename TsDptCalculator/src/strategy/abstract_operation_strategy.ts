export namespace CALC.strategy {

	export abstract class AbstractOperationStrategy {
		
		constructor() {
			
		}
		
		abstract getAnswer(firstNumber: number, secondNumber: number): number;
		
		abstract getOperator(): string;
		
	}

}
