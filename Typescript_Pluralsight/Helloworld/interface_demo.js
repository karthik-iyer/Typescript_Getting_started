"use strict";
var interfaces_demo;
(function (interfaces_demo) {
    var num = 22;
    var sqrbasic = (num) => num * num;
    var squareId;
    var squareIt = function (rect) {
        if (rect.w !== undefined) {
            return rect.h * rect.w;
        }
        return rect.h * rect.h;
    };
    console.log(squareIt({ h: 7 }));
    console.log(squareIt({ h: 7, w: 12 }));
    console.log(sqrbasic(num));
    var p = {
        name: "John",
        age: 40,
        kids: 2,
        calcPets: function () {
            return this.kids * 2;
        },
        makeYounger: function (years) {
            this.age -= years;
        },
        greet: function (msg) {
            return msg + ', ' + this.name;
        }
    };
    console.log("name : " + p.name);
    p.makeYounger(4);
    console.log("age : " + p.age);
    console.log("children: " + p.kids);
    console.log("Pets : " + p.calcPets());
    console.log(p.greet("Hello "));
})(interfaces_demo || (interfaces_demo = {}));
