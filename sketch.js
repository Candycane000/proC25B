
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground  
function setup() {
	createCanvas(1800, 700);


	engine = Engine.create();
	world = engine.world;
	paper= new Paper(100,100,10,10);

	//Create the Bodies Here.
//	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
  //World.add(world, ground);
  ground= new Ground(750,650,1500,20);
	box= new Box(1340,585,20,90);
	//box1= new Box(1410,580,20,90);
	//box2= new Box(1380,580,140,20);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("skyblue");
  paper.display()
  box.display() 
  //box1.display()
  //box2.display()

  drawSprites();
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){

     Body.applyForce(paper.body,paper.body.position,{x:10,y:-10})
	}
}


