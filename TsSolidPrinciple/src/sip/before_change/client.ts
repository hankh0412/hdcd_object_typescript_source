import {CALC as calc} from "./calculator";

export namespace CALC.sip.before {

	import Calculator = calc.sip.before.Calculator;

	export class Client {
		
		constructor() {
			
		}
		
		main() {
			let calculator = new Calculator();
			
			let firstNumber = 100;
			let secondNumber = 20;
			
			let operator = "+";
			let answer = calculator.calculate(operator, firstNumber, secondNumber);
			
			console.log(firstNumber + operator + secondNumber + " = " + answer);
			
			operator = "-";
			answer = calculator.calculate(operator, firstNumber, secondNumber);
			
			console.log(firstNumber + operator + secondNumber + " = " + answer);
			
			operator = "*";
			answer = calculator.calculate(operator, firstNumber, secondNumber);
			
			console.log(firstNumber + operator + secondNumber + " = " + answer);
			
			//Change_Start
			operator = "/";
			answer = calculator.calculate(operator, firstNumber, secondNumber);
			
			console.log(firstNumber + operator + secondNumber + " = " + answer);
			//Change_End
		}
		
		toString() {
		    return "Client";
		}
		
	}

}
