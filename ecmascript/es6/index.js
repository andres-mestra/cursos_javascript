function newFunction(name, age, country) {
  var name = name || 'Andres';
  var age = age || 24;
  var country = country || 'Colombia';
  console.log({ name, age, country });
}

//es6
function newFunction2(name = 'Andres', age = 24, country = 'Colombia') {
  console.log({ name, age, country });
}

newFunction2();
newFunction2('Lau', 21, 'Belgica');

//template iteral
let hello = 'Hello';
let world = 'World';

let epicPhrase = `${hello} ${world}`;
console.log(epicPhrase);

let lorem = 'Esta es una frase epica\nesta debe se otra línea.';
let lorem2 = `Otra frase epica
pero ahora no necesito el carapter especial`;
console.log(lorem);
console.log(lorem2);

let person = {
  name: 'Andres',
  age: 24,
  country: 'Colombia',
};
console.log('Antes de es6: ', person.name, person.age, person.country);
let { name, age, country } = person;
console.log('Despues de es6: ', name, age, country);
