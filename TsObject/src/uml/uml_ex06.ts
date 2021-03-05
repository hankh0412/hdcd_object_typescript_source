namespace uml_ex06 {

	class CoffeeBeans {

		private countryOfOrigin = "Colombia";

		constructor() {
			
		}
		
		toString() {
			return "CoffeeBeans [" + this.countryOfOrigin + "]";
		}
	}
	
	class Espresso {

		private name = "Espresso";

		constructor() {
			
		}
		
		toString() {
			return "Espresso";
		}
	}
	
	class Milk {

		private name = "Milk";

		constructor() {
			
		}
		
		toString() {
			return "Milk";
		}
	}
	
	class CafeLatte {

		private name = "CafeLatte";
			
		private espresso: Espresso;
		private milk: Milk;

		constructor() {
			
		}
		
		setEspresso(espresso: Espresso) {
			this.espresso = espresso;
		}
		
		setMilk(milk: Milk) {
			this.milk = milk;
		}
		
		display() {
			console.log(this.name + " (" + this.espresso + " + " + this.milk + ")");
		}
	}
	
	class Barista {

		private espressoMachine: EspressoMachine;

		constructor() {
			
		}
		
		setEspressoMachine(espressoMachine: EspressoMachine) {
			this.espressoMachine = espressoMachine;
		}
		
		//Change_Start
		makeEspresso() {
			let coffeeBeans = new CoffeeBeans();
			
			let espresso = this.espressoMachine.makeEspresso(coffeeBeans);
			
			return espresso;
		}
		//Change_End
		
		//Change_Start
		makeCafeLatte() {
			let coffeeBeans = new CoffeeBeans();
			
			let espresso = this.espressoMachine.makeEspresso(coffeeBeans);
			let milk = new Milk();
			
			let cafeLatte = new CafeLatte();
			
			cafeLatte.setEspresso(espresso);
			cafeLatte.setMilk(milk);
			
			return cafeLatte;
		}
		//Change_End
	}
	
	class EspressoMachine {

		private price = 300000;

		constructor() {
			
		}
		
		//Change_Start
		makeEspresso(coffeeBeans: CoffeeBeans) {
			console.log("" + coffeeBeans);
			
			return new Espresso();
		}
		//Change_End
	}

	let barista = new Barista();
	
	let espressoMachine = new EspressoMachine();
	
	barista.setEspressoMachine(espressoMachine);
	
	let cafeLatte = barista.makeCafeLatte();
	
	cafeLatte.display();

}
