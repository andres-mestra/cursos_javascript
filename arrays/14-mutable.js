const products = [
  { title: 'Pizza', price: 121, id: '🍕' },
  { title: 'Burger', price: 121, id: '🍔' },
  { title: 'Hot cakes', price: 121, id: '🥞' },
];

const myProducts = [];
function printProducts() {
  console.log('products, ', products);
  console.log('myProducts, ', myProducts);
  console.log('-'.repeat(10));
}
printProducts();

const productIndex = products.findIndex((item) => item.id === '🍔');
const newArray = [...products.filter((item) => item.id !== '🍔')];
if (productIndex !== -1) {
  myProducts.push(products[productIndex]);
}
console.log('newArray, ', newArray);
printProducts();
