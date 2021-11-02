function setup() {
    createCanvas(800, 600);
    background("white")
}

function draw() {
    if (keyIsDown(70)) {
        rect(mouseX, mouseY, 50, 50);
    }

    if (keyIsDown(67)) {
        circle(mouseX, mouseY, 50);
    }

    if (keyIsDown(69)) {
        ellipse(mouseX, mouseY, 25, 50);
    } 
}