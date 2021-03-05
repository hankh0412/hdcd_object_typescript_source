export namespace CALC.ocp.before {

	export class DivideOperation {
		
		constructor() {
			
		}
	
		operate(firstNumber: number, secondNumber: number): number {
		    return firstNumber / secondNumber;
		}
		
		toString() {
		    return "DivideOperation";
		}
		
	}

}
