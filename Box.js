class Box {
  constructor(x,y, width, height) {
    var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':20,
    }
   
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.scale=0.2
 
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    strokeWeight(4);
    stroke("black");
    fill("red");
    rect(0, 0, this.width, this.height);
    pop();
    console.log(this.body.speed);
    if((this.body.speed)<13){
      this.display
    }
    else{
      World.remove(this.body)
    }
  }

}