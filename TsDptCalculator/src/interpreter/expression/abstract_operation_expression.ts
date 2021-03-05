import {CALC as calc} from "./abstract_function_expression";
import {CALC as calc2} from "./abstract_expression";
import {CALC as calc3} from "../calc_context";
import {CALC as calc4} from "./calc_expression_factory";

export namespace CALC.interpreter.expression {

	import AbstractFunctionExpression = calc.interpreter.expression.AbstractFunctionExpression;
	import AbstractExpression = calc2.interpreter.expression.AbstractExpression;
	import CalcContext = calc3.interpreter.CalcContext;
	//import CalcExpressionFactory = calc4.interpreter.expression.CalcExpressionFactory;

	export abstract class AbstractOperationExpression extends AbstractFunctionExpression {
		
		protected operandList: AbstractExpression[];

		constructor() {
			super();
			
			this.operandList = [];
		}
	
		addOperandExpression(operandExpression: AbstractExpression) {
			this.operandList.push(operandExpression);
		}
		
		parse(context: CalcContext) {

			let CalcExpressionFactory = calc4.interpreter.expression.CalcExpressionFactory;

			context.skipToken(this.getFunctionName());
	
			context.getCurrentTokenAndGoToNext();
			context.skipToken("(");
	
			let currentToken = context.getCurrentTokenAndGoToNext();
	
			let operandExpression = CalcExpressionFactory.createExpression(currentToken);
			operandExpression.parse(context);
	
			this.addOperandExpression(operandExpression);
	
			context.getCurrentTokenAndGoToNext();
			context.skipToken(",");
	
			currentToken = context.getCurrentTokenAndGoToNext();
	
			operandExpression = CalcExpressionFactory.createExpression(currentToken);
			operandExpression.parse(context);
	
			this.addOperandExpression(operandExpression);
	
			context.getCurrentTokenAndGoToNext();
			context.skipToken(")");
		}
		
	}

}
