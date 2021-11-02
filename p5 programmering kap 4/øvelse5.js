function setup() {
    createCanvas(600, 400);
    background("white");
    for (let i = 0; i < 10; i++) {
        fill(random(0, 255), random(0, 255), random(0, 255));
        circle(random(1, width), random(1, height), 5);
    }
}