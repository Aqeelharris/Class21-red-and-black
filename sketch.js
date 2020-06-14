var movingrect,fixedrect
var movingrect1,fixedrect1

function setup() {
  createCanvas(800,400);
 movingrect = createSprite(400, 200, 50, 50);
 fixedrect = createSprite(400, 150, 50, 50);
 movingrect.shapeColor ="green";
 fixedrect.shapeColor = "green";
 movingrect1 = createSprite(300, 150, 50, 50);
 fixedrect1= createSprite(200, 150, 50, 50);
 movingrect1.shapeColor ="red";
 fixedrect1.shapeColor = "red";
}

function draw() {
  background(255,255,255);
  movingrect1.x = mouseX;
  movingrect1.y = mouseY;  
  if(istouching(movingrect,fixedrect)){
    movingrect.shapeColor ="blue";
    fixedrect.shapeColor = "blue";
  }
  else{
    movingrect.shapeColor ="green";
    fixedrect.shapeColor = "green";
  }
  if(istouching(movingrect1,fixedrect1)){
    movingrect1.shapeColor ="black";
    fixedrect1.shapeColor = "black";
  }
  else{
    movingrect1.shapeColor ="red";
    fixedrect1.shapeColor = "red";
  }
   drawSprites();
}
function istouching(object1,object2){
  if(object1.x-object2.x<object1.width/2+object2.width/2
    && object2.x-object1.x<object2.width/2+object1.width/2
    && object1.y-object2.y<object1.height/2+object2.height/2
    && object2.y-object1.y<object2.height/2+object1.height/2){
   return true
  }
  else{
   return false
  }

}