const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;




var engine,world;

function setup() {
  createCanvas(900,500);
engine = Engine.create();
world = engine.world;

engine = Engine.create();
world = engine.world;
Engine.run(engine);
ground = new Ground(450,500,900,20);
stand1 = new Stand(390,300,250,10);
stand2 = new Stand(700,200,200,10);

//Last Layer
box21 = new Box(300,275,30,40);
console.log(box21);
box22 = new Box(330,275,30,40);
box23 = new Box(360,275,30,40);
box24 = new Box(390,275,30,40);
box25 = new Box(420,275,30,40);
box26 = new Box(450,275,30,40);
box27 = new Box(480,275,30,40);
//3rd Layer
box28 = new Box(330,235,30,40);
box29 = new Box(360,235,30,40);
box30 = new Box(390,235,30,40);
box11 = new Box(420,235,30,40);
box12 = new Box(450,235,30,40);
//2nd Layer
box13 = new Box(360,195,30,40);
box14 = new Box(390,195,30,40);
box15 = new Box(420,195,30,40);
//top
box16 = new Box(390,155,30,40);

//set 2 for second stand
//Last Layer
box1 = new Box(640,175,30,40);
box2 = new Box(670,175,30,40);
box3 = new Box(700,175,30,40);
box4 = new Box(730,175,30,40);
box5 = new Box(760,175,30,40);
//2nd Layer
box6 = new Box(670,135,30,40);
box7 = new Box(700,135,30,40);
box8 = new Box(730,135,30,40);
//top
box9 = new Box(700,95,30,40);

//ball holder with slings

ball = Bodies.circle(50,200,20);
ball.shapeColor = "tan"
World.add(world,ball);

slingShot = new Slingshot(ball,{x:100,y:200});
}

function draw() {
  background(56,44,44);  

  ground.display();
  stand1.display();
  stand2.display();

  //stand1 boxes
  
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  box26.display();
  box27.display();
  
  box28.display();
  box29.display();
  box30.display();
  box11.display();
  box12.display();
  
  box13.display();
  box14.display();
  box15.display();

  box16.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();

  box6.display();
  box7.display();
  box8.display(); 

   box9.display();
   ground.display();
  

  slingShot.display();
  ellipse(ball.position.x, ball.position.y, 30, 30);

}
function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingShot.fly();
}