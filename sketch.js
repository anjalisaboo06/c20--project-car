var car, wall;
var speed, weight;

function setup() {
  createCanvas(1600,400);
  //speed = random(55, 90);
  //weight = random(400, 1500);

  speed = random(55, 90);
  weight = random(20, 70);

 car = createSprite(200, 200, 50, 50);
  car.shapeColor = "red";
  car.debug = true;
 car.velocityX = speed;
wall = createSprite(1500, 200, 60, height/2);
wall.shapeColor = 80, 80, 80;
wall.debug = true;
 de = (0.5*weight*speed*speed)/2250
 


}

function draw() {
  background(255,255,255); 
  if(-car.x+wall.x < (car.width+wall.width)/2){
    car.velocityX = 0;

    if(de>180){
      car.shapeColor = color(250, 0, 0);
      wall.shapeColor = "blue";
    }

   if(de<180 && de>100){
     car.shapeColor = color(230, 230, 0);
   wall.shapeColor = "blue";
  }
  if(de<100){
    car.shapeColor = color(0, 225, 0);
    wall.shapeColor = "blue";
  }

  }
  
 

  drawSprites();
}

