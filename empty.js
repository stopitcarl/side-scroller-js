var box2;

var groundBlocks;

function setup() {
    groundBlocks = new Group();

    for (i = 0; i < maps[mapNum].length; i++) {
        for (j = 0; j < maps[mapNum][i].length; j++) {
            if (maps[mapNum][i][j] === 1) {
                var block = createSprite(j * 20 + 1, i * 20 + 1, 20, 20)
                groundBlocks.add(block);

            }
            if (maps[mapNum][i][j] === 3) {
                x = j * 20 - 1;
                y = i * 20 + 1;
            }
        }

    }

    createCanvas(800, 400);
    box = createSprite(200, 200, 25, 25);
    //box2 = createSprite(0, 300, 100000, 50);
    box.isJumping = false;

}

function draw() {
    if (box.touching.left) {
        box.isJumping = false;
    }
    if (keyDown(87)) {
        box.isJumping = true;
        setTimeout(function() {
            box.isJumping = false
        }, 300)
    }
    if (box.isJumping) {
        box.position.y -= 10;
    }
    box.position.y += 5;
    if (keyDown(65)) {
        box.position.x -= 3;
    }
    if (keyDown(68)) {
        box.position.x += 3;
    }
    background(255, 255, 255);
    //box.collide(box2);
    box.collide(groundBlocks);
    drawSprites();
    console.log(box.touching.left)
}
