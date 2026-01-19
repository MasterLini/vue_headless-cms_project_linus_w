export interface GameInterface {
    update(deltaTime: number): void;
    render(ctx: CanvasRenderingContext2D): void;
}