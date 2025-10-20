export class car {
 private motor: string; 
 private color: string;
 private kmstand: number;


 constructor(motor: string, color: string, kmstand: number) {
    this.motor = motor; 
    this.color = color; 
    this.kmstand = this.checkKMStand(kmstand)
 }


private checkKMStand(stand: number) {
    if (stand > 9000000) {
      return 200000;  
    } else {
        return stand
    }
}

public updateMotor(newMotor: string) {
    this.motor = newMotor;
}

public changeColor(newColor: string) {
    this.color = newColor;
}

public addKM(km: number) {
    this.kmstand = this.kmstand + km;
}

public setKM(km: number) {
    this.kmstand = km;
}

public reduceKM(km: number) {
    if ((this.kmstand - km) < 0 ) {
        this.kmstand = 0;
    }  else {
        this.kmstand = this.kmstand - km;
    }
}

public getKM() {
    return this.kmstand;
}

public getColor() {
    return this.color;
}

public getMotor() {
    return this.motor;
}
}