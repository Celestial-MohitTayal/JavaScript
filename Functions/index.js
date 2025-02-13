// FUNCTION Interview Questions

// Question 1 : Function Code
function square(num) {
  return num * num;
}
function displaySquare(fn) {
  console.log("Square is " + fn(5));
}
displaySquare(square);

// Question 2 :  What is IIFE?
// Eg-1
(function square(num) {
  console.log(num * num);
})(7);
square(8);
// Eg-2
(function (x) {
  return (function (y) {
    console.log(x);
  })(2);
})(1);

// Question 3 : Closure
function init() {
  var name = "Mozilla"; // name is a local variable created by init
  function displayName() {
    // displayName() is the inner function, that forms the closure
    console.log(name); // use variable declared in the parent function
  }
  displayName();
}
init();

// Question 4 : Function Scope
// Q-1
var num1 = 20,
    num2 = 3,
    name = "Roadsidecoder";

function mul() {
  return num1 * num2;
}
mul(); //60

function getScore() {
  var num1 = 3,
      num2 = 4;
  function add() {
    return name + " scored " + (num1 + num2);
  }
  return add();
}
getScore(); // Roadsidecoder scored 7

// Q-2
for (let i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i); // 0,1,2,3,4,
  }, i * 1000);
}

for (var i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i); // 5 times 5
  }, i * 1000);
}

// Question 5 : Function Hoisting
// Without Hoisting:
function functionName() {
    console.log("work at tech");
}
functionName();         // function is called after declaring it

// With Hoisting:
functionName();        // function is called before declaring it
function functionName() {
    console.log("work at tech");
}

// Output
var x = 21;
var fun = function () {
    console.log(x);
    var x = 20;
};
fun(); //undefined

// Question 6 :  Params vs arguments
const fn = (a, x, y, ...numbers) => {
    console.log(a, x, y, numbers) // 5, 6, 7, [8,9,10] -> Rest Operator
};
fn(5,6,7,8,9,10);

// Question 7 : Spread operator and rest operator
function multiply(...nums){  // rest operator ,should always be the last one
    console.log(nums[0]*nums[1]);
}
var arr = [5,7];
multiply(...arr) // Spread operator  -> multiply(5,7)

// Question 8 : Callback
function greeting(name) {
    alert('Hello ' + name);
}

function processUserInput(callback) {
    var name = prompt('Please enter your name.');
    callback(name);
}

processUserInput(greeting);

// Question 9 : Arrow functions
const add = (firstNum, secondNum) => {
    return firstNum + secondNum;
}

const addNum = (firstNum, secondNum) => firstNum + secondNum;

// Question 10 : this
let user = {
    name: "Roadside Coder",
    rc1: () => {
      console.log("Subscribe to " + this.name);
    },
    rc2() {
      console.log("Subscribe to " + this.name);
    },
};


