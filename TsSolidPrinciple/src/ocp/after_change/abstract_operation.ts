export namespace CALC.ocp.after {

	export abstract class AbstractOperation {
		
		constructor() {
			
		}
		
		abstract operate(firstNumber: number, secondNumber: number): number;
		
		toString() {
		    return "AbstractOperation";
		}
		
	}

}
