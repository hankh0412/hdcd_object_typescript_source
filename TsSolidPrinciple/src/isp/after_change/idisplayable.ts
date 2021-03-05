import {CALC as calc} from "./abstract_operation";

export namespace CALC.isp.after {

	import AbstractOperation = calc.isp.after.AbstractOperation;

	export interface IDisplayable {
		
		newDisplay(operation: AbstractOperation, firstNumber: number, secondNumber: number): void;
		
	}

}
