
class Box{
  constructor(x, y, width, height, angle) {
      var options = {
          
        'restitution':0.8,
         'friction':1.0,
          'density':1.0
         
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var angle = this.body.angle;
      push();
      push();
      //World.remove(world,this.body)
      this.visiblity=this.visiblity-5
      tint(255,this.visiblity)
      
      translate(this.body.position.x, this.body.position.y);
      angleMode(RADIANS)
      rotate(angle)
      rectMode(CENTER);
      rect( 0, 0, this.width, this.height);
      pop();
    
   
    
   
     
    }

      
    
  
}