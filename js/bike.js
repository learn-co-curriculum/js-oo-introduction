// constructor
function Bike (name, type, color) {
  this.name = name;
  this.bikeType = type;
  this.frameColor = color;
  this.condition = 'ready to go!';
}

// instance methods
Bike.prototype.takeForARide = function(miles){
  if (miles > 50) {
    this.condition = 'needs a tune up';
  }
};

Bike.prototype.tuneUp = function(){
  if (this.condition == 'needs a tune up'){
    this.condition = 'ready to go!';
  }
};

Bike.prototype.WHEELS = 2;