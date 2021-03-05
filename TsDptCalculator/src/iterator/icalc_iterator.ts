import {CALC as calc} from "./abstract_operation";

export namespace CALC.iterator {

	import AbstractOperation = calc.iterator.AbstractOperation;

	export interface ICalcIterator {
		
		hasNext(): boolean;
		
		next(): AbstractOperation;

	}

}
