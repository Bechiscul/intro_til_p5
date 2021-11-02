let x;
let y;
let xspeed;
let yspeed;

function setup() {
    createCanvas(400, 400);
    x = width/2
    y = height/2
    xspeed = -1;
    yspeed = 0.5*xspeed;
}

function draw() {
    background(220);
    ellipse(x, y, 50, 50);

    if (x - 25 >= 400 || x - 25 <= 0) {
        xspeed = -xspeed
    }

    if (y - 25 >= 400 || y - 25 <= 0) {
        yspeed = -yspeed;
    }

    x+=xspeed;
    y+=yspeed;
}