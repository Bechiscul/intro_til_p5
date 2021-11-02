function setup() {
  createCanvas(600, 400);
  background("white");
}

let balls = [
  { x: 0, y: 10, direction: 0 },
  { x: 10, y: 10, direction: 0 },
  { x: 20, y: 10, direction: 0 },
  { x: 30, y: 10, direction: 0 },
  { x: 40, y: 10, direction: 0 },
  { x: 50, y: 10, direction: 0 },
  { x: 60, y: 10, direction: 0 },
  { x: 70, y: 10, direction: 0 },
  { x: 80, y: 10, direction: 0 },
  { x: 90, y: 10, direction: 0 },
  { x: 100, y: 10, direction: 0 },
];

function draw() {
  background("white");

  balls.map((ball) => {
    circle(ball.x + 5, ball.y, 10);

    switch (ball.direction) {
      case 0:
        ball.x += 10;
        break;
      case 1:
        ball.y += 10;
        break;
      case 2:
        ball.y -= 10;
        break;
      case 4:
        ball.x -= 10;
        break;
    }

    if (ball.x >= width - 10 && ball.y == 10) {
      ball.direction = 1;
    } else if (
      ball.x >= width - 10 &&
      ball.y >= (height - 10) / 2 &&
      ball.y <= height - 10
    ) {
      ball.direction = 4;
    } else if (
      ball.x <= 10 &&
      ball.y >= (height - 10) / 2 &&
      ball.y <= height - 10
    ) {
      ball.direction = 1;
    } else if (ball.x <= 10 && ball.y >= height - 10) {
      ball.direction = 0;
    }
  });
}
