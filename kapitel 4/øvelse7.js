function setup() {
  createCanvas(800, 800);
}

function draw() {
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      fill((i + j) % 2 ? "black" : "white");
      rect(100 + i * 100, 100 + j * 100, 100, 100);
    }
  }
}
