function setup() {
    createCanvas(800, 600);
    background("white");
    fill(255, 0, 0);
    frameRate(500);
}

function draw() {
    circle(mouseX, mouseY, 10);
}