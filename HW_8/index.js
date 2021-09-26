//задание 1
class Circle {

    constructor(radius) { 
        this.radius=radius
     }

    get radius() {
        return this._radius;
      }

    set radius(value) {
        this._radius = value;
      } 

    get diameter() {
        return this.radius*2;
    }  
    squareCircle(){
        const pi=3.14;
        return pi*(this.radius*this.radius);
    }
    
    lengthCircle(){
        const pi=3.14;
      return pi*this.diameter;
    }
  }
  let circle = new Circle (2);
  alert (circle.radius);
  alert (circle.squareCircle());
  alert (circle.lengthCircle());
  console.log(Circle);
  