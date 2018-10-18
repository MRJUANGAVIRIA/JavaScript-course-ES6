// rest parameter vs arguments keyword

function myFunc(){
  console.log(arguments);
}
myFunc(1, 2, 3);

//
function Store() {
  var aisle = {
    fruit: [],
    vegetable: []
  }

  return {
    //Store().add('category','item1', 'item2')
    add: function(category, ...items){
      items.forEach(function(value, index, array){
        aisle[category].push(value);
      });
    },
    aisle: aisle
  }
}

var MyGroceyStore = new Store();
MyGroceyStore.add('fruit', 'apples', 'oranges');
console.log(MyGroceyStore.aisle);