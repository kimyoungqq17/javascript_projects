const simpleShoppingCart = [10, 20, 25, 5, 10]; 

const shoppingCart = [
  {
    sku:"1234",
    price: 10,
    type: "t-shirt"
  }, 
  {
    sku:"1234",
    price: 10,
    type: "t-shirt"
  }, 
  {
    sku:"1234",
    price: 10,
    type: "t-shirt"
  }, 
  {
    sku:"1234",
    price: 10,
    type: "t-shirt"
  }, 
  {
    sku:"1234",
    price: 10,
    type: "tutorial"
  }
]

// .filter
// iterates over array, determines what is filtered 
//returns new array
//returns same or less amount of items in array 
//map returs same amount of items array 

const filteredCart0 = simpleShoppingCart.filter(value => {
  return value <= 10; 
});

const filteredCart1 = shoppingCart.filter(product => {
  return product.type === 'tutorial'; 
})

const filteredCart2 = simpleShoppingCart.filter(({type}) => type === 'tutorial');

const filteredCart3 = shoppingCart.filter(({type}) => {
  return type === 'tutorial';
}).filter(product => {
  return product.price > 20;
}).map(product => ({...product, extra: product.price * 10})); 

console.log(shoppingCart);
console.log(filteredCart2);
