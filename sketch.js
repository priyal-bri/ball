
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
	ball1 = new ball(200,250,20,20);
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  ball1.display();
 
}



