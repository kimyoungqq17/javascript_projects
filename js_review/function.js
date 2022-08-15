//hoisted
//when run, sent to top 
//function declaration
function sayHi() {
  return console.log("hi")
}

sayHi();


//function expression
//not hoisted
//can run without being declared
//common example: call back function 
// sayHi(function())
//variable: sayHi, function itself doesnt have name
//anon, not named
//not hoisted 
//passed around or used 
const sayHello = function() {
  return console.log("hello");
}
sayHello(); 

//named function
//good when debugging 
const hi = function hi() {
  return console.log("hi")
}
hi();

//arrow function
//same as sayHello
const cup = () => {
  return console.log("cup"); 
}; 
cup();
//we can omit brackets and return
//also a function expression
//frequently used in a call back
const coffee = () => console.log("coffee");
const cofee = () => (console.log("cofee")); 
