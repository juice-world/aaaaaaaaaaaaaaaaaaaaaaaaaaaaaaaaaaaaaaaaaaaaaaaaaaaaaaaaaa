var ball;
var blower;





function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  ball.createSprite(100,100,50,50);
};

function draw() {
  background(255,255,255);  
  drawSprites();
}




function blow(){
Matter.Body.applyforce(blower)
};