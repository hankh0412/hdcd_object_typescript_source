import {CALC as calc} from "./expression/abstract_expression";
import {CALC as calc2} from "./set_value_to_variable_visitor";

export namespace CALC.visitor {

	import AbstractExpression = calc.visitor.expression.AbstractExpression;
	import SetValueToVariableVisitor = calc2.visitor.SetValueToVariableVisitor;
	
	export class Calculator {

		private expression: AbstractExpression;
		private variableToValueMap: any = {};
		
		constructor() {
			
		}
		
		calculate() {
			if (this.expression != null) {
				for(let variableName in this.variableToValueMap) {
					if(!this.variableToValueMap.hasOwnProperty(variableName)) {
						continue;
					}
					
					let value = this.variableToValueMap[variableName];
	
					let setValueToVariableVisitor = new SetValueToVariableVisitor(variableName, value);
	
					this.expression.accept(setValueToVariableVisitor);
				}
	
				return this.expression.operate();
			}
			
			return 0;
		}
		
		setExpression(expression: AbstractExpression) {
			this.expression = expression;
		}
		
		addVariableToValue(variableName: string, value: number) {
			this.variableToValueMap[variableName] = value;
		}
		
	}

}
