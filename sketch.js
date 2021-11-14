
  var trex, trex_running;
  var suelo, suelo_image
  var sueloInvisible
  var nubeI
  var ob1, ob2, ob3, ob4, ob5, ob6;

  function preload(){
  trex_running=loadAnimation("trex1.png","trex3.png","trex4.png");
  suelo_image=loadImage("ground2.png");
  nubeI=loadImage("cloud.png");
  ob1=loadImage("obstacle1.png");
  ob2=loadImage("obstacle2.png");
  ob3=loadImage("obstacle3.png");
  ob4=loadImage("obstacle4.png");
  ob5=loadImage("obstacle5.png");
  ob6=loadImage("obstacle6.png");
}

function setup(){
  createCanvas(600,600)
  
  trex=createSprite(50,328,10,50);
  trex.addAnimation("trex",trex_running);
  trex.scale=0.7;
  suelo=createSprite(200,350,20,20);
  suelo.addImage("suelo",suelo_image);
  sueloInvisible=createSprite(200,365,600,20)
  sueloInvisible.visible=false;
  var azar= Math.round(random(1,10));
  console.log(azar);

}

function draw(){
  background("white")
  trex.collide(sueloInvisible);

  suelo.velocityX=-5;
  if(keyDown("space")&& trex.y>270){
  trex.velocityY=-10;
  console.log(trex.y);
}

  if(suelo.x<0){
  suelo.x=suelo.width/2
}



  trex.velocityY=trex.velocityY+0.8;

  crearNubes();
  crearObstaculos();


  drawSprites();
}//Fin de Function draw

function crearNubes(){
  var altura=Math.round(random(20,110));
  if(frameCount%40===0){
    var nubes=createSprite(600,altura,30,15);
    nubes.addImage("nube",nubeI);
    nubes.velocityX=-5;
    nubes.lifetime=150;
}
}

function crearObstaculos(){
 var azarObstaculos=Math.round(random(1,6));
  if (frameCount%80===0){
    var obstaculo = createSprite(600,330,40,20)
    obstaculo.scale = 0.6;
    obstaculo.velocityX=-5;
    switch(azarObstaculos){
      case 1: obstaculo.addImage("cactus1",ob1);
        break;
      case 2: obstaculo.addImage("cactus2",ob2);
        break;
      case 3: obstaculo.addImage("cactus3",ob3);
        break;
      case 4: obstaculo.addImage("cactus4",ob4);
        break;
      case 5: obstaculo.addImage("cactus5",ob5);
        break;
      case 6: obstaculo.addImage("cactus6",ob6);
        break;


    }
  }
}