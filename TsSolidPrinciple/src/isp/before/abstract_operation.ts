export namespace CALC.isp.before {

	export abstract class AbstractOperation {
		
		constructor() {
			
		}
		
		abstract operate(firstNumber: number, secondNumber: number): number;
		
		abstract getOperator(): string;
		
		toString() {
		    return "AbstractOperation";
		}
		
	}

}
