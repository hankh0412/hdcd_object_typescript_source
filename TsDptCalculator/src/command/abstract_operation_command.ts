import {CALC as calc} from "./operation_command_receiver";

export namespace CALC.command {

	import OperationCommandReceiver = calc.command.OperationCommandReceiver;

	export abstract class AbstractOperationCommand {

		protected receiver: OperationCommandReceiver;
		protected value: number;
		
		constructor(receiver: OperationCommandReceiver, value: number) {
			this.receiver = receiver;
			this.value = value;
		}
		
		abstract execute(): void;
		
	}

}
