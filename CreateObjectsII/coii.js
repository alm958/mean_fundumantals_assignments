function VehicaleConstructor(name, wheel_count, passenger_count, speed){
    var distance_travelled = 0;
    function updateDistanceTravelled(){
        distance_travelled += speed;
    }

    this.name = name;
    this.wheel_count = wheel_count;
    this.passenger_count = passenger_count;
    this.speed = speed;
    this.makeNoise = function(noise){
        noise = noise || 'beep-beep.';
        console.log(`The ${this.name} says ${noise}`);
        return this;
    }
    this.move = function(){
        updateDistanceTravelled();
        this.makeNoise('vroom-vroom');
        return this;
    }
    this.checkMiles = function(){
        console.log(`The ${this.name} has gone ${distance_travelled} miles`);
        return this;
    }
}

var bike = new VehicaleConstructor("PeeWee's X-1",2,1,10);

bike.makeNoise = function(noise){
    noise = noise || 'ring ring!';
    console.log(`${bike.name} says ${noise}.`);
    return bike;
}

bike.makeNoise().makeNoise('vroom-vroom');

var sedan = new VehicaleConstructor('sedan',4,6,40);

sedan.makeNoise = function(noise){
    noise = noise || 'Honk Honk!';
    console.log(`The ${sedan.name} says ${noise}.`);
    return sedan;
}

sedan.makeNoise().makeNoise('ahooga-ahooga');

var bus = new VehicaleConstructor('bus',4,12,25);

bus.pickUpNDropOve = function(passenger_delta){
    if (- passenger_delta > bus.passenger_count){
        passenger_delta = - bus.passenger_count;
    }
    var direction = 'on';
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
