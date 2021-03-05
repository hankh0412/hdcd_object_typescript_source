import {CALC as calc} from "./calculator";
import {CALC as calc2} from "./expression/number_expression";
import {CALC as calc3} from "./expression/variable_expression";
import {CALC as calc4} from "./expression/add_operation_expression";
	
let calculator = new calc.visitor.Calculator();

let firstNumber = 100;		
let firstNumberEquation = new calc2.visitor.expression.NumberExpression(firstNumber);

let secondNumberEquation = new calc3.visitor.expression.VariableExpression("ABC");

let addOperationExpression = new calc4.visitor.expression.AddOperationExpression();
addOperationExpression.addOperandExpression(firstNumberEquation);
addOperationExpression.addOperandExpression(secondNumberEquation);

calculator.setExpression(addOperationExpression);

let variableName = "ABC";
let value = 80;

console.log("ABC = " + value);

calculator.addVariableToValue(variableName, value);
		
console.log("100 + ABC = " + calculator.calculate());
