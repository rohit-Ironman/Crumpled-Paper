
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper, ground; 
var block1; 
var block2, block3;



function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	paper = new Paper(200, 556); 
	ground = new Ground(400,600,800,20);

	block1 = createSprite(600,596,200,10);
	block1.shapeColor = color("red");

	block2 = createSprite(500,560,10,100);
	block2.shapeColor = color("red"); 

	block3 = createSprite(700,560,10,100);
	block3.shapeColor = color("red");

	Engine.run(engine);
  
}


function draw() {

  background(0);
	Engine.update(engine);

  ground.display();
  paper.display();
 
drawSprites();


 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	  Matter.Body.applyForce(paper.body,paper.body.position,{x:7,y:-28});
	}
  }
  
