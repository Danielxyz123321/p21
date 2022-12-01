
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball
function preload(){

}

function setup() {
	createCanvas(800, 700);
	

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	var ball_options={
		isStatic:false,
		restitution:0,
		fricton:0,
		density:1.2
	}
	ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  console.log(ball.y)
  left = new Ground(600,600,10,65)
  right = new Ground(750,600,10,65)
down = new Ground(400,640,width,10)
  top_wall = new Ground(width/2,0,width,1)
  right2 = new Ground(800,350,1,height)
  left2 = new Ground(0,350,1,height)


	Engine.run(engine);
  
	rectMode(CENTER);
	ellipseMode(RADIUS)
}


function draw() {
  
  background(0);
  ellipse(ball.position.x,ball.position.y,20);
  left.show();
  right.show();
  down.show();
  top_wall.show();
  left2.show();
  right2.show();
  drawSprites();
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,{x:600,y:600},{x:60,y:-80})
} 
}