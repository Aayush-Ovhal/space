var canvas;

var player;
let detailX;

var grounds = [];
var ground;

var pos = 0;

var zpos = 0;

function setup(){
canvas = createCanvas(window.innerWidth,window.innerHeight,WEBGL);

player = new Player(-400);

frameRate(50);
}

function keyPressed(){
  if(keyCode === RIGHT_ARROW){
     player.setDir(200,250,0);
  }else if(keyCode === LEFT_ARROW){
      player.setDir(-100,250,0);
  }
  else if(keyCode === UP_ARROW){
    player.setDir(30,150,0);
   }
  else if(keyCode === DOWN_ARROW){
      player.setDir(30,250,0);
  }else if(keyCode === W){
      player.setDir();
  }
}

function draw(){
background(0);

player.display();
player.fall();

for(var i = 0; i < 3;i++){
  ground = new Ground(i+pos-100,300,i+zpos-300);
  grounds.push(ground);
  pos += 120;
}
if(pos === 360){
  pos = 0;
}
zpos -= 120

if(zpos === -720){
  zpos = null;
}

for(var g of grounds){
   g.display();
}
}