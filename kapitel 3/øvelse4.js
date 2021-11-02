let y;
let yspeed = 1;

function setup() {
    createCanvas(600, 400);
    y = width / 2;
}

function draw() {
    background("white");
    fill("red");

    if (y > height - 12.5 || y < 0 + 12.5) {
        yspeed = - yspeed;
    }

    y += yspeed;
    circle(width / 2, y, 25);
}