class Box {
    constructor(x,y,width,height){
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
        this.image = loadImage("dustbingreen.png");
    }
    display(imageState){
        var pos = this.body.position;
        rectMode(CENTER);
        imageMode(CENTER);
        fill("green");
        if(imageState == 1){
            image(this.image,pos.x, 580,this.width,200);
        }else{
            rect(pos.x, pos.y, this.width, this.height);
        }
    }
}