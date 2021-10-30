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

let = team1 = ['Oscar', 'Julian', 'Ricardo'];
let = team2 = ['Valeria', 'Yesica', 'Camila'];

let education = ['David', ...team1, ...team2];
console.log({ education });

// LET y CONTS
{
  var globalVar = 'GlobalVar';
}
{
  let globalLet = 'GlobalLet';
  console.log(globalLet);
}
console.log(globalVar);
//console.log(globalLet);

const a = 'b';
//a = 'a'; //error

let myName = 'Andres';
let myAge = 24;

obj = { myName, myAge };
console.log({ obj });

// Arrow functions
const names = [{ name: 'Andres' }, { name: 'Yessica' }];

let listOfNames = names.map((item) => item.name);
console.log({ listOfNames });

const helloPromise = (valid = true) => {
  return new Promise((resolve, reject) => {
    if (valid) {
      resolve('Ey!');
    } else {
      reject('Ups!!');
    }
  });
};

helloPromise().then(console.log).catch(console.log);
helloPromise(false).then(console.log).catch(console.log);
