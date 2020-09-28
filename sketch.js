var bullet, wall;
var speed, weight
var thickness;
var bullet2, bullet3, bullet4;


function setup() {
  createCanvas(1400,400);
speed=random(223,321);
weight=random(30,52);
thickness=random(22,83);

bullet=createSprite(50,200,40,20);
bullet.shapeColor="white";
bullet.velocityX=speed; 


wall=createSprite(1300,200,thickness,height/2);
}

function draw() {
  background("black"); 

  wall.shapeColor=(80,80,80);
  

if(hasCollided(bullet, wall))
{
  bullet.velocityX=0;
  var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);


if(damage>10)
{
  wall.shapeColor=color(255,0,0);
}
if(damage<10)
{
  wall.shapeColor=color(0,255,0);
}
}



  drawSprites();

}

function hasCollided(bullet, wall)
{
  bulletRightEdge=bullet.x +bullet.width;
  wallLeftEdge=wall.x;
  if(bulletRightEdge>=wallLeftEdge)
  {
    return true
  }
  return false

}
