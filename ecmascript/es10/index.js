let array = [1, 2, 3, [1, 2, 3, [1, 2, 3]]];

console.log(array.flat());
console.log(array.flat(2));
//tambien el flatMap

//trimStart, trimEnd
let hello = '            hello world';
console.log(hello);
console.log(hello.trimStart());

//Error opcional en try catch
try {
} catch {
  error; // lo crea en el scope
}

let entries = [
  ['name', 'oscar'],
  ['age', 32],
];
console.log(Object.fromEntries(entries));
