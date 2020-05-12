var wall, thickness;
var bullet;
var speed, weight;
var deformation;

function setup() {
  createCanvas(800,400);
  speed = random(50,100);
  weight = random(30,52);
  thickness = random(22,83);

  bullet = createSprite(50,200,50,10);
  wall = createSprite(800,200,60,height/2);
  bullet.velocityX = speed;
  wall = createSprite(800,200,thickness,height/2);


  
}
function draw() {
  background(0);
  text("Military Defense Team USA",100,10);
  text("Speed  " +  Math.round(speed),100,50);
  text("Weight  " +  Math.round(weight),100,100);
  text("Thickness  " +  Math.round(thickness),100,150);
  text (mouseX + ', '+ mouseY,10,15);
  
  if (wall.x-bullet.x < (bullet.width + wall.width)/2){
    bullet.velocityX = 0;
    damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);
   
    if(damage>10){
      bullet.shapeColor = color(255,0,0);
      text("Red = Fatal",400,10);
      text("Green = Perfect",400,100);
      text("Result = Fail",200,50);
      text("Damage  " + Math.round(damage),200,100);
    }
    if(damage<10){
      bullet.shapeColor = color(0,255,0);
      text("Red = Fatal",400,10);
      text("Green = Perfect",400,100);  
      text("Result = Pass",200,50);
      text("Damage  " + Math.round(damage),200,100);
    }
  } 
  bullet.display();
  wall.display();
  drawSprites();
}