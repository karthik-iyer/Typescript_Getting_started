"use strict";
/// <reference path="typings/jquery.d.ts" />
var demo_dynamic;
(function (demo_dynamic) {
    var data = "Hello John";
    $("div").text(data);
    var person;
    person = 'John Papa';
    console.log(person.substring(1, 4));
    var person2 = {
        name: 'Colleen',
        age: 25
    };
    console.log(person.substring(1, 4));
})(demo_dynamic || (demo_dynamic = {}));
