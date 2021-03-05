export namespace CALC.proxy {

	export abstract class AbstractOperationSubject {
		
		constructor() {
			
		}
		
		abstract operate(firstNumber: number, secondNumber: number): number;
		
	}

}
