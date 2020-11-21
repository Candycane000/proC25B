class Paper {
    constructor(x,y,width) {
      var options = {
        isStatic:false,
        restitution : 0.3,
        friction : 0.5,
        density : 0.5
      }
      this.body = Bodies.circle(x,y,width ,options);
      this.image=loadImage("sprites/paper.png")
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      imageMode(CENTER);
      fill("white");
      image(this.image,0,0,40,40);
      pop();
    }
  };