import {CALC as calc} from "./client_mediator";

let clientMediator = new calc.mediator.ClientMediator();
	    
let colleague = clientMediator.getAddColleague();

colleague.changeFirstNumber(60);

colleague = clientMediator.getMultiplyColleague();

colleague.changeFirstNumber(80);
