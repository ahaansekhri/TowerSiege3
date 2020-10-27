const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var stand1,stand2;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13;
var block14,block15,block15,block17,block18,block19,block20;
var polygon,sling, backgroundImg;
var score = 0;


function preload() {
  getTime();
}
function setup() {
  
  createCanvas(1200,800);


  engine = Engine.create();
  world = engine.world;
  
  block1 = new Box(400,500);
  block2 = new Box(450,500);
  block3 = new Box(500,500);
  block4 = new Box(550,500);
  block5 = new Box(425,470);
  block6 = new Box(475,470);
  block7 = new Box(525,470);
  block8 = new Box(450,440);
  block9 = new Box(500,440);
  block10 = new Box(475,410);

  block11 = new Box(850,400);
  block12 = new Box(900,400);
  block13 = new Box(950,400);
  block14 = new Box(1000,400);
  block15 = new Box(875,370);
  block16 = new Box(925,370);
  block17 = new Box(975,370);
  block18 = new Box(900,340);
  block19 = new Box(950,340);
  block20 = new Box(925,310);

  stand1 = new Ground(475,525,300,20);
  stand2 = new Ground(925,425,300,20);

  polygon = new Polygon(100,500,10)

  sling = new Sling(polygon.body,{x:100,y:500});

  

}

function draw() {
  if(backgroundImg){
    background(backgroundImg);
  }

  Engine.update(engine);

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  
  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();
  block8.score();
  block9.score();
  block10.score();
  block11.score();
  block12.score();
  block13.score();
  block14.score();
  block15.score();
  block16.score();
  block17.score();
  block18.score();
  block19.score();
  block20.score();

  stand1.display();
  stand2.display();

  sling.display();

  polygon.display();

  drawSprites();

  text("score:"+ score,900,100);

}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});

}


function mouseReleased(){
  sling.fly();

}

function keyPressed(){
  if(keyCode === 32){
      sling.attach(polygon.body);
      Matter.Body.setPosition(polygon.body,{x:100, y:500});

  }
}

async function getTime(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Hong_Kong");
  var responseJSON = await response.json();
  console.log(responseJSON);
  var hour = responseJSON.datetime.slice(11,13);
  console.log(hour);

  if(hour>5 && hour<18){
      backgroundImg = loadImage("bg.png");
  }

  else{
      backgroundImg = loadImage("bg2.jpg");
      
  }
}
