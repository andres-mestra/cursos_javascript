const matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log('Aplanar array', matriz.flat());

const matriz2 = [
  [1, 2, 3],
  [4, [5, 6]],
  [7, 8, 9],
];
console.log('Aplanar array n2', matriz.flat(2));
