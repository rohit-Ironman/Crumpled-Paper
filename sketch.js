
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper, ground; 
var block, blackImage; 

function preload(){

	blockImage = loadImage("dustbingreen.png")

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	paper = new Paper(200, 556); 
	ground = new Ground(400,600,800,20);



	block = createSprite(500,507,0,200);
	block.shapeColor = color("black"); 
	block.addImage("block", blockImage);
	block.scale = 0.5;

	Engine.run(engine);
  
}


function draw() {

  background(255);
	Engine.update(engine);

  ground.display();
  paper.display();
 
drawSprites();


 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	  Matter.Body.applyForce(paper.body,paper.body.position,{x:5.5,y:-28});
	}
  }
  
