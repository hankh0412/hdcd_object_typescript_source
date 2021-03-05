import {CALC as calc} from "./calculator_facade";
	
let calculator: calc.facade.CalculatorFacade = new calc.facade.CalculatorFacade();

let expressions: string[] = [ "100+20", "100-20", "100*20", "100/20" ];

for (let expression of expressions) {
	calculator.calculate(expression);
}
