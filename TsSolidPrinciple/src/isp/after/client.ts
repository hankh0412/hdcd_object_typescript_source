import {CALC as calc} from "./calculator";
import {CALC as calc2} from "./add_operation";
import {CALC as calc3} from "./calc_client";
import {CALC as calc4} from "./display_client";

export namespace CALC.isp.after {

	import Calculator = calc.isp.after.Calculator;
	import AddOperation = calc2.isp.after.AddOperation;
	import CalcClient = calc3.isp.after.CalcClient;
	import DisplayClient = calc4.isp.after.DisplayClient;

	export class Client {
		
		constructor() {
			
		}
		
		main() {
			let after = CALC.isp.after;
			
			let calculator = new Calculator();
			
			let firstNumber = 100;
			let secondNumber = 20;
			
			let operation = new AddOperation();
			
			let calcClient = new CalcClient();
			
			let answer = calcClient.request(calculator, operation, firstNumber, secondNumber);
			
			console.log("answer = " + answer);
			
			let displayClient = new DisplayClient();
			
			displayClient.request(calculator, operation, firstNumber, secondNumber);
		}
		
		toString() {
		    return "Client";
		}
		
	}

}
