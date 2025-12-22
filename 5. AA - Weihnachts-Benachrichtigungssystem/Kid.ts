import { notify } from "./main"

export class Kid implements notify {
    constructor(private name: string, private age: number, private interrested: boolean) {
        this.name = name
        this.age = age
        this.interrested = interrested
    }

    notify() {
        console.log(`Hallo ${this.name}! Du wurdest von Santa eingeladen!`);
    }
}
