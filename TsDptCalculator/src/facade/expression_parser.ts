export namespace CALC.facade {

	export class ExpressionParser {

		private operators: string[] = [ "+", "-", "*", "/" ];
		private operatorToken: string;
		private firstNumberToken: string;
		private secondNumberToken: string;
			
		constructor() {
			
		}
		
		getOperatorToken(): string {
			return this.operatorToken;
		}
		
		getFirstNumberToken(): string {
			return this.firstNumberToken;
		}
		
		getSecondNumberToken(): string {
			return this.secondNumberToken;
		}
		
		parse(expression: string): void {
			let operatorIndex: number = -1;
	
			for (let i = 0; i < this.operators.length; i++) {
				operatorIndex = expression.indexOf(this.operators[i]);
				if (operatorIndex != -1) {
					this.operatorToken = this.operators[i];
					break;
				}
			}
	
			this.firstNumberToken = expression.substring(0, operatorIndex);
			this.secondNumberToken = expression.substring(operatorIndex + 1);
		}
		
	}

}
