//Function
//fundamental building block in the program
//subprogram can be used multiple times
//performs a task or calculates a value 

//1. Function declaration
//function name(param1, param2) {body...return;}
//one function === one thing
//naming: doSomething, command, verb
//createCardAndPoint -> createCard, createPoint
//function is an object in JS 

function printHello() {
  console.log('Hello');
}
printHello();

function log(message) {
  console.log(message )
}

log("hello");

//2. Parameters
//primitive parameters: passed by value
//object parameters: passed by reference 
function changeName(obj) {
  obj.name = 'coder';
}
const ellie = {name:'ellie'};
changeName(ellie);
console.log(ellie); 


//3. Default parameters
function showMessage(message, from='unknown') {
  // if(from === undefined) {
  //   from = 'unknown';
  // }
  console.log(`${message} by ${from}`);
}
showMessage('Hi!')

//4. Reset parameters
function printAll(...args) {
  for(let i = 0; i < args.length; i++) {
    console.log(args[i]); 
  }

  for(const arg of args) {
    console.log(arg); 
  }

  args.forEach((arg) => console.log(arg)); 
}
printAll('dream', 'coding', 'ellie');

//5. Local Scope
let globalMessage = 'global';
function printMessage() {
  let message = 'hello'; 
  console.log(message);
  console.log(globalMessage); 
}
printMessage();
console.log(message); //this will throw an error 

//6. Return a value

//*this is fine cuz it will be hoisted
sum(2, 34); 
function sum(a, b) {
  return a + b;
}
const result = sum(1, 2);
console.log(`sum: ${sum(1, 2)}`);

//7. Early Return, early Exit
//bad
function upgradeUser(user) {
  if(user.point > 10) {
    //long upgrade logic..
  }
}
//good
function upgradeUser(user) {
  if(user.point <= 10) {
    return; 
  }
  //long upgrade logic
}


//first-class function
//functions are treated like any other variable
//can be assigned as a value to variable
//can be passed as an argument to other functions
//can be returned by another function

//1. Function epression
//a function declaration can be called earlier than it is definied (hoisted)
//a function expression is created when the execution reaches it. 

print(); //it wont be hoisted so I get an error here
const print = function() { //anonymous function
  console.log('print');
};
print();
const printAgain = print; 
printAgain();
const sumAgain = sum; 
console.log(sumAgain(1, 3)); 

//2. callback function using function expression
function randomQuiz(answer, printYes, printNo) {
  if(answer === 'love you') {
    printYes();
  } else {
    printNo(); 
  }
}

const printYes = function() {
  console.log('Yes!'); 
}

//named function
//better for debugging and can be used for recursion ex) print();
const printNo = function print() {
  console.log('No');
}

randomQuiz("wrong", printYes, printNo); 

//Arrow function
//always anonymous
const simplePrint = function() {
  console.log('simplePrint');
}
const simplePrint2 = () => console.log('simplePrint');
const add = function(a, b) {
  return a + b;
}
const add2 = (a,b) => a + b; 

//IIFE
(function hello() {
  console.log('IIFE');
})();


