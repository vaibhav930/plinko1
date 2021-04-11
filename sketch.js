const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world
var particles =[];
var plinkos =[];
var divisions= [];
var divisionHeight = 300

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(240,height,800,20);

for (var k=10 ; k <= 480; k=k+80){
divisions.push(new Division(k, height-divisionHeight/2,10,divisionHeight));
}
for(var j=40 ; j<= width ; j=j=50){
plinkos.push(new Plinko(j,75))
}
for(var j = 15 ; j<= width-10; j=j+50){
plinkos.push(new Plinko(j,175))
}

if(frameCount%60){
 particles.push(new Particles(random(width/2-10,width/2-10),10,10))

};


}


function draw() {
  background("blue")            
  Engine.update(engine);
ground.display();

for (var i=0 ; i <divisions.length ;  i++){
  divisions[i].display()
}
for (var n=0 ; n <plinkos.length ; n++){
  plinkos[n].display()
}
for (var i =0 ; i <particles.length ; i++ ){
  particles[i].display()
}
}