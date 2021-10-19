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
];

const totals = orders.map((item) => item.total);
console.log('totals', totals);

const newOrders = orders.map((item) => {
  //Se guarda la referencia al objeto, MAL
  //item.tax = 0.19;
  //return { ...item  };

  //Se hace una copia, BIEN
  return { ...item, tax: 0.19 };
});
console.log('newOrders', newOrders);
console.log('orders', orders);
