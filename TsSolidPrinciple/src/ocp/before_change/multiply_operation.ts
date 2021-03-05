export namespace CALC.ocp.before {

	export class MultiplyOperation {
		
		constructor() {
			
		}
	
		operate(firstNumber: number, secondNumber: number): number {
		    return firstNumber * secondNumber;
		}
		
		toString() {
		    return "MultiplyOperation";
		}
		
	}

}
