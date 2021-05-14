class plant{

    constructor(x,y,width,height){

    
    var options = {
         
        'isStatic': true,
        'restitution':0.5,
        'friction':0.5,
        'density':1.0
    }
    

    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height; 
    this.image = loadImage("plant1.png");
    World.add(world, this.body);
}

display(){

  var pos = this.body.position;
  
  pos.y = mouseY

  push();
  translate (pos.x,pos.y);
  imageMode(CENTER);
  image(this.image,0,0, this.width, this.height);
  pop();
 
}
}