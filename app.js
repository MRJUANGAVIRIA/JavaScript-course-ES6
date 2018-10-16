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