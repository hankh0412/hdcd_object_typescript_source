export namespace CALC.adapter {

	export abstract class AbstractOperationTarget {
		
		constructor() {
			
		}
		
		abstract operate(firstNumber: number, secondNumber: number): number;
		
	}
}

