var ball;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
    

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	var ball_options{
		isStatic: flase,
		restituion: 0.3,
		frication:0,
		density:1.2
	 }
	 
	
		
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

groundObj.display();

  groundObj =new ground(width/2,670,width,20);
  leftside = new ground(1100,600,20,120);
  
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

// write code here to applyForce on ball body

	}
}



