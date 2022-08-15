//objects
//js data types
//a collection of related data and/or functionality 
//object = {key:value}

const obj1 = {}; //"object literal" syntax
const obj2 = new Object(); //"object constructor" syntax

function print(person) {
  console.log(person.name);
  console.log(person.age);
}

const ellie = {name:'ellie', age: 4};
print(ellie);

console.log(ellie.name);
console.log(ellie['name']);   

function printValue(obj, key) {
  console.log(obj[key]);
  //cant do obj.key 
}
printValue(ellie, 'name'); 

//3. property value shorthand
const person1 = {name:'bob', age:2};
const person2 = {name: 'steve', age:3};
const person3 = {name: 'dave', age:4};
const person4 = makePersonO('ellie', 30); 

// function makePerson(name, age) {
//   return {
//     name: name,
//     age: age,
//   }
// }
function makePerson(name, age) {
  return {
    name,
    age,
  };
}

//4. constructor function 
const person5 = new Person('ellie', 40);
function Person(name, age) {
  this.name = name;
  this.age = age; 
}

//5. in operator: property exostence check (key in obj)
console.log('name' in ellie);
console.log('age' in ellie);

//6. for..in vs for..of
//for(key in obj)
for(key in ellie) {
  console.log(key);
}

//for(value of iterable)
const array = [1, 2, 3, 4];
for(let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

for(value of array) {
  console.log(value); 
}

//7. cloning
const user = {name:'ellie', age:'20'};
const user2 =user; 
user2.name = 'coder';
console.log(user);
//old way
const user3 = {};
for(key in user) {
  user3[key] = user[key];
}
console.log(user3); 


const user4 = {};
Object.assign(user4, user);
console.log(user4); 

const user5 = Object.assign({}, user);
console.log(user5);

const fruit1 = {color: 'red'};
const fruit2 = {color: 'blue', size: 'big'};
const mixed = Object.assign({}, fruit1, fruit2); 
console.log(mixed.color);//blue
console.log(mixed.size); //big



