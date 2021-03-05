export namespace CALC.sip.after {

	export class DivideOperation {
		
		constructor() {
			
		}
		
		divide(firstNumber: number, secondNumber: number): number {
		    return firstNumber / secondNumber;
		}
		
		toString() {
		    return "DivideOperation";
		}
		
	}

}
