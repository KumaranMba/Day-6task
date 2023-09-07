//circle (radius:double,color:string)
class circle{
    constructor(radius,color) {

    this.radius = radius;
    this.color = color;
   }
  }
  //getRadius() 
  var result = new circle(1.0,"red");
  console.log(result);

  class circle{
    constructor(radius){
      this.radius = radius;
    
    }
      getRadius(){
        return "Radius:"+this.radius;

      }
    }
   var result = new circle(1.0);
   console.log(result); 
//set Radius(Radius)
     class circle{
     constructor(radius){
      this.radius = radius;
    
    }
      set Radius(modified){
        this.radius = modified;

      }  
    }
    var result = new circle(1.0);
    result.Radius = "void";
    console.log(result.radius);
//get color()
    class circle{
      constructor(color){
        this.color = color;
      }
       getcolor(){
        return"color:"+this.color;
      }
    }
    var result = new circle("Red");
    console.log(result.color);
    //set color(color)
    class circle{
      constructor(color){
       this.color = color;
     
     }
       set Color(modified){
         this.color = modified;
 
       }  
     }
     var result = new circle("red");
     result.Color = "void";
     console.log(result.color);
     
     // To string()
  
     class circle{
      constructor(string){
      this.string = string;
     }
     tostring(){
      return "String:",this.string;
     }
    }
     var value = new circle("Circle[radius =?,color =?]");
     console.log(value.string);

      //get Area()
     class circle{
      constructor(radius){
    
      this.radius = radius;
      }
      getArea(){
        return  Math.PI*this.radius*this.radius;
      }
     }
     
     var result = new circle(1.0);
     console.log(result.getArea());

     //getcircumference ()  
     class circle{
      constructor(radius){
    
      this.radius = radius;
      }
      getcircumference(){
        return  2*Math.PI*this.radius;
      }
     }
     
     var result = new circle(1.0);
     console.log(result.getcircumference());

     




     
    











  