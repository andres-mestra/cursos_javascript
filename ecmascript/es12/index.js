const string =
  'Javascript es maravillozo, con Javascript puedo crear el futuro de la web';

const replaceString = string.replace('Javascript', 'Python');
console.log(replaceString);

// no disponible en nodejs 14.17.6
const replaceAllString = string.replaceAll('Javascript', 'Python');
console.log(replaceAllString);

const promise1 = new Promise((resolve, reject) => reject('reject'));
const promise2 = new Promise((resolve, reject) => resolve('resolve'));
const promise3 = new Promise((resolve, reject) => resolve('resolve 1'));
// no disponible en nodejs 14.17.6
//Devuelve el valor de la primer promesa que se resuelve
console.log(Promise.any([promise1, promise2, promise3]));

// no disponible en nodejs 14.17.6
class anyClass {
  constructor(element)
  this.ref = new WeakRef(element)
}

// 🧪 Nuevos operadores lógicos
// no disponible en nodejs 14.17.6
let isTrue = true;
let isFalse = false;
console.log(isTrue &&= isFalse);

let isTrue = true;
let isFalse = false;
console.log(isTrue ||= isFalse);

let isTrue = true;
let isFalse = false;
console.log(isTrue &&= isFalse);