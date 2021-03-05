class Coffee {

    //Change_Start
    public name = "Coffee";
    //Change_End

    //Change_Start
    constructor() {
        
    }
    //Change_End
    
    //Change_Start
    getName(): string {
        return this.name;
    }
    
    setName(name: string): void {
        this.name = name;
    }
    
    display() {
        console.log(this.name);
    }
    //Change_End
}
