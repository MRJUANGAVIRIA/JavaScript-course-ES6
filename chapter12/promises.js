//CHAPTER XII

//With False
var d = new Promise((resolve, reject) => {
  if (true) {
    resolve('Hello World');
  } else {
    reject('no bueno ')
  }
});

d.then((data) => console.log('success : ', data));
d.catch((error) => console.error('error: ', error));

//With False
var d = new Promise((resolve, reject) => {
  if (true) {
    resolve('Hello World');
  } else {
    reject('no bueno ')
  }
});

d.then((data) => console.log('success : ', data));
d.catch((error) => console.error('error: ', error));

//Timeout with only .them method
var d = new Promise((resolve, reject) => {
  setTimeout(() => {
   if (false) {
    resolve('Hello World');
    } else {
      reject('no bueno ')
    }
  }, 2000);
});

d.then((data) => console.log('success : ', data), (error) => { console.error('new error msg: ', error)});
