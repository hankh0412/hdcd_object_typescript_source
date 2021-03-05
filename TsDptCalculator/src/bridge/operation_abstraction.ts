import {CALC as calc} from "./ibase_operation_implementor";

export namespace CALC.bridge {

	import IBaseOperationImplementor = calc.bridge.IBaseOperationImplementor;

	export class OperationAbstraction {

		private impl: IBaseOperationImplementor;
	
		constructor(impl: IBaseOperationImplementor) {
			this.impl = impl;
		}
		
		add(firstNumber: number, secondNumber: number): number {
			return this.impl.add(firstNumber, secondNumber);
		}
		
		substract(firstNumber: number, secondNumber: number): number {
			return this.impl.substract(firstNumber, secondNumber);
		}
		
		multiply(firstNumber: number, secondNumber: number): number {
			return this.impl.multiply(firstNumber, secondNumber);
		}
		
		divide(firstNumber: number, secondNumber: number): number {
			return this.impl.divide(firstNumber, secondNumber);
		}
		
	}

}
