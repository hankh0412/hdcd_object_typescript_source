import {CALC as calc} from "./calc_tokenizer";
import {CALC as calc2} from "./calc_token";

export namespace CALC.interpreter {

	import CalcTokenizer = calc.interpreter.CalcTokenizer;
	import CalcToken = calc2.interpreter.CalcToken;

	export class CalcContext {

		private tokenizer: CalcTokenizer;
		private currentToken: CalcToken;
		
		
		constructor(text: string) {
			this.tokenizer = new CalcTokenizer(text);
			this.currentToken = null;
		}
		
		getCurrentTokenAndGoToNext() {
			if (this.tokenizer.hasMoreElements()) {
				this.currentToken = this.tokenizer.getCurrentTokenAndGoToNext();
			} 
			else {
				this.currentToken = null;
			}
	
			return this.currentToken;
		}
		
		skipToken(token: string) {
			if (token !== this.currentToken.getToken()) {
				throw new Error("Warning: " + token + " is expected, but " + this.currentToken + " is found.");
			}
		}
		
		print() {
			this.tokenizer.print();
		}
		
		getCurrentToken() {
			return this.tokenizer.getCurrentToken();
		}
		
	}

}
