const words = ['spray', 'limit', 'elite', 'exuberant'];

const newAray = words.filter((item) => item.length >= 6);
console.log('newArray', newAray);

const orders = [
  {
    customerName: 'Nicolas',
    total: 60,
    delivered: true,
  },
  {
    customerName: 'Zulema',
    total: 120,
    delivered: false,
  },
  {
    customerName: 'Santiago',
    total: 180,
    delivered: true,
  },
  {
    customerName: 'Valentina',
    total: 240,
    delivered: true,
  },
  {
    customerName: 'Andres',
    total: 256,
    delivered: true,
  },
];

const ordersFilter = orders.filter(
  (item) => item.delivered && item.total >= 100
);
console.log('ordersFilter', ordersFilter);

const search = (query, array) => {
  return array.filter((item) => {
    return item.customerName.includes(query);
  });
};
console.log('search', search('a', ordersFilter));
