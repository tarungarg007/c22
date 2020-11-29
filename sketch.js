const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var myengine,world;
var ground,ball;

function setup() {
  createCanvas(400,400);
  myengine= Engine.create()
  world=myengine.world
   ground=Bodies.rectangle(200,380,800,50,{isStatic:true})
   ball=Bodies.circle(200,100,10,{restitution:0.8})
   World.add(world,ground)
   World.add(world,ball)
}

function draw() {
  background(255,255,255);  
Engine.update(myengine)
rectMode(CENTER)
fill("red");
 rect(ground.position.x,ground.position.y,400,50)
 fill("blue")
 circle (ball.position.x,ball.position.y,50)
  drawSprites();
}