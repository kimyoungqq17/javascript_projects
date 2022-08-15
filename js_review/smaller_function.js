const fakeAPICharge = total => true;
const fakeSendRecipe = total => true; 

const cart = [10, 5, 15]; 

// const checkout = cart => {
//   let total = cart.reduce((tempTotal, item) => tempTotal + item);
//   total = total + 10; 
//   const orderSuccess = fakeAPICharge(total); 
//   if(orderSuccess) {
//     fakeSendRecipe({
//       email: "fakeemail@gmail.com",
//       total
//     });
//   }
//   return orderSuccess; 
// }

// checkout(cart); 


// const checkout = cart => {
//   const subTotal = cart.reduce((tempTotal, item) => tempTotal + item);
//   const total = subTotal + 10; 
//   const orderSuccess = fakeAPICharge(total); 
//   if(orderSuccess) {
//     fakeSendRecipe({
//       email: "fakeemail@gmail.com",
//       total
//     });
//   }
//   return orderSuccess; 
// }

// checkout(cart); 

//function should have a single responsibility

const SHIPPING_COST = 10
const getSubTotal = cart => cart.reduce((tempTotal, item) => tempTotal + item);
const getTotal = subTotal => subTotal + SHIPPING_COST;
const sendRecipt = ({email, total}) => fakeSendRecipe({
  email,
  total
})

const checkout = cart => {
  const subTotal = getSubTotal(cart);
  const total = getTotal(subTotal); 
  const orderSuccess = fakeAPICharge(total); 
  if(orderSuccess) {
    sendRecipt({email: "fakeemail@gmail.com", total});
  }
  return orderSuccess; 
}

checkout(cart); 