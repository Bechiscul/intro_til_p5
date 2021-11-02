
const colors = ["red", "green", "blue", "yellow", "darkgray", "lightblue", "pink", "orange", "violet", "black"];

function setup() {
    createCanvas(600, 400);
    background("white");
    colors.map((color) => {fill(color); rect(random(1, width), random(1, height), random(1, width), random(1, height))});
}

function draw() {

}