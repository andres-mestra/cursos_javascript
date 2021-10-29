const numbers = [1, 30, 49, 29, 10, 13];

console.log(
  'todos N <= 40',
  numbers.every((item) => item <= 40)
);
console.log(
  'todos N <= 49',
  numbers.every((item) => item <= 49)
);

const team = [
  {
    name: 'Nicolas',
    age: 12,
  },
  {
    name: 'Andrea',
    age: 8,
  },
  {
    name: 'Zulema',
    age: 2,
  },
  {
    name: 'Santiago',
    age: 18,
  },
];

const menores = team.every(({ age }) => age <= 15);
console.log('Todos menores de 15 años: ', menores);
