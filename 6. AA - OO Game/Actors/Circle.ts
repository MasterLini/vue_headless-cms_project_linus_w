import { GameInterface } from "./Actor.js";

export class Circle implements GameInterface {
    constructor(private x: number, private y: number, private radius: number, private route: number, private speed: number, private color: string) {}

    update(deltaTime: number): void {
        if (this.route >= 0) {
            this.x += deltaTime * this.speed;
        } else {
            this.x -= deltaTime * this.speed;
        }
    }

    render(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.fill();
    }
}