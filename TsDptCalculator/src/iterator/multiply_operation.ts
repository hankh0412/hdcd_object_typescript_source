import {CALC as calc} from "./abstract_operation";

export namespace CALC.iterator {

	import AbstractOperation = calc.iterator.AbstractOperation;

	export class MultiplyOperation extends AbstractOperation {
		
		constructor() {
			super();
		}
	
		getAnswer(firstNumber: number, secondNumber: number): number {
			return firstNumber * secondNumber;
		}
		
		print(firstNumber: number, secondNumber: number): void {
			let answer = this.getAnswer(firstNumber, secondNumber);
	
			console.log(firstNumber + " * " + secondNumber + " = " + answer);
		}
		
	}

}
