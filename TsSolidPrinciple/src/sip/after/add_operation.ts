export namespace CALC.sip.after {

	export class AddOperation {
		
		constructor() {
			
		}
		
		add(firstNumber: number, secondNumber: number): number {
		    return firstNumber + secondNumber;
		}
		
		toString() {
		    return "AddOperation";
		}
		
	}

}
