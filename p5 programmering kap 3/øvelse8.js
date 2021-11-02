let mouse1 = {x: 0, xSpeed: 5, y: 0, ySpeed: 5, size: 25}
let mouse2 = {x: 0, xSpeed: 10, y: 0, ySpeed: 10, size: 25};

function setup() {
    createCanvas(600, 400);
    background("white");

    mouse1.x = random(width - mouse1.size);
    mouse1.y = random(height - mouse1.size);
    mouse2.x = random(width - mouse2.size);
    mouse2.y = random(height - mouse2.size);
}

function draw() {
    background("white");

    if (keyIsPressed) {
        switch(key) {
            case 'w':
                mouse2.y -= mouse2.ySpeed;
                break;
            case 'a':
                mouse2.x -= mouse2.xSpeed;
                break;
            case 's':
                mouse2.y += mouse2.ySpeed;
                break;

            case 'd':
                mouse2.x += mouse2.xSpeed;
                break;
        }
    }

    fill("red");
    circle(mouse1.x, mouse1.y, mouse1.size);
    rect(mouse2.x - mouse2.size / 2, mouse2.y - mouse2.size / 2, mouse2.size)
}