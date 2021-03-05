import {CALC as calc} from "./abstract_operation_prototype";

export namespace CALC.prototype {

	import AbstractOperationPrototype = calc.prototype.AbstractOperationPrototype;

	export class SubstractOperationPrototype extends AbstractOperationPrototype {
		
		constructor(operationPrototype: AbstractOperationPrototype) {
			super(operationPrototype);
		}
	
		getClone(): AbstractOperationPrototype {
			return new SubstractOperationPrototype(this);
		}
		
		getAnswer(firstNumber: number, secondNumber: number): number {
			return firstNumber - secondNumber;
		}
		
		getOperator() {
			return "-";
		}
		
	}

}
