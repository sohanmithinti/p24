// You could have multiple flags like: start, launch to indicate the state of the game.

const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
// The above line creates different constant variables for Engine, World, Bodies etc.

/*

const {Engine} = Matter 
is the same as c
onst Engine = Matter.Engine

*/

var engine, world;
var tank, canan;

function preload(){
    tank = loadImage("assets/tank.png")
    canan = loadImage("assets/canonBall.png")
}

function setup() {
    // Setup the canvas, the ground the, tanker, the shooting ball and the bubble balls.
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;
    tank.addImage(tank);
    canan.addImage(canan)
}

function draw() {
// Remember to update the Matter Engine and set the background.
background("white");
if (keyDown("1")){
    canan.velocityX = 3;
}
}


