namespace uml_ex03 {

	class Espresso {

		private name = "Espresso";

		constructor() {
			
		}
		
		display() {
			console.log(this.name);
		}
	}
	
	class Barista {
		//Change_Start
		private espressoMachine: EspressoMachine;
		//Change_End

		constructor() {
			
		}
		
		setEspressoMachine(espressoMachine: EspressoMachine) {
			this.espressoMachine = espressoMachine;
		}
		
		makeEspresso() {
			let espresso = this.espressoMachine.makeEspresso();
			
			return espresso;
		}
	}
	
	class EspressoMachine {

		private price = 300000;

		constructor() {
			
		}
		
		makeEspresso() {
			return new Espresso();
		}
	}
	
	let barista = new Barista();
	
	let espressoMachine = new EspressoMachine();
	
	barista.setEspressoMachine(espressoMachine);
	
	let espresso = barista.makeEspresso();
	
	espresso.display();

}
