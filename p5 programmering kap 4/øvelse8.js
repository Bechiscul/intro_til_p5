function setup() {
  createCanvas(600, 400);
  background("white");
  line(0, height / 2, width, height / 2);
  for (let i = 0; i < 10; i++) {
    fill("red");
    const w = random(0, 60);
    rect(width / i, (height - 20) / 2, w, 20);
  }
}
