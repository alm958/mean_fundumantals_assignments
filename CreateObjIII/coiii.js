
function VehicleConstructor(name, wheel_count, passenger_count, speed){
    const char = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    this.distance_travelled = 0;
    this.name = name;
    this.wheel_count = wheel_count;
    this.passenger_count = passenger_count;
    this.speed = speed;
    this.vin = getVin();
    function getVin(){
        let vin = '';
        for (let i = 0; i < 17; i++){
            vin += char[Math.floor(Math.random()*36)];
        }
        return vin;
    }
};

VehicleConstructor.prototype.updateDistanceTravelled = function(){
    this.distance_travelled += this.speed;
};

VehicleConstructor.prototype.makeNoise = function(noise = 'beep-beep'){
    console.log(`The ${this.name} says ${noise}`);
    return this;
};
VehicleConstructor.prototype.move = function(){
    this.updateDistanceTravelled();
    this.makeNoise('vroom-vroom');
    return this;
};
VehicleConstructor.prototype.checkMiles = function(){
    console.log(`The ${this.name} has gone ${this.distance_travelled} miles`);
    return this;
};


let bike = new VehicleConstructor("PeeWee's X-1",2,1,10);

bike.makeNoise = function(noise = 'ring ring!'){
    console.log(`${bike.name} says ${noise}.`);
    return bike;
}

bike.makeNoise().makeNoise('vroom-vroom');

let sedan = new VehicleConstructor('sedan',4,6,40);

sedan.makeNoise = function(noise = 'Honk Honk!'){
    console.log(`The ${sedan.name} says ${noise}.`);
    return sedan;
}

sedan.makeNoise().makeNoise('ahooga-ahooga');

let bus = new VehicleConstructor('bus',4,12,25);

bus.pickUpNDropOve = function(passenger_delta){
    if (- passenger_delta > bus.passenger_count){
        passenger_delta = - bus.passenger_count;
    }
    let direction = 'on';
    if (passenger_delta < 0){
        direction = 'off';
    }
    bus.passenger_count += passenger_delta;
    console.log(`${Math.abs(passenger_delta)} passengers got ${direction} the bus.`);
    console.log(`passenger count is now ${bus.passenger_count}`);
    return bus;
}
bus.makeNoise().pickUpNDropOve(4).pickUpNDropOve(2).pickUpNDropOve(-8).pickUpNDropOve(-30).pickUpNDropOve(12);

bus.move().checkMiles();

bike.move().checkMiles();

sedan.move().checkMiles();

console.log(sedan);
console.log(bus);
console.log(bike);
