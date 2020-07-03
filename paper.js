class Paper{
    constructor(x,y,radius){
        var options = {
            isStatic:false,
            restitution:0.8,
            friction: 1,
            density:1
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        this.image = loadImage("paper.png");
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var radius1 = this.radius;
        fill("white");
        imageMode(CENTER);
        image(this.image,pos.x, pos.y, 50,50);
        //ellipse(pos.x,pos.y,radius1*2)
    }
}