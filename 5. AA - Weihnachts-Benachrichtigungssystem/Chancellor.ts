import { notify } from "./main"

export class country {
    constructor(private countryName: string, private interrested: boolean) {
        this.countryName = countryName
        this.interrested = interrested
    }
}

export class Chancellor extends country implements notify {
    constructor(countryName: string, interrested: boolean, private name: string, private age: number) {
        super(countryName, interrested)
        this.name = name
        this.age = age
    }

    notify() {
        console.log(`Hallo ${this.name}! Du wurdest von Santa eingeladen!`);
    }
}
