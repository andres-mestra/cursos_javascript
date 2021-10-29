const elements = ['Fire', 'Air', 'Water'];
console.log('Join elements, ', elements.join('--'));

const title = 'Curso de manipulación de arrays ';
const url = title.trim().split(' ').join('-').toLowerCase();
console.log({ url });
