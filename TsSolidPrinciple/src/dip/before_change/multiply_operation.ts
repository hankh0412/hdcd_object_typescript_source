export namespace CALC.dip.before {

	export class MultiplyOperation {
		
		constructor() {
			
		}
		
		multiply(firstNumber: number, secondNumber: number): number {
		    return firstNumber * secondNumber;
		}
		
		toString(): string {
		    return "MultiplyOperation";
		}
		
	}

}
