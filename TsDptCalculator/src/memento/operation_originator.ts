import {CALC as calc} from "./operation_memento";

export namespace CALC.memento {

	import OperationMemento = calc.memento.OperationMemento;

	export class OperationOriginator {

		private firstNumber: number = 0;
		private secondNumber: number = 0;
		
		constructor() {
			
		}
		
		createMemento(): OperationMemento {
			return new OperationMemento(this.firstNumber, this.secondNumber);
		}
		
		setMemento(memento: OperationMemento): void {
			this.firstNumber = memento.getFirstNumber();
			this.secondNumber = memento.getSecondNumber();
		}
		
		printOperations(): void {
			console.log(this.firstNumber + " + " + this.secondNumber + " = " + (this.firstNumber + this.secondNumber));
			console.log(this.firstNumber + " - " + this.secondNumber + " = " + (this.firstNumber - this.secondNumber));
			console.log(this.firstNumber + " * " + this.secondNumber + " = " + (this.firstNumber * this.secondNumber));
			console.log(this.firstNumber + " / " + this.secondNumber + " = " + (this.firstNumber / this.secondNumber));
		}
		
		setFirstNumber(firstNumber: number): void {
			this.firstNumber = firstNumber;
		}
		
		setSecondNumber(secondNumber: number): void {
			this.secondNumber = secondNumber;
		}
		
	}

}
