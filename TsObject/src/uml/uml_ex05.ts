namespace uml_ex05 {

	class Espresso {

		private name = "Espresso";

		constructor() {
			
		}
		
		toString(): string {
			return "Espresso";
		}
	}

	class Milk {

		private name = "Milk";

		constructor() {
			
		}
		
		toString(): string {
			return "Milk";
		}
	}

	class CafeLatte {

		private name = "CafeLatte";
			
		//Change_Start
		private espresso = new Espresso();
		private milk = new Milk();
		//Change_End

		constructor() {
			
		}
		
		display(): void {
			console.log(this.name + " (" + this.espresso + " + " + this.milk + ")");
		}
	}

	let cafeLatte = new CafeLatte();
	
	cafeLatte.display();

}
