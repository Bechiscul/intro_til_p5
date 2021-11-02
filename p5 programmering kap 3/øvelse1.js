function setup() {
    createCanvas(600, 400);
    fill("red");
}

function draw() {
    background("white");
    
    if (mouseX > width / 2) {
        rect((width - 25) / 2, (height - 25) / 2, 25, 25);

    } else {
        circle(width / 2, height / 2, 25);
    }
}