// constructor
function Owner (name) {
  this.name = name;
  this.bikes = [];
}

// instance methods
Owner.prototype.buildBike = function(name, type, color){
  newBike = new Bike(name, type, color);
  this.bikes.push(newBike);
};

Owner.prototype.rideBike = function(bike, miles){
  this.bikes.forEach(function(object) {
    if (object.name == bike){
      object.takeForARide(miles);
    }
  });
};