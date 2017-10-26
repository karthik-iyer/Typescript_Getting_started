/// <reference path="typings/knockout-2.2.d.ts"/>
declare var ko: KnockoutStatic;
module ambientdec{
var name = ko.observable('John Papa') ;

var id = ko.observable(1);
var guy={
    id: id,
    fullname: name
};

var value: string = guy.fullname();
console.log(value);

}