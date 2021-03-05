export namespace CALC.sip.before {

	export class Calculator {
		
		constructor() {
			
		}
		
		calculate(operator: string, firstNumber: number, secondNumber: number): number {
			let answer = 0;
			
			if(operator === "+") {
				answer = firstNumber + secondNumber;
			}
			else if(operator === "-") {
				answer = firstNumber - secondNumber;
			}
			else if(operator === "*") {
				answer = firstNumber * secondNumber;
			}
			//Change_Start
			else if(operator === "/") {
				answer = firstNumber / secondNumber;
			}
			//Change_End
			
			return answer;
		}
		
		toString() {
		    return "Calculator";
		}
		
	}

}
