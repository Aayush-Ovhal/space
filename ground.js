class Ground{
   constructor(x,y,z){
     this.x = x;
     this.y = y;
     this.z = z;
     this.zdir = 0;
   }

   display(){
    colorMode(RGB);
    push();
    translate(this.x,this.y,this.z);
    fill(255,0,0);
    this.ground = box(120);
    pop();
   }
}