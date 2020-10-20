class Paper{
    contructor(x,y){
        var options ={
            isStatic:false, 
            'restitution': 0.3,
            'friction': 0.5,
            'density': 1.2
        }

        this.body = Bodies.rectangle(x,y,20,20,options);
        this.width = 20;
        this.height = 20;

        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    strokeWeight(5);
    stroke("white"); 
    rectMode(CENTER);
    fill("pink");
    rect(0,0,this.width, this,height); 
    pop();



    }


}