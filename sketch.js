var PLAY=1;
var END=0;
var gameState = PLAY;
var monkey , monkey_running,forest;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup,foresti;
var downloadkei,downloadke;
var score,ground,survival,ke1,ke2,ke3,ke4,ke5,survivalreal,badage1,badage2,badage3;

function preload(){
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 survivalreal=loadImage("survivalreal.png")
   monkey_running=loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  badage1=loadImage("badage1.png")
  badage2=loadImage("badage2.png")
  badage3=loadImage("badage3.png")
  
  foresti=loadImage("forest.jfif")
  downloadkei=loadImage("downloadke.jfif")
}



function setup() {
  createCanvas(400,400)
 
  
   forest=createSprite(200,180,10,10);
  forest.scale=3;
  forest.addImage("aaa",foresti);
  
   ground =createSprite(0,380,100,10);
  ground.visible=false;
  monkey =createSprite(30,360,10,10);
  monkey.addAnimation("a",monkey_running) ;
  monkey.scale=0.1;
  
  ke1=createSprite(220,20,2,2);
  ke1.addImage("iixgi",survivalreal)
  ke1.scale=0.15;
   ke2=createSprite(260,20,2,2);
  ke2.addImage("iixgi",survivalreal)
  ke2.scale=0.15;
    ke3=createSprite(300,20,2,2);
  ke3.addImage("iixgi",survivalreal)
  ke3.scale=0.15;
    ke4=createSprite(340,20,2,2);
  ke4.addImage("iixgi",survivalreal)
  ke4.scale=0.15;
    ke5=createSprite(380,20,2,2);
  ke5.addImage("iixgi",survivalreal)
  ke5.scale=0.15;
  
  downloadke=createSprite(200,200,10,10)
   downloadke.addImage("agg",downloadkei)
   downloadke.scale=1.5;
  
 //   bad1=createSprite(35,330,2,2)
                
   // bad2=createSprite(35,350,2,2);
    //bad3=createSprite(35,325,2,2);
  //  bad4=createSprite(20,320,2,2);
  //bad4=createSprite(35,340,2,2);
  
   //bad1.addImage("iixgi",badage1)
  //bad1.scale=0.02;
   //bad2.addImage("iixgi",badage2)
  //bad2.scale=0.02;
   //bad3.addImage("iixgi",badage1)
  //bad3.scale=0.02;
   //bad4.addImage("iixgi",badage3)
  //bad4.scale=0.02;
   //bad4.addImage("iixgi",badage2)
 // bad4.scale=0.02;
  obstacleGroup = new Group();
  FoodGroup = new Group();
  
 // bad1.visible=false;
//  bad2.visible=false;
  //bad3.visible=false;
  //bad4.visible=false;
  score=0;
  survival=5;
}


function draw() {
background(0)
  
  if(gameState===PLAY){
     if(forest.x<0){
  forest.x=forest.width/2
     }
        console.log(monkey.y)
 // bad1.debug=true
  if(keyDown("space")&&monkey.y>=344){
    monkey.velocityY=-10;
    //bad1.x=380
    
  }
  forest.velocityX=-(4+score/3);
  
        monkey.velocityY = monkey.velocityY + 0.45;
    //  bad1.velocityY = bad1.velocityY + 0.45;
  if(monkey.isTouching(FoodGroup)){
    FoodGroup.destroyEach();
    score=score+1;
  }
    if(monkey.isTouching(obstacleGroup)){
    obstacleGroup.destroyEach();
      survival=survival-1;
    }
      if(survival===0){
    gameState=END
  }
      if(survival===4){
    ke1.visible=false
  }
  if(survival===3){
    ke2.visible=false
   // bad1.visible=true;
  }
  if(survival===2){
    ke3.visible=false
    //bad2.visible=true;
    
  }
  if(survival===1){
    ke4.visible=false
    //bad3.visible=true;
    
  }
   if(survival===0){
    ke5.visible=false
  }
     food();
 obstacles();
   monkey.visible=true;
     downloadke.visible=false;
    
  }
 
 if(gameState===END){
   
   FoodGroup.setVelocityEach(0);
   FoodGroup.setLifetimeEach(0);
   obstacleGroup.setLifetimeEach(0);
   obstacleGroup.setVelocityEach(0);
  forest.velocityX=0;
   monkey.visible=false;
     downloadke.visible=true;
   if(keyDown("r")){
     reset();
   }
   
 }
  
  
      
  
  

    //monkey.x=bad1.x
    //monkey.x=bad2.x
    //monkey.x=bad3.x
    //monkey.x=bad4.x
    //monkey.y=bad1.y
    //monkey.y=bad2.y
    //monkey.y=bad3.y
    //monkey.y=bad4.y
  
  
  

   // bad4.visible=true;
     
  
  monkey.collide(ground);
 
  drawSprites();
   textSize(18);
  stroke("brown");
  fill("brown");
  strokeWeight(1.3);
  textFont("Courier New");
  text("Score : "+score,280,390)
 if(gameState===END){
     textSize(22);
  stroke("brown");
  fill("brown");
  strokeWeight(1.3);
  textFont("Courier New");
  fill("red");
   text("Game Over",150,170)
   text("Help me",150,345)
   text("Press 'r' to restart",100,380);
   
 }
}

function obstacles(){
  if(frameCount%150===0){
    obstacle=createSprite(400,360,10,10);
    obstacle.addImage("ag",obstaceImage);
    obstacle.scale=0.15;
    obstacle.velocityX=-(5+score/3);
    obstacleGroup.add(obstacle);
  obstacleGroup.setLifetimeEach(200);
   // obstacleGroup.debug=true;
    
  }
}
function food(){
  //if(frameCount%250===0){
  if(frameCount%180===0){
    banana=createSprite(400,Math.round(random(220,320)),10,10);
    banana.addImage("ag",bananaImage);
    banana.scale=0.1;
    banana.velocityX=-(3+score/3);
    FoodGroup.add(banana);
  FoodGroup.setLifetimeEach(200);
 // }
    
  }
}
function reset(){
  score=0;
  survival=5;
  gameState=PLAY;
  ke1.visible=true;
  ke2.visible=true;
  ke3.visible=true;
  ke4.visible=true;
  ke5.visible=true;
  
}


