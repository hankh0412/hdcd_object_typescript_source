export namespace CALC.dip.before {

	export class AddOperation {
		
		constructor() {
			
		}
		
		add(firstNumber: number, secondNumber: number): number {
		    return firstNumber + secondNumber;
		}
		
		toString(): string {
		    return "AddOperation";
		}
		
	}

}
