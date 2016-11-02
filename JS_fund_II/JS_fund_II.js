function SumRange(x,y){
    var sum = 0;
    for (var i = x; i <= y; i++){
        sum += i;
    }
    console.log(sum);
}

SumRange(5,10);
SumRange(0,3);

function ArrayMin(arr){
    min = arr[0];
    for (var i = 1; i < arr.length; i++){
        if (arr[i] < min){
            min = arr[i];
        }
    }
    return min;
}

myArr = [9,8,7,6,5,4,-3,2,1,0];
console.log(ArrayMin(myArr));

function ArrayMean(arr){
    var sum = arr[0];
    for (var i = 1; i < arr.length; i++){
        sum += arr[i];
    }
    var mean = sum / arr.length;
    return mean;
}

myArr2 = [0,1,2,3,4,5,6,7,8,9,10];
console.log(ArrayMean(myArr2));
//anonymous functions:

//the initial function just console.logged the sum.  here it was changed to return the sum
var RangeSum = function (x,y){
    var sum = 0;
    for (var i = x; i <= y; i++){
        sum += i;
    }
    return sum;
}

var testSum = RangeSum(0,3);
console.log(testSum);

var MinArray = function (arr){
    min = arr[0];
    for (var i = 1; i < arr.length; i++){
        if (arr[i] < min){
            min = arr[i];
        }
    }
    return min;
}

var testMin = MinArray(myArr);
console.log(testMin);

var MeanArray = function (arr){
    var sum = 0;
    for (var i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    var mean = sum / arr.length;
    return mean;
}
var testMean = MeanArray(myArr2);
console.log(testMean);

var SomeObject = {
    SumORange : function (x,y){
        var sum = 0;
        for (var i = x; i <= y; i++){
            sum += i;
        }
        return sum;
    },//end SumORange
    GetArrMin : function (arr){
        min = arr[0];
        for (var i = 1; i < arr.length; i++){
            if (arr[i] < min){
                min = arr[i];
            }
        }
        return min;
    },//end GetArrMin
    GetArrMean : function (arr){
        var sum = 0;
        for (var i = 0; i < arr.length; i++){
            sum += arr[i];
        }
        var mean = sum / arr.length;
        return mean;
    }//end GetArrMean
}

var test2minarr = SomeObject.GetArrMin(myArr);
console.log(test2minarr);
var test2meanarr = SomeObject.GetArrMean(myArr2);
console.log(test2meanarr);
var test2sumarr = SomeObject.SumORange(0,3);
console.log(test2sumarr);

var person = {
    name : 'Tony',
    distance_traveled : 0,
    say_name : function(){
        console.log(person.name);
        return person;
    },
    say_something : function(string){
        console.log(`${person.name} says ${string}`);
        return person;
    },
    walk : function(){
        console.log(`${person.name} is walking.`);
        person.distance_traveled += 3;
        return person;
    },
    run : function(){
        console.log(`${person.name} is running.`);
        person.distance_traveled += 10;
        return person;
    },
    crawl : function(){
        console.log(`${person.name} is crawling.`);
        person.distance_traveled += 1;
        return person;
    }
}

person.walk().run().crawl();

console.log(person.distance_traveled);
console.log(person);
