export namespace CALC.iterator {

	export abstract class AbstractOperation {
		
		constructor() {
			
		}
		
		abstract getAnswer(firstNumber: number, secondNumber: number): number;
		
		abstract print(firstNumber: number, secondNumber: number): void;
		
	}

}
