export namespace CALC.interpreter {

	export class CalcToken {

		public static FUNCTION: number = 1;
		public static NUMBER: number = 2;
		public static DELIM: number = 3;
		public static VARIABLE: number = 4;

		private type: number;
		private token: string;
		
		constructor(type: number, token: string) {
			this.type = type;
			this.token = token;
		}
		
		getType() {
			return this.type;
		}
		
		getToken() {
			return this.token;
		}
		
		getTypeDescription(type: number) {
			if (type === CalcToken.FUNCTION) {
				return "FUNCTION";
			}
			if (type === CalcToken.NUMBER) {
				return "NUMBER";
			}
			if (type === CalcToken.DELIM) {
				return "DELIM";
			}		
			if (type === CalcToken.VARIABLE) {
				return "VARIABLE";
			}
	
			return null;
		}
		
		toString() {
			return this.getTypeDescription(this.type) + " " + this.token;
		}
		
	}
	
	

}
