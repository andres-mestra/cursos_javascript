const elements = [1, 1, 2, 2];
const othersElements = [3, 3, 4, 4];

console.log('Concat numbers: ', elements.concat(othersElements));
console.log('Concat con split operation, ', [...elements, ...othersElements]);
