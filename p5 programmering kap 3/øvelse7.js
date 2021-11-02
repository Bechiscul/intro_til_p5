function setup() {
    createCanvas(600, 400);
}

let showA = false;
let showV = false;

function draw() {
    background("white");

    if (keyIsPressed) {
        if (key == 'a' || key == 'A') {
            showA = true;
        } else if (key == 'v' || key == 'V') {
            showV = true;
        }
    }

    if (showA) {
        text("A", 50, 50);
    }
    
    if (showV) {
        text("V", 100, 100);
    }
}