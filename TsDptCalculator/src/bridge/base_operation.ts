import {CALC as calc} from "./ibase_operation_implementor";

export namespace CALC.bridge {

	import IBaseOperationImplementor = calc.bridge.IBaseOperationImplementor;

	export class BaseOperation implements IBaseOperationImplementor {
		
		constructor() {
			
		}
	
		add(firstNumber: number, secondNumber: number): number {
			return firstNumber + secondNumber;
		}
		
		substract(firstNumber: number, secondNumber: number): number {
			return firstNumber - secondNumber;
		}
		
		multiply(firstNumber: number, secondNumber: number): number {
			return firstNumber * secondNumber;
		}
		
		divide(firstNumber: number, secondNumber: number): number {
			return firstNumber / secondNumber;
		}
		
	}

}
