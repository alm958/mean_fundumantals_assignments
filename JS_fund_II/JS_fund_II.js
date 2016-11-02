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
