import {CALC as calc} from "./imediator";

export namespace CALC.mediator {

	import IMediator = calc.mediator.IMediator;

	export abstract class IColleague {
		
		private mediator: IMediator;
	
		private firstNumber: number = 100;
		private secondNumber: number = 10;

		constructor() {
			
		}
		
		abstract getAnswer(): number;
		
		abstract getOperator(): string;
		
		printResult(): void {
			let answer = this.getAnswer();
	        console.log(this.firstNumber + this.getOperator() + this.secondNumber + " = " + answer);
		}
		
		changeFirstNumber(firstNumber: number): void {
			this.setFirstNumber(firstNumber);
	        
	        this.mediator.colleagueChanged(this);
		}
		
		changeSecondNumber(secondNumber: number): void {
			this.setSecondNumber(secondNumber);
	        
	        this.mediator.colleagueChanged(this);
		}
		
		getFirstNumber(): number {
			return this.firstNumber;
		}
		
		getSecondNumber(): number {
			return this.secondNumber;
		}
		
		setFirstNumber(firstNumber: number): void {
			this.firstNumber = firstNumber;
		}
		
		setMediator(mediator: IMediator): void {
			this.mediator = mediator;
		}
		
		setSecondNumber(secondNumber: number): void {
			this.secondNumber = secondNumber;
		}
		
	}

}
