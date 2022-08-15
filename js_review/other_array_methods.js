//array.every, array.some
//expected output: either true or false

//array.forEach
//no return
//its a way to execute a new function to every element in the array 

//array.reverse()
//its destructuive
//it changes the original array

const simpleShoppingCart = [10, 20, 25, 5, 10]; 

//creating a new array
console.log([...simpleShoppingCart].reverse());
//so this doesnt get affected
console.log(simpleShoppingCart);

//[...simpleshoppingCart].reverse()
//same as
//simpleShoppingCart.slice().reverse()