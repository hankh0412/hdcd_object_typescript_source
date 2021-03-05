import {CALC as calc} from "./abstract_operator";

export namespace CALC.factorymethod {

	import AbstractOperator = calc.factorymethod.AbstractOperator;

	export abstract class AbstractOperation {

		private firstNumber: number = 0;
		private secondNumber: number = 0;
		
		constructor() {
			
		}
		
		operate(): void {
			let firstNumber = this.getFirstNumber();
			let secondNumber = this.getSecondNumber();
	
			let operator = this.getOperator();
	
			let operatorDescription = operator.getDescription();
	
			let answer = operator.getAnswer(firstNumber, secondNumber);
	
			let result = firstNumber + operatorDescription + secondNumber + " = " + answer;
	
			this.print(result);
		}
		
		abstract getOperator(): AbstractOperator;
		
		getFirstNumber(): number {
			return this.firstNumber;
		}
		
		setFirstNumber(firstNumber: number): void {
			this.firstNumber = firstNumber;
		}
		
		getSecondNumber(): number {
			return this.secondNumber;
		}
		
		setSecondNumber(secondNumber: number): void {
			this.secondNumber = secondNumber;
		}
		
		private print(result: string): void {
			console.log(result);
		}
		
	}

}
