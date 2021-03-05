import {CALC as calc} from "./abstract_operation_prototype";

export namespace CALC.prototype {

	import AbstractOperationPrototype = calc.prototype.AbstractOperationPrototype;

	export class MultiplyOperationPrototype extends AbstractOperationPrototype {
		
		constructor(operationPrototype: AbstractOperationPrototype) {
			super(operationPrototype);
		}
	
		getClone(): AbstractOperationPrototype {
			return new MultiplyOperationPrototype(this);
		}
		
		getAnswer(firstNumber: number, secondNumber: number): number {
			return firstNumber * secondNumber;
		}
		
		getOperator() {
			return "*";
		}
		
	}

}
