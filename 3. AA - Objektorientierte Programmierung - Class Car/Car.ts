import { engine } from "./Engine.ts"

export class car {
 private brand: string; 
 private color: string;
 private kmstand: number;
 private engine: engine;


 constructor(brand: string, color: string, kmstand: number, engine: engine) {
    this.brand = brand; 
    this.color = color; 
    this.kmstand = this.checkKMStand(kmstand)
    this.engine = engine;
 }


private checkKMStand(stand: number):number {
    if (stand > 9000000) {
      return 200000;  
    } else {
        return stand
    }
}

public updatebrand(newbrand: string):void {
    this.brand = newbrand;
}

public changeColor(newColor: string):void {
    this.color = newColor;
}

public addKM(km: number):void {
    this.kmstand = this.kmstand + km;
}

public setKM(km: number):void {
    this.kmstand = km;
}

public reduceKM(km: number):void {
    if ((this.kmstand - km) < 0 ) {
        this.kmstand = 0;
    }  else {
        this.kmstand = this.kmstand - km;
    }
}

public getEngine() {
    return this.engine
}

public getKM() {
    return this.kmstand;
}

public getColor() {
    return this.color;
}

public getbrand() {
    return this.brand;
}
}