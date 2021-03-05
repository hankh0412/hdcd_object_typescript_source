export namespace CALC.dip.before {

	export class DivideOperation {
		
		constructor() {
			
		}
		
		divide(firstNumber: number, secondNumber: number): number {
		    return firstNumber / secondNumber;
		}
		
		toString(): string {
		    return "DivideOperation";
		}
		
	}

}
