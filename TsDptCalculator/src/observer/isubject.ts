import {CALC as calc} from "./abstract_operation_observer";

export namespace CALC.observer {

	import AbstractOperationObserver = calc.observer.AbstractOperationObserver;

	export interface ISubject {
		
		notifyObservers(): void;
		
		registerObserver(oberver: AbstractOperationObserver): void;
		
		removeObserver(oberver: AbstractOperationObserver): void;
		
	}

}
