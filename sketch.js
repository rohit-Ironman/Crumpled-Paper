
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper; 
var trashBase; 
var trashSide1, trashSide2;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	paper = new Paper(200, 650); 


	Engine.run(engine);
  
}


function draw() {

  background(0);
	Engine.update(engine);
  paper.display();

  drawSprites();
 
}



