export namespace CALC.dip.before {

	export class SubstractOperation {
		
		constructor() {
			
		}
		
		substract(firstNumber: number, secondNumber: number): number {
		    return firstNumber - secondNumber;
		}
		
		toString(): string {
		    return "SubstractOperation";
		}
		
	}

}
