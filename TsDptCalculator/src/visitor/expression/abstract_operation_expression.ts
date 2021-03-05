import {CALC as calc} from "./abstract_expression";
import {CALC as calc2} from "../abstract_visitor";

export namespace CALC.visitor.expression {

	import AbstractExpression = calc.visitor.expression.AbstractExpression;
	import AbstractVisitor = calc2.visitor.AbstractVisitor;
	
	export abstract class AbstractOperationExpression extends AbstractExpression {

		protected operandList: AbstractExpression[] = [];
		
		constructor() {
			super();
		}
	
		addOperandExpression(operandExpression: AbstractExpression): void {
			this.operandList.push(operandExpression);
		}
		
		accept(v: AbstractVisitor): void {
			for (let i = 0; i < this.operandList.length; i++) {
				let operandExpression = this.operandList[i];
				
				operandExpression.accept(v);
			}
		}
		
	}

}
