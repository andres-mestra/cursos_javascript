const data = {
  frontend: 'Andres',
  backend: 'Isabel',
  design: 'Ana',
};

const entries = Object.entries(data);
console.log({ entries });

const values = Object.values(data);
console.log({ values });

const string = 'hello';
console.log(string.padStart(8, 'hi '));
