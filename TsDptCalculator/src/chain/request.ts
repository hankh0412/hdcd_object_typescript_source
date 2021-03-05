export namespace CALC.chain {

	export class Request {

		private expression: string;
		
		constructor(expression: string) {
			this.expression = expression;
		}
		
		getExpression() {
			return this.expression;
		}
		
		getFirstNumber(operator: string) {
			let operatorIndex = this.expression.indexOf(operator);
			
			let firstNumber = this.expression.substring(0, operatorIndex);
			return parseInt(firstNumber, 10);
		}
		
		getSecondNumber(operator: string) {
			let operatorIndex = this.expression.indexOf(operator);
			
			let secondNumber = this.expression.substring(operatorIndex + 1);
			return parseInt(secondNumber, 10);
		}
		
	}

}
