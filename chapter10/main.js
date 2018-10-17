// First way
// import  {sumTwo, sumThree}  from './add.js';

// console.log(
//   "2 + 3",
//   sumTwo(2, 3)
// );

// console.log(
//   "2 + 3 + 5",
//   sumThree(2, 3, 5)
// );


// Second way with alias => as

// import  {
//   sumTwo as addTwonumbers,
//   sumThree as addThreenumbers
// }  from './add.js';

// console.log(
//   "2 + 3",
//   addTwonumbers(2, 3)
// );

// console.log(
//   "2 + 3 + 5",
//   addThreenumbers(2, 3, 5)
// );

//Third way as addition import users of folder users.js
// import * as addition from './add.js';
// import {users} from './users.js';

// console.log(users);

// console.log(
//   "2 + 3",
//   addition.sumTwo(2, 3)
// );

// console.log(
//   "2 + 3 + 5",
//   addition.sumThree(2, 3, 5)
// );

//With lodash
import * as _ from './node_modules/lodash//lodash.js';
import * as addition from './add.js';
import {users} from './users.js';

console.log(_.where(users, {age: 36}));

console.log(
  "2 + 3",
  addition.sumTwo(2, 3)
);

console.log(
  "2 + 3 + 5",
  addition.sumThree(2, 3, 5)
);