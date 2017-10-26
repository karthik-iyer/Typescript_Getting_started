class Carvana{
        private _engine: string;          

        constructor (engine: string){
            this._engine = engine;
        }
        
        get engine(): string{
            return this._engine;
        }

        set engine(value :string){
            if(value != undefined)
            {
                this._engine = value;
            }                
        }

        

}

class Motor{
    private _engine: Engine;

    constructor(engine: Engine){
        this._engine = engine;
    }

    start(){
        alert("Hi . Engine type is " + this._engine.engineType);
    }

}

class Engine{

    constructor(public horsepower: number,public engineType: string){

    }
}

    var eng = new Engine(500,"v8");
    var motor = new Motor(eng);
    motor.start();
    var table: HTMLTableElement = <HTMLTableElement>document.createElement('table');
    console.log("Table ID" + table.id);


    