module interfaces_demo
{
    interface sqr_interface{
        (num :number ) : number;
    }
    var num = 22;
    var sqrbasic: sqr_interface = (num) => num * num;

interface Rectangle {
    h: number;
    w?: number;
}

var squareId: (rect: Rectangle) => number;

var squareIt = function(rect){
    if(rect.w !== undefined){
        return rect.h * rect.w;
    }
    return rect.h * rect.h;
}
console.log(squareIt({h: 7}));
console.log(squareIt({h:7, w:12}));
console.log(sqrbasic(num));


interface Person
{
    name :string;
    age? :number;
    kids : number;
    calcPets: () => number;
    makeYounger: (years: number) => void;
    greet: (msg: string) => string;
}

var p: Person = { 
    name : "John",
    age: 40,
    kids :2,
    calcPets : function(){
        return this.kids * 2;
    },
    makeYounger: function(years :number){
        this.age  -=   years;
    },
greet: function(msg: string){
    return msg + ', ' + this.name;
}
};

console.log("name : " + p.name);
p.makeYounger(4);
console.log("age : " + p.age);
console.log("children: " + p.kids);
console.log("Pets : " + p.calcPets());
console.log(p.greet("Hello "));



}
