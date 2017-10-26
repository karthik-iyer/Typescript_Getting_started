"use strict";
/// <reference path="typings/knockout-2.2.d.ts"/>
var ambientdec;
(function (ambientdec) {
    var name = ko.observable('John Papa');
    var id = ko.observable(1);
    var guy = {
        id: id,
        fullname: name
    };
    var value = guy.fullname();
    console.log(value);
})(ambientdec || (ambientdec = {}));
