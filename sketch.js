
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball

function preload()
{
	
}

function setup() {
	createCanvas(800, 450);


	engine = Engine.create();
	world = engine.world;

	//crear los cuerpos aquí.
var ball_options={
	isStatic: false,
	restitution:0.3,
	friction:0,
	density:1.2	
}

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  World.add(world,ball);
  drawSprites();
 
}



