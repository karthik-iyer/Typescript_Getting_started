
interface IEngine{
    start(callback: (startStatus: boolean, engineType: string) => void): void;
    stop(callback: (stopStatus: boolean, engineType: string)=> void): void;
}

interface IAutoOptions{
    engine: IEngine;
    basePrice: number;
    state: string;
    make?: string;
    model?: string;
    year?: number;
}

interface ITruckOptions extends IAutoOptions{
    bedLength?: string;
    fourByFour: boolean;
}

class ModifiedAuto {
    private _engine :IEngine;
    private _basePrice: number;
    state: string;
    make: string;
    model: string;
    year: number;
    accessoryList: string;

   /* constructor(data: IAutoOptions,basePrice : number, engine: IEngine, make: string, model: string,state: string, year: number){
        this.engine = engine;
        this._basePrice = basePrice;
        this.state = state;
        this.make = make;
        this.model =model;
        this.year = year;
    }*/

    constructor(options: IAutoOptions){
        this.engine = options.engine;
        this._basePrice = options.basePrice;
        this.state = options.state;
        this.make = options.make;
        this.model = options.model;
        this.year = options.year;
    }

    calculateTotal() :number {
        return this.basePrice + 0.08 * this.basePrice;
    }

    get basePrice(): number{
        return this._basePrice;
    }

    set basePrice(value : number){
        if (value <= 0) throw 'price must be greater than 0';
        this._basePrice = value;
    } 

    get engine(): IEngine{
        return this._engine;
    }

    set engine(value :IEngine){
        if(value == undefined) throw 'Please supply an engine';
        this._engine = value;
    }
}

class Truck extends ModifiedAuto {
    bedLength?: string;
    fourByFour: boolean;

    constructor(options: ITruckOptions){
        super(options);
        this.bedLength = options.bedLength;
        this.fourByFour = options.fourByFour;
    }

}

window.onload = function(){

    var truck = new Truck({
        engine: new Engine1(250,'v6'),
        basePrice: 45000,
        state: 'Texas',
        make: 'Ford',
        model: 'F-150',
        year: 2013,
        bedLength: 'Short Bed',
        fourByFour: true
    })
    console.log("Total Price: " + truck.calculateTotal());
    
}