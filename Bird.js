class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smoke = loadImage("sprites/smoke.png");

    this.path = [];

  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();
    var position = [this.body.position.x,this.body.position.y];
    console.log(position);
    if(this.body.position.x > 220) {
      this.path.push(position);
    }
    for(var index = 0; index<this.path.length; index =index+1) {
      image(this.smoke, this.path[index][0],this.path[index][1]);
    }
  }
}
