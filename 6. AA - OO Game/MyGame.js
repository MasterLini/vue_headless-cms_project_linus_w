// MyGame - Example implementation of Game interface
import { Game, GameFramework } from "./GameFramework.js";
import { Rectangle } from "./Actors/Rectangle.js";
import { Circle } from "./Actors/Circle.js";
class MyGame extends Game {
    constructor() {
        super();
        this.actors = [];
    }
    addActor(actor) {
        this.actors.push(actor);
    }
    init() {
        console.log("Game started!");
        const r1 = new Rectangle(10, 50, 60, 40, 0, 150, "#FF0000");
        const r2 = new Rectangle(10, 110, 80, 40, 0, 120, "#00FF00");
        const r3 = new Rectangle(600, 170, 40, 40, -1, 200, "#0000FF");
        const r4 = new Rectangle(10, 230, 100, 40, 0, 80, "#FFFF00");
        const r5 = new Rectangle(10, 290, 60, 60, 0, 110, "#FF00FF");
        const r6 = new Rectangle(10, 350, 70, 30, 0, 140, "#00FFFF");
        const r7 = new Rectangle(600, 410, 50, 50, -1, 170, "#FFA500");
        const r8 = new Rectangle(600, 470, 90, 40, -1, 95, "#808080");
        const r9 = new Rectangle(600, 530, 65, 35, -1, 130, "#A52A2A");
        const r10 = new Rectangle(10, 590, 55, 45, 0, 160, "#000000");
        this.addActor(r1);
        this.addActor(r2);
        this.addActor(r3);
        this.addActor(r4);
        this.addActor(r5);
        this.addActor(r6);
        this.addActor(r7);
        this.addActor(r8);
        this.addActor(r9);
        this.addActor(r10);
        //------
        const c1 = new Circle(50, 80, 20, 0, 100, "#FF5733");
        const c2 = new Circle(50, 140, 25, 0, 140, "#33FF57");
        const c3 = new Circle(600, 200, 15, -1, 180, "#3357FF");
        const c4 = new Circle(50, 260, 30, 0, 90, "#F333FF");
        const c5 = new Circle(50, 320, 20, 0, 115, "#FF33A1");
        const c6 = new Circle(600, 380, 12, -1, 210, "#33FFF3");
        const c7 = new Circle(600, 440, 22, -1, 130, "#F3FF33");
        const c8 = new Circle(50, 500, 18, 0, 160, "#FF8633");
        const c9 = new Circle(600, 560, 28, -1, 105, "#8633FF");
        const c10 = new Circle(50, 620, 10, 0, 250, "#33FF86");
        this.addActor(c1);
        this.addActor(c2);
        this.addActor(c3);
        this.addActor(c4);
        this.addActor(c5);
        this.addActor(c6);
        this.addActor(c7);
        this.addActor(c8);
        this.addActor(c9);
        this.addActor(c10);
    }
    update(deltaTime) {
        console.log("Inside update", deltaTime);
        for (const actor of this.actors) {
            actor.update(deltaTime);
        }
    }
    render(ctx) {
        console.log("in rendeers");
        // DRY = dont repeat yourself - Funktionen und Methoden nicht immer wiederholen, sondern eine vage Lösung für alles!
        for (const actor of this.actors) {
            actor.render(ctx);
        }
    }
}
const game = new MyGame();
const framework = new GameFramework(game, 800, 600);
framework.start();
console.log("test");
