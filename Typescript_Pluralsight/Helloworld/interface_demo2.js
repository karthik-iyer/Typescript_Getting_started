"use strict";
class Engine1 {
    constructor(horsePower, engineType) {
        this.horsePower = horsePower;
        this.engineType = engineType;
    }
    start(callback) {
        window.setTimeout(() => {
            callback(true, this.engineType);
        }, 1000);
    }
    stop(callback) {
        window.setTimeout(() => {
            callback(true, this.engineType);
        }, 1000);
    }
}
class CustomEngine {
    constructor(horsePower, engineType) {
        this.horsePower = horsePower;
        this.engineType = engineType;
    }
    start(callback) {
        window.setTimeout(() => {
            callback(true, 'Custom Engine');
        }, 1000);
    }
    stop(callback) {
        window.setTimeout(() => {
            callback(true, 'Custom Engine');
        }, 1000);
    }
}
class Accessory {
    constructor(accessoryNumber, title) {
        this.accessoryNumber = accessoryNumber;
        this.title = title;
    }
}
class Auto {
    /* constructor(data: IAutoOptions,basePrice : number, engine: IEngine, make: string, model: string,state: string, year: number){
         this.engine = engine;
         this._basePrice = basePrice;
         this.state = state;
         this.make = make;
         this.model =model;
         this.year = year;
     }*/
    constructor(basePrice, engine, make, model, state, year) {
        this.engine = engine;
        this._basePrice = basePrice;
        this.state = state;
        this.make = make;
        this.model = model;
        this.year = year;
    }
    calculateTotal() {
        return this.basePrice + 0.8 * this.basePrice;
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
window.onload = function () {
    var auto = new Auto(40000, new Engine1(2000, 'v8'), 'Jeep', 'Cherokee', 'Tx', 2011);
    var myEngine = auto.engine;
    console.log("myEngine Horsepower is " + myEngine.horsePower.toString());
};
