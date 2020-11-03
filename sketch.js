var fixed, moving;



function setup() {
  createCanvas(800,400);
  fixed = createSprite(150, 100, 100, 100);
  moving = createSprite(300,100,100,200);
  fixed.shapeColor = "blue";
  moving.shapeColor = "red";
}

function draw() {
  background("black");  
  
  moving.x = mouseX;
  moving.y = mouseY;

  if(moving.x - fixed.x<= moving.width/2 + fixed.width/2 && fixed.x - moving.x <= fixed.width/2 + moving.width/2
    && moving.y - fixed.y<= moving.height/2 + fixed.height/2 && fixed.y - moving.y <= fixed.height/2 + moving.height/2){
    fixed.shapeColor = "green";
    moving.shapeColor = "green";
  
  }
 else{
  fixed.shapeColor = "blue";
  moving.shapeColor = "red";
}
 
  
 drawSprites();





}