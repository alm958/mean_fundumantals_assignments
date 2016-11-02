function runningLogger() {
    console.log("I am running!")
}

runningLogger();

function multiplyByTen(input){
    result = input*10;
    //added console.log to confirm result. result is also returned
    console.log(result);
    return result;
}

multiplyByTen(5);

function stringReturnOne(){
    return "I'm string one!"
}

function stringReturnTwo(){
    return "I'm string two!"
}
//there return a string Note we did not console.log it
stringReturnOne();
stringReturnTwo();
//just to see where I am
console.log('you are here');
function caller(callback){
    if (typeof callback == 'function'){
        callback();
    }
    else {
        console.log("caller's argument was not a function as required.")
    }
}

caller(runningLogger);
caller("hi");

function myDoubleConsoleLog(callback1, callback2){
    if (typeof callback1 == 'function' && typeof callback2 == 'function') {
        console.log(callback1());
        console.log(callback2());
    }
    else {
        console.log("myDoubleConsoleLog's arguments must both be functions.")
    }
}

console.log('here goes myDoubleConsoleLog(stringReturnOne,stringReturnTwo)')
myDoubleConsoleLog(stringReturnOne,stringReturnTwo);

function caller2(callback){
    console.log('starting');
    if (typeof callback == 'function'){
        setTimeout(callback, 2000);
        console.log('ending');
        return "interesting";
    }
    else{
        console.log("caller2's argument must be a function");
    }
}
console.log('first caller2 call (passed it an int instead of a function)');
caller2(35);
console.log('second caller2 call (with runningLogger function)');
caller2(runningLogger);
