const numbers = [1, 30, 49, 29, 10, 13];

console.log(
  'N = 30? ->',
  numbers.find((n) => n === 30)
);
console.log(
  'N = 5? ->',
  numbers.find((n) => n === 5)
);

const products = [
  {
    name: 'Pizza',
    price: 12,
    id: '🍕',
  },
  {
    name: 'Burger',
    price: 23,
    id: '🍔',
  },
  {
    name: 'Hot dog',
    price: 34,
    id: '🌭',
  },
  {
    name: 'Hot cakes',
    price: 355,
    id: '🥞',
  },
];

console.log(
  'Find 🍔 => ',
  products.find((product) => product.id === '🍔')
);

console.log(
  'Find position 🍔 => ',
  products.findIndex((product) => product.id === '🍔')
);
