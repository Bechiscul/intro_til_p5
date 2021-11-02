function setup() {
  createCanvas(400, 400, WEBGL);
  angleMode(DEGREES);
  frameRate(60);
}

let speed = 1;
let size = 10;

function draw() {
  background(255);
  rotateY(size + speed);
  rotateX(size + speed + sin(3));
  strokeWeight(2);
  stroke(random(0, 255), random(0, 255), random(0, 255));
  for (let i = 0; i < 100; i++) {
    box(size * i);
  }
  if (size >= 250) {
    size = 1;
    speed += 1;
  } else {
    size += speed;
  }
  console.log("size:", size, "speed", speed);
  noFill();
}
