export namespace CALC.factorymethod {

	export abstract class AbstractOperator {
		
		constructor() {
			
		}
		
		abstract getAnswer(firstNumber: number, secondNumber: number): number;
		
		abstract getDescription(): string;
		
	}

}
