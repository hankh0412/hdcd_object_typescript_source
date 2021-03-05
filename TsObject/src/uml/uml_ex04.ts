namespace uml_ex04 {

	class CoffeeBeans {

		private countryOfOrigin = "Colombia";

		constructor() {
			
		}
		
		toString(): string {
			return "CoffeeBeans [" + this.countryOfOrigin + "]";
		}
	}

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
		private espresso: Espresso;
		private milk: Milk;
		//Change_End

		constructor() {
			
		}
		
		//Change_Start
		setEspresso(espresso: Espresso): void {
			this.espresso = espresso;
		}
		
		setMilk(milk: Milk): void {
			this.milk = milk;
		}
		//Change_End
		
		display(): void {
			console.log(this.name + " (" + this.espresso + " + " + this.milk + ")");
		}
	}

	class Barista {

		private espressoMachine: EspressoMachine;

		constructor() {
			
		}
		
		setEspressoMachine(espressoMachine: EspressoMachine): void {
			this.espressoMachine = espressoMachine;
		}
		
		makeEspresso(): Espresso {
			let coffeeBeans = new CoffeeBeans();
			
			let espresso = this.espressoMachine.makeEspresso(coffeeBeans);
			
			return espresso;
		}
		
		makeCafeLatte(): CafeLatte {
			let coffeeBeans = new CoffeeBeans();
			
			let espresso = this.espressoMachine.makeEspresso(coffeeBeans);
			let milk = new Milk();
			
			let cafeLatte = new CafeLatte();
			
			cafeLatte.setEspresso(espresso);
			cafeLatte.setMilk(milk);
			
			return cafeLatte;
		}
	}
	
	class EspressoMachine {

		private price = 300000;

		constructor() {
			
		}
		
		makeEspresso(coffeeBeans: CoffeeBeans): Espresso {
			console.log("" + coffeeBeans);
			
			return new Espresso();
		}
	}
	
	let barista = new Barista();
	
	let espressoMachine = new EspressoMachine();
	
	barista.setEspressoMachine(espressoMachine);
	
	let cafeLatte = barista.makeCafeLatte();
	
	cafeLatte.display();

}
