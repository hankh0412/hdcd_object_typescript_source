export namespace CALC.ocp.before {

	export class AddOperation {
		
		constructor() {
			
		}
	
		operate(firstNumber: number, secondNumber: number): number {
		    return firstNumber + secondNumber;
		}
		
		toString() {
		    return "AddOperation";
		}
		
	}

}
