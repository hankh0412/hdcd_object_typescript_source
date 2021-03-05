import {CALC as calc} from "./icolleague";

export namespace CALC.mediator {

	import IColleague = calc.mediator.IColleague;

	export interface IMediator {
		
		createColleagues(): void;
		
		colleagueChanged(colleague: IColleague): void;
		
	}

}
