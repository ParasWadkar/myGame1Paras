//red Rider
var redRider,redRiderImgB,redRiderImgF,redRiderImgR,redRiderImgL;
var stillRiderImgB,stillRiderImgF,stillRiderImgR,stillRiderImgL;

//hero 
var hero,heroImgB,heroImgF,heroImgR,rheroImgL;
var stillHeroImgB,stillHeroImgF,stillHeroImgR,stillHeroImgL;

//background
var backgroundImg
function preload() {
  //red rider moving animation
  redRiderImgB = loadAnimation("images/back1.png","images/back2.png","images/back3.png","images/back2.png");
  redRiderImgF = loadAnimation("images/forward1.png","images/forward2.png","images/forward3.png","images/forward2.png");
  redRiderImgR = loadAnimation("images/right1.png","images/right2.png","images/right3.png","images/right2.png");
  redRiderImgL = loadAnimation("images/left1.png","images/left2.png","images/left3.png","images/left2.png");
  //red rider still animation
  stillRiderImgB = loadAnimation("images/back2.png");
  stillRiderImgF = loadAnimation("images/forward2.png");
  stillRiderImgR = loadAnimation("images/right2.png");
  stillRiderImgL = loadAnimation("images/left2.png");
 
  //hero moving animation
  heroImgB = loadAnimation("images/heroBack1.png","images/heroBack2.png","images/heroBack3.png","images/heroBack2.png");
  heroImgF = loadAnimation("images/heroForward1.png","images/heroForward2.png","images/heroForward3.png","images/heroForward2.png");
  heroImgR = loadAnimation("images/heroRight1.png","images/heroRight2.png","images/heroRight3.png","images/heroRight2.png");
  heroImgL = loadAnimation("images/heroLeft1.png","images/heroLeft2.png","images/heroLeft3.png","images/heroLeft2.png");
  //hero still animation
  stillHeroImgB = loadAnimation("images/heroBack2.png");
  stillHeroImgF = loadAnimation("images/heroForward2.png");
  stillHeroImgR = loadAnimation("images/heroRight2.png");
  stillHeroImgL = loadAnimation("images/heroLeft2.png");

  //hero moving animation
  wImgB = loadAnimation("images/wb.png","images/wb2.png","images/wb3.png","images/wb4.png");
  wImgF = loadAnimation("images/wf.png","images/wf2.png","images/wf3.png","images/wf4.png");
  wImgR = loadAnimation("images/wr.png","images/wr2.png","images/wr3.png","images/wr3.png");
  wImgL = loadAnimation("images/wl.png","images/wl2.png","images/wl3.png","images/wl4.png");
  //hero still animation
  stillWImgB = loadAnimation("images/wb2.png");
  stillWImgF = loadAnimation("images/wf2.png");
  stillWImgR = loadAnimation("images/wr2.png");
  stillWImgL = loadAnimation("images/wl2.png");

  //background
   backgroundImg = loadImage("images/background.png")
}
function setup() {
  createCanvas(displayWidth,displayHeight);
  redRider = createSprite(displayWidth/2,displayHeight/2,50,50);
  redRider.addAnimation("stillRiderImgF",stillRiderImgF);
 
  hero = createSprite(displayWidth/2-50,displayHeight/2,50,50);
  hero.scale=2;
  hero.addAnimation("stillHeroImgF",stillHeroImgF);

  wolves = createSprite(displayWidth/4,displayHeight/4,50,50);
  wolves.addAnimation("wImgF",wImgF);

 hero.rotateToDirection = true; 
}

function draw() {
background("red");
image(backgroundImg,displayWidth/16,displayHeight/16,displayWidth,displayHeight); 
   
  //walls();
  //camera.position.x = hero.x;
 // camera.position.y = hero.y;

  //hero movement
  if(keyDown(UP_ARROW)){
   hero.addAnimation(" back1", heroImgB );
    hero.velocityY = -5;

  }
  
  if(keyWentUp(UP_ARROW)){
    hero.addAnimation("backStill ", stillHeroImgB );
     hero.velocityY = 0;
 
   }

   if(keyDown(LEFT_ARROW)){
    hero.addAnimation(" leftHero",heroImgL );
     hero.velocityX = -5;
 
   }

   if(keyWentUp(LEFT_ARROW)){
    hero.addAnimation("leftStill ", stillHeroImgL );
     hero.velocityX = 0;
   }

   if(keyDown(RIGHT_ARROW)){
    hero.addAnimation(" rightHero",heroImgR );
     hero.velocityX = 5;
   }

   if(keyWentUp(RIGHT_ARROW)){
    hero.addAnimation("rightStill ", stillHeroImgR );
     hero.velocityX = 0;
   }

   if(keyDown(DOWN_ARROW)){
    hero.addAnimation(" back1", heroImgF );
    hero.velocityY = 5;
 
   }
   
   if(keyWentUp(DOWN_ARROW)){
    hero.addAnimation("backStill3 ", stillRiderImgF );
    hero.velocityY = 0;
    }

    redRider.x = hero.x - 100;
   redRider.y = hero.y - 100;
  drawSprites();
}
