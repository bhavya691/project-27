
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1 , bob2 , bob3 , bob4 , bob5 , string , string1, string2 , string3 , string4,  line1;

function preload()
{
	
}

function setup() {
	createCanvas(900, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	line1 = new ground();

	bob1 = new bob(320,500);
	bob2 = new bob(360,500);
	bob3 = new bob(420,500);
	bob4 = new bob(480,500);
	bob5 = new bob(540,500);

	string = new rope(bob1.body,{x:180 , y:100});
	string1 = new rope(bob2.body,{x:280 , y:100});
	string2 = new rope(bob3.body,{x:380 , y:100});
	string3 = new rope(bob4.body,{x:480 , y:100});
	string4 = new rope(bob5.body,{x:590 , y:100});
	Engine.run(engine);
  
}


function draw() {
 Engine.update(engine)
  background(210,210,210);
  
  line1.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  string.display();
  string1.display();
  string2.display();
  string3.display();
  string4.display();
  
  drawSprites();
 
}

function keyPressed(){	
	if(keyCode === UP_ARROW){
	Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-400, y:-400});
}
}


