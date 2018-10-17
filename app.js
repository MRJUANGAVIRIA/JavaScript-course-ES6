// CHAPTER I
// Two ways to create function
var createGreeting = function(message, name){
  return message + name;
}

var arrowGreeting = (message,name) => message + name;

var squared = x => x * x;

// Example

var deliveryBoy = {
  name: "Juan",
  handleMessage: function (message, handler){
    handler(message);
  },
  receive: function () {
    this.handleMessage("Hello, ", message => console.log(message + this.name))
  }
}
deliveryBoy.receive();

// CHAPTER II Scopes var and keyword let
// message is overwritten
var message = "Hello";
{
  message = "Hi";
}
console.log(message);

// Using let Messages isn't overwritten, and messages are differents
let message = "Hello";

{
  let message = "Hi";
}

console.log(message);

// Other example
var fs = [];

for (let i = 0; i < 10; i++){
  fs.push(function (){
    console.log(i);
  })
}

fs.forEach(function(f) {
  f();
})

//CHAPTER III Default values for function parameters

// Function withput defaulf parameters
function greet(greeting,name){
  console.log(greeting + ", " + name);
}
greet();

// Function with defaulf parameters
function greet(greeting,name = "Juan"){
  console.log(greeting + ", " + name);
}
greet("Hello");

//Example Function with default function with arrow notation
function receive(complete = () => console.log("Complete")){
  complete();
}
receive();

// Chapter IV Contant declarations and the constant has a scope

const VALUE = 'HELLO WORLD';
VALUE = "JUAN"; //Generate an error because I don't assign value of a constant
console.log('value: ', VALUE);

//Scope constant
if (true){
  const foo = 'bar';
}
console.log('foo: ', foo);

if (true){
  const foo = 'bar';
  console.log('foo: ', foo);
}

// CHAPTER V
// Shorthand properties for Objects

let firstName = "Juan";
let lastName = "Gaviria";

let person = {firstName, lastName};

console.log(person);

let mascot = "Moose";

let team = {person, mascot};

console.log(team);

// CHAPTER VI objects with enhancements

var color = "red";
var speed = 10;
function go(){
  console.log("room room");
}
var car = {color, speed, go};

console.log(car.color);
console.log(car.speed);

// CHAPTER VII SPREAD OPERATOR ...
console.log([1, 2, 3]);
console.log(...[1, 2, 3]);

let first = [1, 2, 3];
let second = [4, 5, 6];

first.push(...second)
console.log(first)

function addThreeThings(a, b, c){
  let result = a + b + c;
  console.log(result);
}
addThreeThings(...second)

// CHAPTER VIII String Templates
var salutation = 1000;
var greeting = `
${salutation}

    crazy      World
Hello                      How

are
        you?

`;
console.log(greeting);

// Other Example
var x = 1;
var y = 2;
var equation = `${x} + ${y} = ${x + y}`;
console.log(equation);

// Other Example
var message = `It's ${new Date().getHours()} I'm sleepy`;
console.log(message);

// Other Example II
function tag(strings, ...values){
  if (values[0] < 23){
    values[1] = "awake";
  }
  else {
    values[1] = "sleppy";
  }
  return `${strings[0]}${values[0]}${strings[1]}${values[1]}`
}

var message = tag `It's ${new Date().getHours()} I'm ${""}`;
console.log(message);























