import {CALC as calc} from "./abstract_visitor";
import {CALC as calc2} from "./expression/abstract_expression";
import {CALC as calc3} from "./expression/variable_expression";

export namespace CALC.visitor {

	import AbstractVisitor = calc.visitor.AbstractVisitor;
	import AbstractExpression = calc2.visitor.expression.AbstractExpression;
	import VariableExpression = calc3.visitor.expression.VariableExpression;
	
	export class SetValueToVariableVisitor extends AbstractVisitor {

		private variableName: string;
		private value: number;
		
		constructor(variableName: string, value: number) {
			super();
			
			this.variableName = variableName;
			this.value = value;
		}
	
		visit(expression: AbstractExpression): void {
			let variableExpression: VariableExpression = <VariableExpression> expression;

			if (variableExpression.getName() === this.variableName) {
				variableExpression.setValue(this.value);
			}
		}
		
	}

}
