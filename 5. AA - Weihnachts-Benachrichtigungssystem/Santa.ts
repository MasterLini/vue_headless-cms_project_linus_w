import { notify } from "./main";

export class Santa {
    private observers: any[] = [];

    addToSantasList(person: any) {
        this.observers.push(person);
    }

    notifyInterested() {
        this.observers.forEach(person => {
            if (person.interrested) {
                person.notify();
            }
        });
    }
}