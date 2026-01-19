export class Circle {
    constructor(x, y, radius, route, speed, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.route = route;
        this.speed = speed;
        this.color = color;
    }
    update(deltaTime) {
        if (this.route >= 0) {
            this.x += deltaTime * this.speed;
        }
        else {
            this.x -= deltaTime * this.speed;
        }
    }
    render(ctx) {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.fill();
    }
}
