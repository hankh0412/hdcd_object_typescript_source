import {CALC as calc} from "./icalc_iterator";
import {CALC as calc2} from "./operation_aggregate";
import {CALC as calc3} from "./abstract_operation";

export namespace CALC.iterator {

	import ICalcIterator = calc.iterator.ICalcIterator;
	import OperationAggregate = calc2.iterator.OperationAggregate;
	import AbstractOperation = calc3.iterator.AbstractOperation;

	export class OperationIterator implements ICalcIterator {

		private operationAggregate: OperationAggregate;
		private index: number = 0;
		
		constructor(operationAggregate: OperationAggregate) {
			this.operationAggregate = operationAggregate;
		}
		
		hasNext(): boolean {
			if (this.index < this.operationAggregate.getSize()) {
				return true;
			} 
			else {
				return false;
			}
		}
		
		next(): AbstractOperation {
			let operation = this.operationAggregate.getOperationAt(this.index);
			this.index++;
	
			return operation;
		}
		
	}

}
