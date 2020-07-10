class Player{
    constructor(z){
       this.player;
       this.detailX;
       this.detailY;
       this.xdir = 30;
       this.ydir = 250;
       this.zdir = z

       this.playerImg = loadModel("spaceCraft.obj",true);
    }

    fall(){
      if(this.ydir < 250){
        this.ydir += 3;
      }else if(this.ydir === 250){
        this.ydir += 0;
      }
    }

    setDir(x,y,z){
      this.xdir = x;
      this.ydir = y;
      this.zdir = z;
    }

    display(){
      colorMode(RGB);
      push();
      scale(0.8);
      translate(this.xdir,this.ydir,this.zdir);
      rotateX(millis()/500)
      fill(0,0,255);
      stroke(51);      
      model(this.playerImg);
      pop();
    }
}