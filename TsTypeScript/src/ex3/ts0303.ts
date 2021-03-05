class EspressoMachine {

    private price: number = 300000;

    //Change_Start
    static count: number = 0;
    //Change_End

    constructor() {
        
    }
    
    getPrice(): number {
        return this.price;
    }
    
    setPrice(price: number): void {
        this.price = price;
    }
    
    //Change_Start
    static getCount(): number {
        return EspressoMachine.count++;
    }
    //Change_End
}
