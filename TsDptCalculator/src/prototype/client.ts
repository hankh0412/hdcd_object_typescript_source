import {CALC as calc} from "./abstract_operation_prototype";
import {CALC as calc2} from "./add_operation_prototype";
import {CALC as calc3} from "./substract_operation_prototype";
import {CALC as calc4} from "./multiply_operation_prototype";
import {CALC as calc5} from "./divide_operation_prototype";

export namespace CALC.prototype {

	import AbstractOperationPrototype = calc.prototype.AbstractOperationPrototype;
	import AddOperationPrototype = calc2.prototype.AddOperationPrototype;
	import SubstractOperationPrototype = calc3.prototype.SubstractOperationPrototype;
	import MultiplyOperationPrototype = calc4.prototype.MultiplyOperationPrototype;
	import DivideOperationPrototype = calc5.prototype.DivideOperationPrototype;

	export class Client {

		private operationPrototype: AbstractOperationPrototype;
		private operationPrototypeMap: any = {};
		
		constructor() {
			this.initOperationMap();
		}
		
		operate(): void {
			this.operationPrototype.operate();
		}
		
		setOperation(operator: string, firstNumber: number, secondeNumber: number): void {
			this.operationPrototype = this.getOperationClone(operator);
	
			this.operationPrototype.setFirstNumber(firstNumber);
			this.operationPrototype.setSecondNumber(secondeNumber);
		}
		
		private initOperationMap(): void {
			this.operationPrototypeMap["+"] = new AddOperationPrototype(null);
			this.operationPrototypeMap["-"] = new SubstractOperationPrototype(null);
			this.operationPrototypeMap["*"] = new MultiplyOperationPrototype(null);
			this.operationPrototypeMap["/"] = new DivideOperationPrototype(null);
		}
		
		private getOperationClone(operator: string): AbstractOperationPrototype {
			let operation = this.operationPrototypeMap[operator];
			return operation.getClone();
		}
		
	}

}
