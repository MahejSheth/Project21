var bullet,wall
var speed,thickness,weight
var damage

function setup() {
  createCanvas(1600,400);
  bullet = createSprite(50, 200, 100, 30);

  bullet.shapeColor = "white"

  speed = random(223,321);
  weight=random(30,52)
  bullet.velocityX = speed
  thickness = random(22,83);
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = "brown"

}

function draw() {
  background("black");  
if(wall.x-bullet.x <(bullet.width+wall.width)/2){
damage=0.5*weight*speed*speed/(thickness*thickness*thickness)

  bullet.velocityX = 0

  if(damage>10){
    wall.shapeColor="red";
  }

  if(damage<10){
wall.shapeColor = "green";
  }
}


  drawSprites();
}