//Immutable vs Mutable 
//can't be changed vs can be changed
//isnt changed vs changed

// let name = "Scott";
// name = name + "Tolinski";
// console.log(name);

//we want immutablity in our code
//you wont update your variable often 
//you will have a new variable with a modification
const name = "scott"
const fullName = name + "Tolinski";
console.log(fullName)

//pure functions 
//always return the same thing, with the same input
//no matter what the outside is going on 
const addTwo = (x) => x + 2; 
console.log(2); 
console.log(2);

//impure:

//this exists outside
//the state being outside the function, external state
//hard to test 
//we dont want a function that replies on external state

let multi = 3;  
const addThree = (x) => x + multi;
console.log(addThree(2)); 
multi = 4;
console.log(addThree(2));
multi = 6; 
console.log(addThree(2));


//we dont want to use external state
let multi2 = 2; //external state
const addFour = (x) => {
  multi2 += 2;
  return x + multi2;
}
console.log(addFour(2)); 
console.log(addFour(2)); 
console.log(addFour(2)); 

