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




