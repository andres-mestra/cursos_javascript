const months = ['March', 'Jan', 'Feb', 'Dec'];
console.log('Meses, ', months.sort());

const numbers = [1, 30, 4, 21, 100000];
console.log('Numeros sin comparación, ', numbers.sort());
console.log(
  'Numeros con comparación, ',
  numbers.sort((a, b) => b - a)
);

const words = [
  'réservé',
  'premier',
  'communiqué',
  'café',
  'adieu',
  'éclair',
  'banana',
];
console.log('Words, ', words.sort());

const orders = [
  {
    customerName: 'Nicolas',
    total: 600,
    delivered: true,
    date: new Date(2021, 1, 1, 15),
  },
  {
    customerName: 'Zulema',
    total: 120,
    delivered: false,
    date: new Date(2021, 1, 1, 10),
  },
  {
    customerName: 'Santiago',
    total: 1840,
    delivered: true,
    date: new Date(2021, 1, 1, 20),
  },
  {
    customerName: 'Valentina',
    total: 240,
    delivered: true,
    date: new Date(2021, 1, 1, 8),
  },
];

console.log(
  'Orders, ',
  orders.sort((a, b) => b.total - a.total)
);
