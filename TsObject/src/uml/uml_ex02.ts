namespace uml_ex02 {

	interface ICoffee {
		
		getName(): string;
		
		setName(name: string): void;
		
		display(): void;
	}

	//Change_Start
	class Espresso implements ICoffee {

		public name = "Espresso";

		constructor() {
	
		}
		
		getName(): string {
			return this.name;
		}
		
		setName(name: string): void {
			this.name = name;
		}
		
		display(): void {
			console.log(this.name);
		}
	}
	//Change_End

	let espresso = new Espresso();

	console.log(espresso.name);

	console.log(espresso.getName());

	espresso.display();

}
