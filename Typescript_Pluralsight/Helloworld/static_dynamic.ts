/// <reference path="typings/jquery.d.ts" />
module demo_dynamic{

declare var $;
var data = "Hello John";
$("div").text(data);

var person: string;

person = 'John Papa';

console.log(person.substring(1,4));

var person2 = {
 name: 'Colleen',
 age: 25
}

console.log(person.substring(1,4));

}

