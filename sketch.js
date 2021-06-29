
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball 
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

var ball_Option=
{
isStatic:false,
restitution:0.3,
friction:0,
density:1.2

}


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.show();
  if (keyCode===UP_ARROW){
	Matter.Bodies.circle(ball,{x:0,y:0},{x:0.5,y:0.6})
  }
  drawSprites();
 
}



