const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var divisionHeight=300
function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
  ground=new Ground(240,790,480,20)
  ground1=new Ground(-10,400,20,800)
  ground2=new Ground(800,400,20,800)
  for(var k=0; k<=width; k= k+80){
  division.push(new Division(k,height-divisionHeight/2,10,divisionHeight))
  }
  for (var j=40; j<=width; j=j+50){
    plinkos.push(new Plinko(j,75,10))
  }
  for (var j=15; j<=width; j=j+50){
    plinkos.push(new Plinko(j,175,10))
  }
  for (var j=40; j<=width; j=j+50){
    plinkos.push(new Plinko(j,275,10))
  }
  for (var j=15; j<=width; j=j+50){
    plinkos.push(new Plinko(j,375,10))
  }
}
var plinkos= [];
var particle=[]
var division=[]
function draw() {
  background(0);  
  drawSprites();
  Engine.update(engine)
  if ( frameCount%60===0){
    particle.push(new Particle(random(width/2-10,width/2+10),10,10))
  }

  for(j=0; j<plinkos.length; j++){
    plinkos[j].display()
  }
  for(k=0; k<division.length; k++){
    division[k].display()
  }
  for(p=0; p<particle.length; p++){
    particle[p].display()
  }
  ground.display()
  ground1.display()
  ground2.display()
  
}