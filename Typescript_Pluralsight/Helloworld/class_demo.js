"use strict";
class Carvana {
    constructor(engine) {
        this._engine = engine;
    }
    get engine() {
        return this._engine;
    }
    set engine(value) {
        if (value != undefined) {
            this._engine = value;
        }
    }
}
class Motor {
    constructor(engine) {
        this._engine = engine;
    }
    start() {
        alert("Hi . Engine type is " + this._engine.engineType);
    }
}
class Engine {
    constructor(horsepower, engineType) {
        this.horsepower = horsepower;
        this.engineType = engineType;
    }
}
var eng = new Engine(500, "v8");
var motor = new Motor(eng);
motor.start();
var table = document.createElement('table');
console.log("Table ID" + table.id);
