function setup() {
    createCanvas(800, 600);
    background("white");
    fill("red");
}


let show_rect=false
let show_circle=false
let show_ellipse = false;

function draw() {
    if (key === "f") {
        show_rect = true;
    }

    if (key === "c") {
        show_circle = true;
    }

    if (key === "e") {
        show_ellipse = true;
    }

    if (show_rect) rect(50, 50, 100, 100);
    if (show_circle) circle(500, 500, 100, 100);
    if (show_ellipse) ellipse(400, 200, 50, 100);
}