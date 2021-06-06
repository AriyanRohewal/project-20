var bg , cat  , mouse;
var cat1,cat2,cat3, mouse1, mouse2, mouse3;
function preload() {
    //load the images here
    bg=loadImage("images/garden.png");
    cat1=loadAnimation("images/cat1.png");
    cat2=loadAnimation("images/cat2.png","images/cat3.png");
    cat3=loadAnimation("images/cat4.png");
    mouse1=loadAnimation("images/mouse1.png");
    mouse2=loadAnimation("images/mouse2.png","images/mouse3.png");
    mouse3=loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
cat=createSprite(870,600);
cat.addAnimation("sleep",cat1);
cat.scale=0.2
mouse=createSprite(200,600);
mouse.addAnimation("stand",mouse1);
mouse.scale=0.15;

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
   if(cat.x-mouse.x<(cat.width-mouse.width)/2){
       cat.velocityX=0;
       cat.addAnimation("last",cat3);
       cat.x=300;
       cat.scale=0.2;
       cat.changeAnimation("last");
       mouse.addAnimation("lastmouse",mouse3);
       mouse.scale=0.15;
       mouse.changeAnimation("lastmouse");
   }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
   if(keyCode===LEFT_ARROW){
       cat.velocityX=-5;
       cat.addAnimation("run",cat2);
       cat.changeAnimation("run");
       mouse.addAnimation("tease",mouse2);
       mouse.frameDelay=25;
       mouse.changeAnimation("tease");
   }

}
