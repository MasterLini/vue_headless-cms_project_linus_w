import { notify } from "./main"

export class God implements notify {
    constructor(private name: string, private description: string, private interrested: boolean) {
        this.name = name
        this.description = description
        this.interrested = interrested
    }

    notify() {
        console.log(`Hallo ${this.name}! Du wurdest von Santa eingeladen!`);
    }
}
