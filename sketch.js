var car,wall;
var speed,weight


function setup() {
  createCanvas(800,400);

  car=createSprite(50, 200, 50, 50);
  car.shapeColor="white";
  wall=createSprite(750,200,60,height/2);
  wall.shapeColor="red";
  
}

function draw() {
  background(100); 

  speed=random(10,25);
car.velocityX = speed;
weight=random(400,1500);
  
  if(car.x-wall.x<wall.width/2+car.width/2 &&
    wall.x-car.x<wall.width/2+car.width/2 &&
    wall.y-car.y<wall.height/2+car.height/2 &&
    car.y-wall.y<wall.height/2+car.height/2)
    {car.shapeColor="green";
    //wall.shapeColor="green";
    car.velocityX=0
  }
  else{car.shapeColor="white";
  wall.shapeColor="red";
  
  }
  drawSprites();
}