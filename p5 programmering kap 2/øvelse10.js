function setup() {
    createCanvas(400, 400);
    background("white");
}

let pos = 0;
let speed = 1;

function draw() {
    background("white");
    line(pos, 0, pos, height);
    line(0, pos, width, pos)

    pos += speed;

    if (pos >= width || pos >= height || pos <= 0) {
        pos = -1;
    }
}