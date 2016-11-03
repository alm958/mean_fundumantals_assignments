function personConstructor(name){
    var person = {
        name : name,
        distance_traveled : 0,
        say_name : function(){
            console.log(person.name);
            return person;
        },
        say_something : function(phrase){
            console.log(`${person.name} says ${phrase}.`)
            return person;
        },
        walk : function(){
            person.distance_traveled += 3;
            console.log(`${person.name} is walking.`);
            return person;
        },
        run : function(){
            person.distance_traveled += 10;
            console.log(`${person.name} is running.`);
            return person;
        },
        crawl : function(){
            person.distance_traveled += 1;
            console.log(`${person.name} is crawling.`);
            return person;
        }
    }
    return person;
}

var Red = personConstructor('Red');

console.log(Red);

Red.run().walk().crawl().say_something("keep on truckin'");
console.log(Red.distance_traveled);

function NinjaConstructor(name, cohort){
    var ninja = {
        name : name,
        cohort : cohort,
        belt_level : 'yellow_belt',
        level_up : function(){
            if (ninja.belt_level === 'yellow_belt'){
                ninja.belt_level = 'black_belt';
            }
            else {
                ninja.belt_level = ninja.belt_level.concat("*");
            }
            console.log(`${ninja.name} has attained ${ninja.belt_level}`);
            return ninja;
        }
    }
    return ninja;
}

var CarlosDanger = NinjaConstructor('CarlosDanger', 'Dallas');

console.log(CarlosDanger);

CarlosDanger.level_up().level_up().level_up().level_up().level_up().level_up()

var CondorLeskin = NinjaConstructor('CondorLeskin', 'Thimphu');

console.log(CondorLeskin);
CondorLeskin.level_up().level_up().level_up().level_up()
