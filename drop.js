class Drops{
    constructor(x,y,radius){
        var options= {
           isStatic:false,
           friction:0.1,
           
        }
        this.rain=Bodies.circle(x,y,5,options)
        this.radius=5
        World.add(world,this.body)
    }
    display(){
        
        var pos=this.body.position;
        if(this.rain.position.y>height){
          Matter.Body.setPosition(this.rain,{x:random(0,800),y:random(0,400)})
        }
        fill("blue")
        ellipseMode(CENTER);
        ellipse(pos.x,pos.y,this.radius,this.radius);
    }
}     
