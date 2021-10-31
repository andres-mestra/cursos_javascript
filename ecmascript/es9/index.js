const obj = {
  name: 'Andres',
  age: 24,
  country: 'Colombia',
};

//Operador de reposo, extrae las propiedades de un objeto que aun no se ha
//construido
let { name, ...all } = obj;
console.log(name, all);

//Propagación
const obj2 = {
  name: 'Laura',
};

const obj3 = {
  age: 21,
};

const objR = { ...obj2, ...obj3 };
console.log({ objR });

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match = regexData.exec('2018-04-20');
const year = match[1];
const month = match[2];
const day = match[3];

console.log(year, month, day);
