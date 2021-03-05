import {CALC as calc} from "../abstract_function_expression";
import {CALC as calc2} from "../abstract_expression";
import {CALC as calc3} from "../../calc_context";
import {CALC as calc4} from "../calc_expression_factory";

export namespace CALC.interpreter.expression.decorator {

	import AbstractFunctionExpression = calc.interpreter.expression.AbstractFunctionExpression;
	import AbstractExpression = calc2.interpreter.expression.AbstractExpression;
	import CalcContext = calc3.interpreter.CalcContext;
	//import CalcExpressionFactory = calc4.interpreter.expression.CalcExpressionFactory;

	export abstract class AbstractDecoratorExpression extends AbstractFunctionExpression {

		protected expression: AbstractExpression;

		constructor() {
			super();
		}
	
		setExpression(expression: AbstractExpression): void {
			this.expression = expression;
		}
		
		parse(context: CalcContext) {
			let CalcExpressionFactory = calc4.interpreter.expression.CalcExpressionFactory;

			context.skipToken(this.getFunctionName());
			
			context.getCurrentTokenAndGoToNext();
			
			context.skipToken("(");
						
			let currentToken = context.getCurrentTokenAndGoToNext();
			
			let expression = CalcExpressionFactory.createExpression(currentToken);
			expression.parse(context);
					
			this.setExpression(expression);	
					
			context.getCurrentTokenAndGoToNext();
			context.skipToken(")");
		}
		
	}

}
