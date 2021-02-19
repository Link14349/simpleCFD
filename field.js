class Field {
    constructor(width, height, val, step = 0.1) {
        this.step = step;
        this.field = [];
        for (let y = height; y >= 0; y-= step) {
            let arr = [];
            for (let x = 0; x <= width; x += step)
                arr.push(val(x, y));
            this.field.push(arr);
        }
    }
    idx(x) {
        return Math.floor(x / this.step);
    }

}
