// player
var player;
var pos;
var vel;
var acc;
var MAXJUMPS = 2;
var GRAVITY = 0.4
var JUMP = 12;
var jumps = 0;

// world
var platform;
var map;


function setup() {
    createCanvas(displayWidth * 0.6, displayHeight * 0.6);
    frameRate(40);

    // Player physics
    pos = createVector(width / 3, height / 2);
    vel = createVector(0, 0);
    vel.limit(2);
    acc = createVector(0, GRAVITY);

    // Player sprite
    var img = loadImage("assets/hero.png");
    player = createSprite(width / 2, height / 2, 20, 20);
    player.addImage(img);
    player.position = pos;
    player.restitution = 0.3;

    // Create ground
    ground = createSprite(width / 2, height - 10, width, 100)
    ground.shapeColor = color(123, 152, 13);

    // Create platforms
    var s = createSprite(width / 2, 2 * height / 3, 30, 30)
    s.shapeColor = color(180, 92, 150);
    var d = createSprite(width / 2 + 50, 2 * height / 3 - 50, 30, 30)
    d.shapeColor = color(56, 179, 200);

    map = Group();
    map.add(ground);
    map.add(s);
    map.add(d); // hello, u see dis? write here or qualquer sitio, ok fixe. se fizeres ctrl-s o que acontece? (save the file)idk n fez nada obvio
    // mas consegues tipo guardar o ficheiro? yuppp
    /* Já agora, ha outra maneira de escrever comments
    	com varias
    	linhas
		queres um walktrough bueda basico e simples do codigo até agora? yupppppp
    */


}

function draw() {

    // Update game state
    readKeys();
    update();

    // Render frame
    background(100);
    drawSprites();
}

function update() {


    // Update player's location
    vel.add(acc);
    pos.add(vel);

    vel.x = vel.x * 0.7;


    if (player.overlap(map)) {
        vel.y = 0;
        jumps = 0;
    }

    player.collide(map);
}


/* ************** Keyboard functions ************ */

function keyPressed() {
    if (keyIsDown(UP_ARROW) && jumps < MAXJUMPS) {
        vel.y = -13;
        jumps++;
    }
}

function readKeys() {
    if (keyIsDown(RIGHT_ARROW)) {
        vel.x = 8;

    } else if (keyIsDown(LEFT_ARROW)) {
        vel.x = -8;

    }
}