const numbers = [2, 5, 3, 6, 9, 0, 2, 7];
const number = numbers.includes(0);
if (number) {
  console.log('Existe el numero');
} else {
  console.log('No existe el numero');
}

const base = 6;
const expo = 2;
console.log('Elevar una base: ', base ** expo);
