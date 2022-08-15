//1. string concatenation
console.log('my' + ' cat');
console.log('1' + 2);
console.log(`string literals: 1 + 2 = ${1+2}`); 
console.log("ellie's \n book")
//2. numeric operator
console.log(2 ** 3); //exponential
//3. Increment and Decrement operators
let counter = 2;
const preIncrement = ++counter; 
//same as 
//counter = counter + 1;
//preIncrement = counter; 
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);  //both wil print 3

const postIncrement = counter++; 
//postIncrement = counter; 
//counter = counter + 1; 
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);  //postIncrement is still 3, counter:4 


//4. assignment operators
let x = 3;
let y = 6; 
x += y; 

//logical operator: ||, &&, ! 
const value1 = true;
const value2 = 4 < 2;
//value1 is at the front so the wasting time wont be printed
console.log(`or: ${value1 || value2 || check()}`); 

function check() {
  for(let i = 0; i < 10; i++) {
    console.log('wasting time')
  }
  return true; 
}
//||, finds the first truthy value 
//&&(and), finds the first falsy value

// if(nullableObject != null) {
//   nullableObject.something;
// }

//7. Equality 
const stringFive = '5';
const numberFive = 5;

// == loose equaility with type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);
// === strict equality, no type conversion
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

//object equality by reference 
const ellie1 = {name:'ellie'};
const ellie2 = {name:'ellie'};
const ellie3 = ellie1; 
console.log(ellie1 == ellie2); 
console.log(ellie1 === ellie2);
console.log(ellie1 === ellie3);

console.log(0 == false); //t
console.log(0 === false); //f
console.log('' == false); //t
console.log('' === false); //f
console.log(null == undefined); //t
console.log(null === undefined); //f

//8 conditional operators: if, else if, else
const name = 'ellie';
if(name === 'ellie') {
  console.log('welcome, ellie');
}
else if(name ==='coder') {
  console.log('ou are good')
}
else {
  console.log('unknown');
}

//9 teEnary operator
//condition? value1: value2
console.log(name === 'ellie' ? 'yes':'no'); 

//10. switch statement
//use for multiple if checks
//use for enum-like value check
const browser = 'IE';
switch(browser) {
  case 'IE':
    console.log('go away!');
    break;
  case 'Chrome':
    console.log('hello');
    break;
  case 'firefox':
    console.log('hi')
    break;
  default:
    console.log('same all');
    break; 
}

//11. loops
//while loop, while the condition is truthy, body code is executed
let i = 3;
while(i > 0) {
  console.log(`while:${i}`);
  i--; 
}

//do while loop, body code is executed first, then check the condition
do {
  console.log(`do while: ${i}`);
  i--;
} while(i > 0); 

//for loop, for(begin; condition; step)
for(let i = 3; i > 0; i = i - 2) {
  console.log(`inline variable for: ${i}`);
}
//nested loops
for(let i = 0; i < 10; i++) {
  for(let j = 0; j < 10; j++) {
    console.log(`i:${i}, j:${j}`); 
  }
}

//ex) 
for(let i = 0; i < 11; i++) {
  if(i % 2 != 0) {
    continue;
  }
  console.log(i); 
}
for(let i = 0; i < 1; i++) {
  if(i == 9) {
    break;
  }
  console.log(i);
}
