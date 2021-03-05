export namespace CALC.memento {

	export class OperationMemento {
		
		private firstNumber: number;
		private secondNumber: number;

		constructor(firstNumber: number, secondNumber: number) {
			this.firstNumber = firstNumber;
			this.secondNumber = secondNumber;
		}
		
		getFirstNumber(): number {
			return this.firstNumber;
		}
		
		getSecondNumber(): number {
			return this.secondNumber;
		}
		
	}

}
