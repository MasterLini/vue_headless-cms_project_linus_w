export class Rectangle {
    constructor(x, y, length, height, route, speed, color) {
        this.x = x;
        this.y = y;
        this.length = length;
        this.height = height;
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
        ctx.fillRect(this.x, this.y, this.length, this.height);
    }
}
