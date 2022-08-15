//1. user strict
//added in es5
'use strict'; 

//2. variable, rw(read/write)
//let (added in es6)
let globalName = 'global name'; 
{
  let name = 'ellie';
  console.log(name);
  name = 'hello';
  console.log(name); 
  console.log(globalName);
}

//var(dont use this)
//var hoisting(move declaration from bottom to top)
//has no block scope
{
  age = 4; 
  var age; 
}
console.log(age);

//3. constant, r(read only)
//use const, not let
//only use let if variable needs to change
//favor immutable data type always for a few reasons:
//security
//thread safety
//reduce human mistakes
const daysInWeek = 7;
const maxNumber =5;

//4. variable types
//immutable data types: primitive types, frozen objects(object.freeze())
//mutable data types: all objects by default are mutable in js 
//favor immutable data type

//primitive, single item: number, string, boolean, null, undefined, symbol 
//object, box container
//function, first-class function 

const count = 17
const size = 17.1;
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

const infinity = 1 / 0; 
const negativeInfinity = -1 / 0;
const nan = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nan);

//String
const char = 'c';
const sam = 'sam';
const greeting = 'hello ' + sam; 
console.log(`value: ${greeting}, type: ${typeof greeting}`); 
const hello = `hi ${sam}`; 

//boolean
//false: 0, null, undefinied, NaN, '';
//true: any other value
const canRead = true;
const test = 3 < 1; 
console.log(`value: ${canRead}, type:${typeof canRead}`);
console.log(`value: ${test}, type:${typeof test}`);

//null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

//undefinied
let x = undefinied;
console.log(`value: ${x}, type: ${typeof x}`); 

//symbol, create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2);
console.log(`value: ${symbol1.description}`);

let text = 'hello';
console.log(text.charAt(0));
console.log(`value: ${text}, type:${typeof text}`);
text = 1;
console.log(`value:${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type:${typeof text}`);

text = `8`/`2`;
console.log(`value:${text}, type:${typeof text}`);
// console.log(text.charAt(0)); error