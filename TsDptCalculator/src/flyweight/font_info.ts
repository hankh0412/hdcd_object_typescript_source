export namespace CALC.flyweight {

	export class FontInfo {

		private name: string;
		private size: number;
		
		constructor(name: string, size: number) {
	        this.name = name;
	        this.size = size;
		}
		
		getName(): string {
			return this.name;
		}
		
		setName(name: string): void {
			this.name = name;
		}
		
		getSize(): number {
			return this.size;
		}
		
		setSize(size: number): void {
			this.size = size;
		}
		
		toString(): string {
		    	return "(" + this.name + "," + this.size + ")";
		}
		
	}

}
