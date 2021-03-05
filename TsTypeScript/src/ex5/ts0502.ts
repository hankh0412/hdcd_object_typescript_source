//Change_Start
class Americano implements ICoffee {
//Change_End

    private name = "Americano";

    constructor() {

    }
    
    //Change_Start
    getName(): string {
        return this.name;
    }
    
    setName(name: string): void {
        this.name = name;
    }
    
    display(): void {
        console.log(this.name);
    }
    //Change_End
}
