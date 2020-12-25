var car, wall;
var speed, weight;
var  deformation;
var wall;
var damage = 0;


function setup() {
  createCanvas(800,400);
  car = createSprite(0, 200, 40, 40);
  car.shapeColor = "white";
  

  wall = createSprite(700, 200, Math.round(random(12, 70)), 300);

  speed = Math.round(random(5, 9));
  weight = Math.round(random(400, 1500));
  deformation = (0.5 * weight * speed * speed)/2250;

  damage = deformation;

  
}

function draw() {
  background(0);
  
  car.velocityX = speed;
  console.log(speed);
  console.log (deformation);



  if(wall.x - car.x <= car.width/2 + wall.width/2){
   car.velocityX = 0;
  

    if(deformation <= 8){
      car.shapeColor = "green"
    }

    if(deformation > 8 && deformation < 15 ){
    car.shapeColor = "yellow"
    }

    if(deformation > 15){
      car.shapeColor = "red"
    }

    if(wall.width < 30){
      damage = deformation * 12
      wall.shapeColor = "red"
    }

    if(wall.width > 30 && wall.width < 50){
      damage = deformation * 9
      wall.shapeColor = "yellow"
    }

    if(wall.width > 50){
      damage = deformation * 6
      wall.shapeColor = "green"
    }


  }

  drawSprites();
  text("Damage created: "+damage, 20, 20);
}