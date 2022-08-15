//.reduce
//iterattes over arry, uses values, to output one value
//outputs single value 

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

const total = simpleShoppingCart.reduce((total, currentPrice) => {
  return total + currentPrice; 
})

