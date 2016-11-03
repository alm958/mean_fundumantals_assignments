function VehicleConstructor(name,wheel_count,passenger_count){
    var vehicle = {};
    vehicle.name = name;
    vehicle.wheel_count = wheel_count;
    vehicle.passenger_count = passenger_count;
    vehicle.makeNoise = function(noise){
        noise = noise || 'beep-beep'
        console.log(`The ${vehicle.name} says ${noise}`);
        return vehicle;
    }
    return vehicle;
}

var bike = VehicleConstructor('bike', 2, 1);

bike.makeNoise('ring-ring');

bike.makeNoise = function(noise){
    noise = noise || 'ring-ring'
    console.log(`The ${bike.name} says ${noise}`);
    return bike;
}

bike.makeNoise().makeNoise().makeNoise()

var sedan = VehicleConstructor('sedan',4,4);

sedan.makeNoise('honk-honk').makeNoise().makeNoise('ahooga-ahooga');
bike.makeNoise('ahooga-ahooga');

var bus = VehicleConstructor('bus', 4,12);

bus.pickUpNDropOve = function(passengerDelta){
    if (- passengerDelta > bus.passenger_count){
        passengerDelta = - bus.passenger_count;
    }
    bus.passenger_count += passengerDelta;
    var direction = 'on';
    if (passengerDelta < 0){
        direction = 'off';
    }
    console.log(`${Math.abs(passengerDelta)} passengers just got ${direction} the bus.`);
    console.log(`The new passenger count is ${bus.passenger_count}.`);
    return bus;
}

bus.pickUpNDropOve(5).makeNoise().pickUpNDropOve(-5).makeNoise('hooonk').pickUpNDropOve(-50).pickUpNDropOve(-50)
