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

// Shorthand properties for Objects

let firstName = "Juan";
let lastName = "Gaviria";

let person = {firstName, lastName};

console.log(person);

let mascot = "Moose";

let team = {person, mascot};

console.log(team);
















