import {CALC as calc} from "./abstract_aggregate";
import {CALC as calc2} from "./abstract_operation";
import {CALC as calc3} from "./icalc_iterator";
import {CALC as calc4} from "./operation_iterator";

export namespace CALC.iterator {

	import AbstractAggregate = calc.iterator.AbstractAggregate;
	import AbstractOperation = calc2.iterator.AbstractOperation;
	import ICalcIterator = calc3.iterator.ICalcIterator;
	import OperationIterator = calc4.iterator.OperationIterator;

	export class OperationAggregate extends AbstractAggregate {

		private operations: AbstractOperation[] = [];
		
		constructor() {
			super();
		}
	
		addOperation(operation: AbstractOperation): void {
			this.operations.push(operation);
		}
		
		createIterator(): ICalcIterator {
			return new OperationIterator(this);
		}
		
		getOperationAt(index: number): AbstractOperation {
			return this.operations[index];
		}
		
		getSize(): number {
			return this.operations.length;
		}
		
	}

}
