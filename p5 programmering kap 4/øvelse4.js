

function setup() {
    createCanvas(600, 400);
}

xpos = 0;
xspeed = 5;

ypos = 0;
yspeed = 10;

function draw() {
    background("white");
    fill("red");

    for(let i = 0; i < 10; i++) {
        rect(xpos + 20 * i, 0, 1, height);
    }

    for(let i = 0; i < 10; i++) {
        rect(0, ypos + 20 * i, width, 1);
    }

    xpos += xspeed;
    ypos += yspeed;
}