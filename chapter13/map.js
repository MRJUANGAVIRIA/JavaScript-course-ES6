//Chapter XIV Map => similar  hash  of ruby
var myMap = new Map();

//Methods
//set() => for create a porperty of Map
//get() => for obtein a property of Map
//size
//clear()
//has()
//delete()

myMap.set('foo','bar');
myMap.set('hello','world');
console.log(myMap);
console.log(myMap.get('hello'));
console.log(myMap.size);
console.log(myMap.has('foo'));
myMap.set('nothing','ever');
console.log(myMap);
myMap.delete('foo'); //delete key foo
console.log(myMap);
// myMap.clear(); //Delete all element of myMap
// console.log(myMap);

//Iterators
//keys();
//entries();
//values

for(var key of myMap.keys()) {
  console.log(key);
}

for(var value of myMap.values()) {
  console.log(value);
}

for(var [key, value]of myMap.entries ()) {
  console.log(key + ' => ' + value);
}

//Weakmap. The Key has to be function or object
var myWeakMap = new WeakMap();
var myObject = {};
var myFunc = function(){};
var myString = 'Juan';

myWeakMap.set(myObject, 'bar');
myWeakMap.set(myFunc, 'bar');
console.log(myWeakMap); //myWeakMap is ready
myWeakMap.set(myString, 'bar'); //MyWeakMap is invalid because It doesn't has a key "String"



