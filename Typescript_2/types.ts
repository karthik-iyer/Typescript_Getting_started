//Boolean
let isthisVideo: boolean = false;

//Numbers
let myNumber: number = 4;

//Text , string
let myName: string = "KIyer";

//Template Strings
let greeting: string = "Hello" + myName;
let greeting2: string = `Hello , ${myName}`;

//Arrays
let count: Array<number> = [1, 2, 3, 4];

//Anything... Dont use this for type checking..

let anything: any = 4;
anything = "text";
anything = false;

//Return Nothing
function greeter(name: string): void {
    console.log("Hello , " + name);
}

//Enums
let joySticksstatus = 1;
enum Directions { Up, Down, Left, Right }

if (joySticksstatus == Directions.Left) {
    console.log("Left");
}