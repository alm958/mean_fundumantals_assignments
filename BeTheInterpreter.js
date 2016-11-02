//problem 1

console.log(first_variable);
var first_variable = "Yipee I was first!";
function firstFunc() {
  first_variable = "Not anymore!!!";
  console.log(first_variable);
}
console.log(first_variable);

//becomes:

//no explicit assignment yet for first_variable so undefined
var first_variable
//firstFunc() is declared but not called
function firstFunc() {
  first_variable = "Not anymore!!!";
  console.log(first_variable);
}
//now first variable assignment occurs
first_variable = "Yipee I was first!";
//Then console.log first_variable
console.log(first_variable);

//therfore "Yipee I was first!" will be logged to the console and that is it.  firstFunc() is never called so it's reassignment of first_variable is not executed

////////////////////////////////////////
//problem 2

var food = "Chicken";
function eat() {
  food = "half-chicken";
  console.log(food);
  var food = "gone";       // CAREFUL!
  console.log(food);
}
eat();
console.log(food);

//becomes:

//declared but not explicitly assigned so undefined
var food;
function eat() {
  //declare but don't assign var food in the scope of eat function. creates a naming or scope conflict
  //with the var food in the parent scope making that variable from the parent scope no longer available
  //inside the eat() function.
  var food;
  //assignment to the food var declared inside the eat() function scope
  food = "half-chicken";
  console.log(food);
  //reassignment to the food var declared inside the eat() function scope
  food = "gone";       // CAREFUL!
  console.log(food);
}

eat();
//this is the first food var from the parent scope; not the one declared inside eat()
console.log(food);

//QUESTION? How can I do a console log inside eat and specify the food var from the parent scope in node?
//I saw someone use window.food to accomplish this but in Node I got error.  But it works in a browser.
//the code below prints half-chicken, gone, Chicken, Chicken

var food = "Chicken";
function eat() {
  food = "half-chicken";
  console.log(food);
  var food = "gone";       // CAREFUL!
  console.log(food);
  console.log(window.food);
}
eat();
console.log(food);

/////////////////////////
//problem 3

var new_word = "NEW!";
function lastFunc() {
  new_word = "old";
}
console.log(new_word);

//becomes:

//declaration pre-assignment (undefined)
var new_word;
//function declaration
function lastFunc() {
  new_word = "old";
}

//now the assignment
new_word = "NEW!";

//lastFunc() was declared but never called so it's assignment for new-world is never executed
//will print NEW!
console.log(new_word);
