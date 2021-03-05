import {CALC as calc} from "./operation_originator";

let operationOriginator = new calc.memento.OperationOriginator();
	
operationOriginator.setFirstNumber(100);
operationOriginator.setSecondNumber(10);

operationOriginator.printOperations();

console.log("create Memento");

let operationMemento = operationOriginator.createMemento();

operationOriginator.setFirstNumber(60);
operationOriginator.setSecondNumber(30);

operationOriginator.printOperations();

console.log("restore Memento");

operationOriginator.setMemento(operationMemento);

operationOriginator.printOperations();
