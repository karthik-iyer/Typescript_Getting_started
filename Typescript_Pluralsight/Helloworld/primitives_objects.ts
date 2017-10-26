module Objects{

var square = {h: 10, w: 20};

var points: Object= {x: 10, y: 20};
var points1 = {x: 10, y: 20};
//Functions

var multiply = function(x: number){
    return x * x;
};

var multiplyMore: Function;

multiplyMore = function(x: number){
    return x * x;
}

var x = points1.x;

var points2 = {};

points2 = {x: 10, y: 20};

var points3: Object = {x: 1};

var rectangle ={
    h: 10, 
    w: 20,
    calcArea: function(){
        return this.h * this.w;
    }
};

console.log('rect Area ' + rectangle.calcArea());
//optional parameter
var squareIt = function(rect: {h: number; w?: number}){
 if(rect.w === undefined)
 {
  return  rect.h * rect.h;
 }
 return rect.h * rect.w;
}

var sq1: number = squareIt({h: 10});
console.log('rectangle h and w of 10 = ' + sq1);
var sq2: number = squareIt({h: 10, w:40});
console.log('rectangle h and w of 10 and 40 = ' + sq2);

//Arrow function

var myFunc = (h: number, w: number) => h * w ;

sq1 = myFunc(10,30);

console.log('Arrow function sq1 : ' + sq1);

var helloWorld: (name?: string) => void;

helloWorld = (name?: string) => {
    console.log('Hello ' + (name || 'unknown person'));
}

helloWorld();
helloWorld('John');

var squareId :
 (rect: {h: number; w?: number}) => number;

 squareIt = function(rect){
     if(rect.w !== undefined){
         return rect.h * rect.w;
     }
     return rect.h * rect.h;
 }

 console.log(squareIt({h: 7}));

 console.log(squareIt({h:7, w:12}));

}