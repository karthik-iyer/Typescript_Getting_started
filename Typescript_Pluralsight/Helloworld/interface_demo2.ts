interface IEngine{
    start(callback: (startStatus: boolean, engineType: string) => void): void;
    stop(callback: (stopStatus: boolean, engineType: string)=> void): void;
}

class Engine1 implements IEngine{

    constructor(public horsePower: number,public engineType: string){

    }
    start(callback: (startStatus: boolean, engineType: string) => void): void {
        window.setTimeout(() =>{
            callback(true,this.engineType);
        },1000);
    
    }
    stop(callback: (stopStatus: boolean, engineType: string) => void): void {
        window.setTimeout(() =>{
            callback(true,this.engineType);
        },1000);
    }

    
}

class CustomEngine implements IEngine{
    
        constructor(public horsePower: number,public engineType: string){
    
        }
        start(callback: (startStatus: boolean, engineType: string) => void): void {
            window.setTimeout(() =>{
                callback(true,'Custom Engine');
            },1000);
        
        }
        stop(callback: (stopStatus: boolean, engineType: string) => void): void {
            window.setTimeout(() =>{
                callback(true,'Custom Engine');
            },1000);
        }
    
        
    }
class Accessory{
constructor(public accessoryNumber: number,public title: string){}
}

class Auto {
    private _engine :IEngine;
    private _basePrice: number;
    state: string;
    make: string;
    model: string;
    year: number;
    accessoryList: string;

   /* constructor(data: IAutoOptions,basePrice : number, engine: IEngine, make: string, model: string,state: string, year: number){
        this.engine = engine;
        this._basePrice = basePrice;
        this.state = state;
        this.make = make;
        this.model =model;
        this.year = year;
    }*/

    constructor(basePrice : number, engine: IEngine, make: string, model: string,state: string, year: number){
        this.engine = engine;
        this._basePrice = basePrice;
        this.state = state;
        this.make = make;
        this.model =model;
        this.year = year;
    }

    calculateTotal() :number {
        return this.basePrice + 0.8 * this.basePrice;
    }

    get basePrice(): number{
        return this._basePrice;
    }

    set basePrice(value : number){
        if (value <= 0) throw 'price must be greater than 0';
        this._basePrice = value;
    } 

    get engine(): IEngine{
        return this._engine;
    }

    set engine(value :IEngine){
        if(value == undefined) throw 'Please supply an engine';
        this._engine = value;
    }
}

window.onload = function(){
var auto = new Auto(40000,new Engine1(2000,'v8'),'Jeep','Cherokee','Tx',2011);
var myEngine =<Engine1>auto.engine;
console.log("myEngine Horsepower is " + myEngine.horsePower.toString());

}
