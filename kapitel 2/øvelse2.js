function setup() {
    createCanvas(800, 600);
    background("white");
}

function draw() {
    if (mouseIsPressed) {
        if (mouseButton === LEFT) {
            fill(255, 0, 0);
            circle(mouseX, mouseY, 20);
        }

        if (mouseButton === RIGHT) {
            fill(0, 255, 0);
            square(mouseX, mouseY, 20);
        }
    }
}