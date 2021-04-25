var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];

var gameState=start;
var start,play,end;

var score=0;
var particle;
var turn=0;

var divisionHeight=300;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  turn<=5;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }
  
}
 


function draw() {
  background("black");
  textSize(20)
  text("Score: "+score,20,30);
  Engine.update(engine);
 
  text('500',36,550)
  text('500',116,550)
  text('500',189,550)
  text('500',270,550)
  text('100',356,550)
  text('100',431,550)
  text('100',516,550)
  text('200',596,550)
  text('200',676,550)
  text('200',753,550)
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }

    mousePressed();
   
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

   if(particle!=null){
     particle.display();
     
     if(particle.body.position.y>505){
       if(particle.body.position.x<332){
         score=score+500;
         particle=null;
         if(count>=5) gameState=end;
       }
     }
   }
   console.log(mouseX,mouseY)
}

function mousePressed(){
  if(gameState!==end){
    score++;
    particle=new Particle(mouseX, 10, 10, 10)
  }
}
