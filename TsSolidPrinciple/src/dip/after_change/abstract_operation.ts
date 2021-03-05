export namespace CALC.dip.after {

	export abstract class AbstractOperation {
		
		constructor() {
			
		}
		
		abstract operate(firstNumber: number, secondNumber: number): number;
		
		toString(): string {
		    return "AbstractOperation";
		}
	
	}

}
