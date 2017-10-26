"use strict";
class Car {
    constructor(engine) {
        this.engine = engine;
    }
    start() {
        console.log(" Engine started : " + this.engine);
    }
    stop() {
        console.log(" Engine stopped : " + this.engine);
        var sad = 10 + 20;
    }
}
window.onload = function () {
    var car = new Car("V8");
    car.start();
    car.stop();
    var person;
    person = 'John Papa';
    console.log(person.substring(1, 4));
    person = 1;
    //person.substring(1,4);
    //declare var document;
    //document.title = "Hello";
};
