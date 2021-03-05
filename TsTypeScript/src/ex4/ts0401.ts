//Change_Start
abstract class AbstractCoffee {
//Change_End

    protected name = "Coffee";

    constructor() {
        
    }
    
    getName(): string {
        return this.name;
    }
    
    setName(name: string): void {
        this.name = name;
    }
    
    //Change_Start
    abstract display(): void;
    //Change_End
}
