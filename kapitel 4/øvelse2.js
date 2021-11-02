function setup() {
    createCanvas(600, 400);
    fill("red");
}

function draw() {
    background("white");
    
    for(let i = 0; i < 15; i++) {
        for(let j = 0; j < 15; j++) {
            circle(width / 15 * i, height / 15 * j, 5 + 5 * i)
        }
    }
}