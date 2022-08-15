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
    type: "t-shirt"
  }
]

//.map
//iterates over array, perform function on each item
//returns new array 
const discountCart = simpleShoppingCart.map((value) => {
  return value * 0.75;
});

const discountCart2 = simpleShoppingCart.map(value => value * .75);


console.log(simpleShoppingCart);
console.log(discountCart);


const discountCart3 = shoppingCart.map((value) => {
  // return value.price * .75; 
  return {
    ...value,
    salePrice: value.price * .75
  }
});

console.log(shoppingCart);
