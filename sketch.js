
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	Paper=new paper(100,600,10);
	left=new dustbin(550,620,20,100);
	right=new dustbin(670,620,20,100);
	bottom=new dustbin(610,660,100,20);
	Ground=new ground(400,680,800,20);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  Paper.display();
  Ground.display();
   left.display();
   right.display();
   bottom.display();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode=== UP_ARROW){
		Matter.Body.applyForce(Paper.body,Paper.body.position,{x:15,y:-15});

	}
}

