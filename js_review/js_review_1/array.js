'user strict';
//Array 
//1. declaration
const arr1 = new Array();
const arr2 = [1, 2]; 

//2. Index position
const fruits = ['apple', 'banana'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]); 
console.log(fruits[2]); //undefined
console.log(fruits[fruits.length-1]);

//3. looping over an array
for(let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]); 
}

for(let fruit of fruits) {
  console.log(fruit);
}

fruits.forEach(function(fruit, index, array) {
  console.log(fruit, index, array); 
})

fruits.forEach((fruit, index) => console.log(fruit, index)); 

fruits.forEach((fruit) => console.log(fruit)); 

//4. Addition, deletion, copy
//push:add an item to the end 
fruits.push('strawberry', 'plum');
console.log(fruits); 
//pop: remove an item from the end
fruits.pop();
fruits.pop();
console.log(fruits);
//unshift: add an item to the beginning
fruits.unshift('strawbery', 'lemon'); 
console.log(fruits);

//shift: remove an item from the beginning
fruits.shift();
fruits.shift(); 
console.log(fruits); 

//shift and unshift are slower than pop, push 
  
fruits.push('strawberry', 'plum', 'lemon'); 
fruits.splice(1)
fruits.splice(1, 1)
fruits.splice(1, 1, "apple", "watermelon"); 

//combine two arrays
const fruits2 = ["pear", "coconut"];
const newFruits = fruits.concat(fruits2); 
console.log(newFruits); 

//5. Searching
//find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf("apple"));
console.log(fruits.indexOf("watermelon"));
console.log(fruits.includes("watermelon"));
console.log(fruits.includes("coconut"))

fruits.push("apple");
console.log(fruits.indexOf("apple"));
console.log(fruits.lastIndexOf("apple")); 


