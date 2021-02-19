class CFD {
    constructor(width, height, step) {
        this.V = new Field(width, height, () => { return new Vec2(0, 0); }, step);
    }
}
