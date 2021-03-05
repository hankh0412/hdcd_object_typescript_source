import {CALC as calc} from "./icolleague";

export namespace CALC.mediator {

	import IColleague = calc.mediator.IColleague;

	export class SubstractColleague extends IColleague {
		
		constructor() {
			super();
		}
	
		getAnswer(): number {
	    	return this.getFirstNumber() - this.getSecondNumber()
		}
		
		getOperator(): string {
			return "-"
		}
		
	}

}
