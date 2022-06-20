class Vector{

  constructor(x, y){
    this.x = x;
    this.y = y;      
  }

  add(v){
    if (v instanceof Vector) 
    return new Vector(this.x + v.x, this.y + v.y);
  }

  subtract(v){
    if (v instanceof Vector) 
    return new Vector(this.x - v.x, this.y - v.y);
  }
  
  multiply(v){
    if (v instanceof Vector) 
    return new Vector(this.x * v.x, this.y * v.y);
  }

  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }

  unit(){
    return new Vector (this.x / this.length(), this.y / this.length())
  }

  angle(){
    
    return Math.atan2(this.x, this.y) * 180 / Math.PI;
  }
}

const a = new Vector(-1, 1);
console.log(a);
const b = new Vector(2, 2);
console.log(b);

const sum = a.add(b);
console.log(sum);

const sub = a.subtract(b);
console.log(sub);

const mul = a.multiply(b);
console.log(mul);

const len = a.length(a)
console.log(len);

const unit = a.unit(a);
console.log(unit);

const angle = a.angle(a);
console.log(angle);

