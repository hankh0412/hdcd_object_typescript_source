namespace uml_ex01 {

	class Coffee {

		public name = "Coffee";

		constructor() {
			
		}
		
		getName(): string {
			return this.name;
		}
		
		setName(name: string): void {
			this.name = name;
		}
		
		display() {
			console.log(this.name);
		}
	}

	let coffee = new Coffee();

	console.log(coffee.name);

	console.log(coffee.getName());

	coffee.display();

	//Change_Start
	class Espresso extends Coffee {
		constructor() {
			super();
		}
	}
	//Change_End

	let espresso = new Espresso();
	espresso.setName("Espresso");

	console.log(espresso.name);

	console.log(espresso.getName());

	espresso.display();

}
