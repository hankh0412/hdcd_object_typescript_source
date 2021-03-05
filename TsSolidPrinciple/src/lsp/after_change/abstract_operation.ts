export namespace CALC.lsp.after {

	export abstract class AbstractOperation {
		
		constructor() {
			
		}
		
		abstract operate(firstNumber: number, secondNumber: number): number;
		
		isInvalidNumber(firstNumber: number, secondNumber: number): boolean {
			return false;
		}
			
		toString() {
		    return "AbstractOperation";
		}
		
	}

}
