import { GameInterface } from "./Actor.js";

export class Rectangle implements GameInterface {
    constructor (private x:number, private y: number, private length:number, private height: number, private route:number, private speed:number, private color:string) {}
   
    update(deltaTime: number): void {
        if (this.route >= 0) {
            this.x += deltaTime * this.speed
        } else {
            this.x -= deltaTime * this.speed
        }
    }

    render(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.length, this.height);
    }
}