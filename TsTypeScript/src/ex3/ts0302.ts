class Espresso {

    private _name = "Espresso";

    constructor() {
        
    }
    
    //Change_Start
    get name(): string {
        return this._name;
    }
    //Change_End
    
    //Change_Start
    set name(name: string) {
        this._name = name;
    }
    //Change_End
    
}
