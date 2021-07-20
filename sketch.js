
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball
function preload()
{
	
}

function setup() {
	createCanvas(1200, 1100);


	engine = Engine.create();
	world = engine.world;
	ball = Bodies.circle(300, 200, 40, ball_options)
	var ball_options = {
		isStatic: false,
		restitution: 0.3,
		friction: 0,
		density: 1.2
	}
	World.add(world, ball)
	groundObj = new Ground(width/2, 670, width, 20)
	rightSide = new Ground(1100, 600, 20, 120)
	leftSide = new Ground(600, 600, 20, 120)

	ellipse(RADIUS);
	Engine.run(engine);
  
}


function draw() {
  background(0);
  groundObj.show()
  rightSide.show()
  leftSide.show()
  ellipse(ball.position.x,ball.position.y,40);
  keyPressed()
  drawSprites();
 
}
function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.01});
		Matter.Body.applyForce(ball,{x:0,y:0},{x:0.01,y:0});
	}
}


