function Ninja(name){
  this.name = name;   // creating instance variables
  this.distance_traveled = 0;
}
// creating an instance method
Ninja.prototype.walk = function() {
    console.log(this.name + ' is walking');
    this.distance_traveled += 1;
    return this;      // have this method return its own object
  };
// creating an instance method
Ninja.prototype.run = function() {
    console.log(this.name + ' is running');
    this.distance_traveled += 5;
    this.displayDistanceTraveled();
    return this;      // have this method return its own object
  };
//another instance method
Ninja.prototype.displayDistanceTraveled = function() {
    console.log('distance traveled: ', this.distance_traveled);
}

ninja1 = new Ninja('Jay');

console.log(ninja1);
