import {CALC as calc} from "./client";
import {CALC as calc2} from "./print_answer";

let client = new calc.flyweight.Client();
	    
client.setupTextStyleFlyweightFactory();

let printAnswer = new calc2.flyweight.PrintAnswer();

printAnswer.setFirstNumber(10);
printAnswer.setSecondNumber(20);

printAnswer.printResult();
