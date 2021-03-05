export namespace CALC.ocp.before {

	export class SubstractOperation {
		
		constructor() {
			
		}
	
		operate(firstNumber: number, secondNumber: number): number {
		    return firstNumber - secondNumber;
		}
		
		toString() {
		    return "SubstractOperation";
		}
	
	}

}
