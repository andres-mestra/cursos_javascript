const button = document.getElementById('btn');
//dynamic import
button.addEventListener('click', async () => {
  const module = await import('./file.js');
  module.hello();
});

const aBigNumber = 9007199254740991n;
const anotherBigNumber = BigInt(9007199254740991);

console.log(aBigNumber);
console.log(anotherBigNumber);

const promise1 = new Promise((resolve, reject) => reject('reject'));
const promise2 = new Promise((resolve, reject) => resolve('resolve'));
const promise3 = new Promise((resolve, reject) => resolve('resolve 1'));

//Responde con la respuestas de todas las promesas, así no se hayan cumplido
Promise.allSettled([promise1, promise2, promise3]).then((response) =>
  console.log(response)
);

//globalThis
console.log(window); //navegador
console.log(globalThis); //node o navegador

//null operador
const foo = null ?? 'default string';
console.log({ foo });

// Optional chaining
const user = {};

console.log(user?.profile?.email);
