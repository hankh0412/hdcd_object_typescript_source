export namespace CALC.templatemethod {

	export abstract class AbstractOperation {
		
		private firstNumber: number = 0;
		private secondNumber: number = 0;

		constructor() {
			
		}
		
		abstract getAnswer(firstNumber: number, secondNumber: number): number;
		
		abstract getOperator(): string;
		
		operate(): void {
			let firstNumber = this.getFirstNumber();
			let secondNumber = this.getSecondNumber();
	
			let operator = this.getOperator();
	
			let answer = this.getAnswer(firstNumber, secondNumber);
	
			let result = firstNumber + operator + secondNumber + " = " + answer;
	
			this.print(result);
		}
		
		print(result: string): void {
			console.log(result);
		}
		
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
		
	}

}
