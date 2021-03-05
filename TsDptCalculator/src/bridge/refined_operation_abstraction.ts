import {CALC as calc} from "./ibase_operation_implementor";
import {CALC as calc2} from "./operation_abstraction";

export namespace CALC.bridge {

	import OperationAbstraction = calc2.bridge.OperationAbstraction;
	import IBaseOperationImplementor = calc.bridge.IBaseOperationImplementor;

	export class RefinedOperationAbstraction extends OperationAbstraction {
		
		constructor(impl: IBaseOperationImplementor) {
			super(impl);
		}
	
		sqrt(a: number): number {
			return Math.sqrt(a);
		}
		
		pow(a: number, b: number): number {
			return Math.pow(a, b);
		}
		
	}

}
