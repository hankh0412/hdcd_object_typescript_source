import {CALC as calc} from "./isubject";
import {CALC as calc2} from "./abstract_operation_observer";

export namespace CALC.observer {

	import ISubject = calc.observer.ISubject;
	import AbstractOperationObserver = calc2.observer.AbstractOperationObserver;

	export class OperationSubject implements ISubject {

		private firstNumber: number = 0;
		private secondNumber: number = 0;

		private observers: AbstractOperationObserver[] = [];
		
		constructor() {
			
		}
		
		registerObserver(oberver: AbstractOperationObserver): void {
			this.observers.push(oberver);
		}
		
		removeObserver(oberver: AbstractOperationObserver): void {
			let index = this.observers.indexOf(oberver);
			if (index >= 0) {
				this.observers.splice(index, 1);
			}
		}
		
		notifyObservers(): void {
			for (let i = 0; i < this.observers.length; i++) {
				this.observers[i].update();
			}
		}
		
		getFirstNumber(): number {
			return this.firstNumber;
		}
		
		setNumber(firstNumber: number, secondNumber: number): void {
			this.firstNumber = firstNumber;
			this.secondNumber = secondNumber;
	
			this.notifyObservers();
		}
		
		getSecondNumber(): number {
			return this.secondNumber;
		}
		
	}

}
