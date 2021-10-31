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

const helloWorld = () => {
  return new Promise((resolve, reject) => {
    true ? setTimeout(() => resolve('Hello world'), 3000) : reject('Error');
  });
};

const helloAsync = async () => {
  const hello = await helloWorld();
  console.log('Async hello: ', hello);
};

helloAsync();
