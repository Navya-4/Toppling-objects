const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var universe,earth,ground,coder;

var box1,box2;


function setup() {
  createCanvas(400,400);
 universe = Engine.create() // universe.world
 earth = universe.world; //   Engine.create().world

//java script object notation

box1 = new Box(210,100,25,50);
box2 = new Box(200,200,50,50);

ground = new Ground (200,350,400,20)

}

function draw() {
  Engine.update(universe)
  background(0)
  box1.display();
  box2.display();

  ground.display();
  
}