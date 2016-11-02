var x;
x = [3,5,'Dojo', 'rocks', 'Michael', 'Sensei'];

for (var i = 0; i < x.length; i++){
    console.log(x[i]);
}

x.push(100);
var sum = 0;
Array.prototype.push.apply(x, ["hello", "world", "JavaScript is Fun"] );
console.log(x);
for (var i = 1 ; i <= 500; i++){
    sum += i;
}
console.log(sum);
var narr = [1, 5, 90, 25, -3, 0];
var min = narr[0];
var count = 0;
sum = 0;
for (var i = 1; i < narr.length; i++){
    sum += narr[i];
    count++;
    if (narr[i]< min){
        min = narr[i];
    }
}
console.log(min);
var mean = sum/count;
console.log(mean);

var new_ninja = {
 name: 'Jessica',
 profession: 'coder',
 favorite_language: 'JavaScript', //like that's even a question!
 dojo: 'Dallas'
}

for (var attribute in new_ninja){
    console.log(attribute ,":", new_ninja[attribute]);
}
