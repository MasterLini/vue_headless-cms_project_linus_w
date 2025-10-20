export class engine {
    constructor(private horsepower: number, private type: string) {
        this.checkHP(horsepower)
        this.type = type
    }

    private checkHP(hp: number) {
        if (hp > 20 && hp < 2000) {
            this.horsepower = hp
        } else {
            this.horsepower = 0
        }
    }

    public getHP() {
        return this.horsepower
    }
}