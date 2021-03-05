export namespace CALC.prototype {

	export abstract class AbstractOperationPrototype {

		private firstNumber: number = 0;
		private secondNumber: number = 0;
		
		constructor(operationPrototype: AbstractOperationPrototype) {
			if(operationPrototype != null) {
				this.firstNumber = operationPrototype.firstNumber;
				this.secondNumber = operationPrototype.secondNumber;
			}
		}
		
		abstract getClone(): AbstractOperationPrototype;
		
		abstract getAnswer(firstNumber: number, secondNumber: number): number;
		
		abstract getOperator(): string;
		
		getFirstNumber() {
			return this.firstNumber;
		}
		
		setFirstNumber(firstNumber: number) {
			this.firstNumber = firstNumber;
		}
		
		getSecondNumber() {
			return this.secondNumber;
		}
		
		setSecondNumber(secondNumber: number) {
			this.secondNumber = secondNumber;
		}
		
		print(result: string) {
			console.log(result);
		}
		
		operate() {
			let firstNumber = this.getFirstNumber();
			let secondNumber = this.getSecondNumber();
	
			let operator = this.getOperator();
	
			let answer = this.getAnswer(firstNumber, secondNumber);
	
			let result = firstNumber + operator + secondNumber + " = " + answer;
	
			this.print(result);
		}
		
	}

}
