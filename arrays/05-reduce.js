const totals = [1, 2, 3, 4];

const result = totals.reduce((sum, item) => sum + item, 0);
console.log('result', result);

const numbers = [
  1, 3, 2, 3, 1, 10, 4, 5, 3, 7, 5, 6, 8, 9, 10, 1, 4, 7, 2, 8, 5, 0, 12, 4, 13,
  11, 5, 0, 100,
];
const rta = numbers.reduce((obj, n) => {
  obj[n] = !obj[n] ? 1 : obj[n] + 1;
  return obj;
}, {});
console.log('rta', rta);

const data = [
  {
    name: 'Nicolas',
    level: 'low',
  },
  {
    name: 'Andrea',
    level: 'medium',
  },
  {
    name: 'Zulema',
    level: 'hight',
  },
  {
    name: 'Santiago',
    level: 'low',
  },
  {
    name: 'Valentina',
    level: 'medium',
  },
  {
    name: 'Lucia',
    level: 'hight',
  },
];

const levelsNum = data
  .map((item) => item.level)
  .reduce((obj, level) => {
    obj[level] = !obj[level] ? 1 : obj[level] + 1;
    return obj;
  }, {});
console.log('levelsNum', levelsNum);

const range = numbers.reduce(
  (obj, n) => {
    if (n >= 1 && n <= 5) {
      obj['1-5'] += 1;
    } else if (n >= 6 && n <= 8) {
      obj['6-8'] += 1;
    } else if (n >= 9 && n <= 10) {
      obj['9-10'] += 1;
    } else obj['out'] += 1;

    return obj;
  },
  {
    '1-5': 0,
    '6-8': 0,
    '9-10': 0,
    out: 0,
  }
);
console.log('Range:', range);
