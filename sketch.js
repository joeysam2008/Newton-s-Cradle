const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof1, roof2, roof3, roof4, roof5;
var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var rope1, rope2, rope3, rope4, rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof1 = new Roof(200,200,100,20);
	roof2 = new Roof (270,200,100,20);
	roof3 = new Roof (340,200,100,20);
	roof4 = new Roof (420,200,100,20);
	roof5 = new Roof (500,200,100,20);
	
	bobObject1= new Bob(250,500,60);
	bobObject2= new Bob(310,500,60);
	bobObject3= new Bob(370,500,60);
	bobObject4= new Bob(430,500,60);
	bobObject5= new Bob(490,500,60);

	 rope1= new Rope(bobObject1.body, roof1.body, 0, 0);
	 rope2= new Rope(bobObject2.body, roof2.body, 0, 0);
	 rope3= new Rope(bobObject3.body, roof3.body, 0, 0);
	 rope4= new Rope(bobObject4.body, roof4.body, 0, 0);
	 rope5= new Rope(bobObject5.body, roof5.body, 0, 0);


	
  
}


function draw() {
 rectMode(CENTER);
  background(255);
  Engine.run(engine);

  roof1.display();
  roof2.display();
  roof3.display();
  roof4.display();
  roof5.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  keyPressed();

  drawSprites();
 
}

function keyPressed() 
{
	if (keyCode === UP_ARROW) 
	{
		Matter.Body.applyForce(bobObject1.body, bobObject1.body.position, {x:20, y:-20})
		Matter.Body.applyForce(bobObject2.body, bobObject2.body.position, {x:15, y:-15})
		Matter.Body.applyForce(bobObject3.body, bobObject3.body.position, {x:15, y:-15})
		Matter.Body.applyForce(bobObject4.body, bobObject4.body.position, {x:15, y:-15})
		Matter.Body.applyForce(bobObject5.body, bobObject5.body.position, {x:15, y:-15})
		
	}
}

