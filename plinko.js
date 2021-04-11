class Plinko{
    constructor(x,y,radius) {
        var options = {
            isStatic: true
        }
        this.body = Bodies.cirle(x,y,radius,options);
        //this.width = width;
        //this.height = 200;
        this.r=r
        //this.color=color(random(0,255),random(0,255),random(0,255))
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        rectMode(CENTER);
        fill("yellow");
        ellipse(pos.x, pos.y, this.r,this.r);
      }


}