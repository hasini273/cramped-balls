
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var box1,box2,box3;
var options={
isStatic:false,
restitution:0.3,
friction:0.5,
density:1.2,
}
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
ground=createSprite(400,650,800,10)
ground.shapeColor=("yellow")
box1=createSprite(670, 630, 200,20);
	box1.shapeColor=("white")
	box2=createSprite(580, 590, 20,100);
	box2.shapeColor=("white")
	box3=createSprite(780, 590, 20,100);
	box3.shapeColor=("white")
	engine = Engine.create();
	world = engine.world;
	
	//Create the Bodies Here.
	ellipse(56, 46, 55, 55);
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



