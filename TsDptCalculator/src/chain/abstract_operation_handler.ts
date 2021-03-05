import {CALC as calc} from "./request";

export namespace CALC.chain {

	import Request = calc.chain.Request;

	export abstract class AbstractOperationHandler {

		private operator: string;
		private next: AbstractOperationHandler;
		
		constructor(operator: string) {
			this.operator = operator;
			this.next = null;
		}
		
		setNext(next: AbstractOperationHandler) {
			this.next = next;
			return next;
		}
	
		handleRequest(request: Request): number {
			if (this.resolve(request)) {
				let result: number = this.operate(request);
				return result;
			} 
			else if (this.next !== null) {
				return this.next.handleRequest(request);
			} 
			else {
				this.handleFail(request);
				return 0;
			}
		}
	
		handleFail(request: Request): void {
			console.log("fail");
		}
		
		getOperator() {
			return this.operator;
		}
		
		
		abstract operate(request: Request): number;
		
		resolve(request: Request) {
			if (request.getExpression().indexOf(this.getOperator()) >= 0) {
				return true;
			}
	
			return false;
		}
		
	}

}
