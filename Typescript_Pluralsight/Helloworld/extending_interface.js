"use strict";
class ModifiedAuto {
    /* constructor(data: IAutoOptions,basePrice : number, engine: IEngine, make: string, model: string,state: string, year: number){
         this.engine = engine;
         this._basePrice = basePrice;
         this.state = state;
         this.make = make;
         this.model =model;
         this.year = year;
     }*/
    constructor(options) {
        this.engine = options.engine;
        this._basePrice = options.basePrice;
        this.state = options.state;
        this.make = options.make;
        this.model = options.model;
        this.year = options.year;
    }
    calculateTotal() {
        return this.basePrice + 0.08 * this.basePrice;
    }
    get basePrice() {
        return this._basePrice;
    }
    set basePrice(value) {
        if (value <= 0)
            throw 'price must be greater than 0';
        this._basePrice = value;
    }
    get engine() {
        return this._engine;
    }
    set engine(value) {
        if (value == undefined)
            throw 'Please supply an engine';
        this._engine = value;
    }
}
class Truck extends ModifiedAuto {
    constructor(options) {
        super(options);
        this.bedLength = options.bedLength;
        this.fourByFour = options.fourByFour;
    }
}
window.onload = function () {
    var truck = new Truck({
        engine: new Engine1(250, 'v6'),
        basePrice: 45000,
        state: 'Texas',
        make: 'Ford',
        model: 'F-150',
        year: 2013,
        bedLength: 'Short Bed',
        fourByFour: true
    });
    console.log("Total Price: " + truck.calculateTotal());
};
