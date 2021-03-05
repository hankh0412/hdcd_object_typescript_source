export namespace CALC.sip.after {

	export class SubstractOperation {
		
		constructor() {
			
		}
		
		substract(firstNumber: number, secondNumber: number): number {
		    return firstNumber - secondNumber;
		}
		
		toString() {
		    return "SubstractOperation";
		}
		
	}

}
