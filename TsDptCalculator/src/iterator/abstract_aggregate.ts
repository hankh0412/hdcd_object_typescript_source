import {CALC as calc} from "./icalc_iterator";

export namespace CALC.iterator {

	import ICalcIterator = calc.iterator.ICalcIterator;

	export abstract class AbstractAggregate {
		
		constructor() {
			
		}
		
		abstract createIterator(): ICalcIterator;
		
	}

}
