export namespace CALC.sip.after {

	export class MultiplyOperation {
		
		constructor() {
			
		}
		
		multiply(firstNumber: number, secondNumber: number): number {
		    return firstNumber * secondNumber;
		}
		
		toString() {
		    return "MultiplyOperation";
		}
		
	}

}
