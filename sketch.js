var paper,bin1,bin2,bin3;
var bin,bi;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	// image to be loaded here.
bi = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(1600, 700);
/*
	bin1 = createSprite(1000,220,20,100);
	bin2 = createSprite(1070,255,120,20);
	bin3 = createSprite(1140,220,20,100);
	bin1.shapeColor = "brown";
	bin2.shapeColor = "brown";
	bin3.shapeColor = "brown";
*/
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	
	bin = createSprite(1070,540,10,10);
	bin.scale = 0.725;
	bin.addImage("b",bi);

	groundSprite=createSprite(width/2, height-45, width,10);
	groundSprite.shapeColor=color("yellow")

	paper = new Paper();
	
	bin1 = new Dustbin(990,552,20,210);
	bin2 = new Dustbin(1060,647,125,20);
	bin3 = new Dustbin(1150,552,20,210);


	//Create a ground here.
	ground = Bodies.rectangle(width/2, height-35, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	Engine.run(engine);
  
}


function draw() {
   
rectMode(CENTER);
  background("white");
  
	  paper.display();
	
	bin1.display();
	bin2.display();			
	bin3.display();
	
	

 	 drawSprites();
 
}
function keyPressed() 
{
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body,paper.body.position,{x:259,y:-259});
	}
}


