import {CALC as calc} from "./calc_context";
import {CALC as calc2} from "./expression/calc_expression_factory";

let text = "ADD(2,12)";
		
let calcContext = new calc.interpreter.CalcContext(text);

try {
	
	let result = 0;
	
	let currentToken = calcContext.getCurrentTokenAndGoToNext();
	
	let expression = calc2.interpreter.expression.CalcExpressionFactory.createExpression(currentToken);
	
	if (expression != null) {
		expression.parse(calcContext);

		result = expression.operate();
	}

	console.log(text + " = " + result);

} catch (e) {

	console.log(e);
}	
