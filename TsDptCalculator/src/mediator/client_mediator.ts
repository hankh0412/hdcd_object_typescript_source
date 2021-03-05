import {CALC as calc} from "./icolleague";
import {CALC as calc2} from "./add_colleague";
import {CALC as calc3} from "./substract_colleague";
import {CALC as calc4} from "./multiply_colleague";
import {CALC as calc5} from "./divide_colleague";

export namespace CALC.mediator {

	import IColleague = calc.mediator.IColleague;
	import AddColleague = calc2.mediator.AddColleague;
	import SubstractColleague = calc3.mediator.SubstractColleague;
	import MultiplyColleague = calc4.mediator.MultiplyColleague;
	import DivideColleague = calc5.mediator.DivideColleague;

	export class ClientMediator {

		private addColleague: IColleague;
		private substractColleague: IColleague;
		private multiplyColleague: IColleague;
		private divideColleague: IColleague;
		
		constructor() {
			this.addColleague = new AddColleague();
	        this.substractColleague = new SubstractColleague();
	        this.multiplyColleague = new MultiplyColleague();
	        this.divideColleague = new DivideColleague();
	        
	        this.createColleagues();
		}
		
		createColleagues() {
			this.addColleague.setMediator(this);
	        this.substractColleague.setMediator(this);
	        this.multiplyColleague.setMediator(this);
	        this.divideColleague.setMediator(this);
		}
		
		colleagueChanged(colleague: IColleague) {
			let firstNumber = colleague.getFirstNumber();
	        let secondNumber = colleague.getSecondNumber();
	        
	        this.addColleague.setFirstNumber(firstNumber);
	        this.addColleague.setSecondNumber(secondNumber);
	        
	        this.addColleague.printResult();
	        
	        this.substractColleague.setFirstNumber(firstNumber);
	        this.substractColleague.setSecondNumber(secondNumber);
	        
	        this.substractColleague.printResult();
	        
	        this.multiplyColleague.setFirstNumber(firstNumber);
	        this.multiplyColleague.setSecondNumber(secondNumber);
	        
	        this.multiplyColleague.printResult();
	        
	        this.divideColleague.setFirstNumber(firstNumber);
	        this.divideColleague.setSecondNumber(secondNumber);
	        
	        this.divideColleague.printResult();
		}
		
		getAddColleague() {
			return this.addColleague;
		}
		
		getSubstractColleague() {
			return this.substractColleague;
		}
		
		getMultiplyColleague() {
			return this.multiplyColleague;
		}
		
		getDivideColleague() {
			return this.divideColleague;
		}
		
	}

}
