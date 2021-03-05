import {CALC as calc} from "../calc_token";
import {CALC as calc2} from "./number_expression";
import {CALC as calc3} from "./add_operation_expression";
import {CALC as calc4} from "./substract_operation_expression";
import {CALC as calc5} from "./multiply_operation_expression";
import {CALC as calc6} from "./divide_operation_expression";
import {CALC as calc7} from "./decorator/sqrt_decorator_expression";
import {CALC as calc8} from "./decorator/frac_decorator_expression";
import {CALC as calc9} from "./decorator/pow_decorator_expression";

export namespace CALC.interpreter.expression {

	import CalcToken = calc.interpreter.CalcToken;
	import NumberExpression = calc2.interpreter.expression.NumberExpression;
	import SqrtDecoratorExpression = calc7.interpreter.expression.decorator.SqrtDecoratorExpression;
	import FracDecoratorExpression = calc8.interpreter.expression.decorator.FracDecoratorExpression;
	import PowDecoratorExpression = calc9.interpreter.expression.decorator.PowDecoratorExpression;
	import AddOperationExpression = calc3.interpreter.expression.AddOperationExpression;
	import SubstractOperationExpression = calc4.interpreter.expression.SubstractOperationExpression;
	import MultiplyOperationExpression = calc5.interpreter.expression.MultiplyOperationExpression;
	import DivideOperationExpression = calc6.interpreter.expression.DivideOperationExpression;

	export class CalcExpressionFactory {
		
		constructor() {
			
		}
		
		static createExpression(calcToken: CalcToken) {
			let expression = null;
	
			if (calcToken != null) {
				if (calcToken.getType() === CalcToken.NUMBER) {
					expression = new NumberExpression(parseInt(calcToken.getToken(), 10));
				} 			
				else if (calcToken.getType() === CalcToken.FUNCTION) {
					if (calcToken.getToken() === "SQRT") {
						expression = new SqrtDecoratorExpression();
					} 
					else if (calcToken.getToken() === "FRAC") {
						expression = new FracDecoratorExpression();
					} 
					else if (calcToken.getToken() === "POW") {
						expression = new PowDecoratorExpression();
					} 
					else if (calcToken.getToken() === "ADD") {
						expression = new AddOperationExpression();
					} 
					else if (calcToken.getToken() === "SUB") {
						expression = new SubstractOperationExpression();
					}
					else if (calcToken.getToken() === "MUL") {
						expression = new MultiplyOperationExpression();
					} 
					else if (calcToken.getToken() === "DIV") {
						expression = new DivideOperationExpression();
					}
				}
			}
	
			return expression;
		}
		
	}

}
