class Box{
  constructor(x, y) {
    var options = {
        'isStatic': false,
        'restitution':0.3,
        'friction':0.3,
        'density':0.06,
    }

    this.body = Bodies.rectangle(x, y, 50, 30, options);
    this.width = 50;
    this.height = 30;
    this.image = loadImage("Block.png");
    this.Visiblity = 255;
    
    World.add(world, this.body);

  }
  
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;

    

    if(this.body.speed < 3){
      push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER); 
        image(this.image,0,0,this.width,this.height);
      pop();
     }
    

    else{
     World.remove(world, this.body);
     push();
     
     if(this.Visiblity>-1){
       this.Visiblity = this.Visiblity - 5;
      }
     
     tint(255,this.Visiblity);
     image(this.image, this.body.position.x, this.body.position.y, 50,30);
     pop();
   }
  }
  score(){
    if(this.Visiblity<255 && this.Visiblity>= -1){
      score++;
    }
   }
};
