//class:
//template
//declare once
//no data in

//object:
//instance of a class
//created many times
//data in 

'user strict'; 

//1. class declarations
class Person {
  //constructor
  constructor(name, age) {
    //fields
    this.name = name;
    this.age = age;
  }
  speak() {
    console.log(`${this.name}:hello!`); 
  }
}

const ellie = new Person('ellie', 20); 
console.log(ellie.name);
console.log(ellie.age);
ellie.speak(); 


//2. Getter and Setters
class USer {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  get age() {
    return this._age;
  }
  set age(value) {
    this._age = value < 0 ? 0:value; 
  }

}
const user1 = new user('Steve', 'Job', -1);
console.log(user1.age); 

//3. fields (public, private)

class Experiment {
  publicField = 2; 
  #privateField = 0; 
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);

//4. static properties and methods
class Article {
  static publisher = 'dream coding';
  constructor(articleNumber) {
    this.articleNumber = articleNumber; 
  }
  static printPublisher() {
    console.log(Article.publisher);
  }
}

const article1 = new Article(1);
const article2 = new Article(2); 
console.log(article1.publisher); //undefinied 
console.log(Article.publisher); //dream coding
Article.printPublisher(); 


//5. Inheritance
//a way for one class to extend another class
class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color; 
  }
  draw() {
    console.log(`drawing ${this.color} color!`);
  }

  getArea() {
    return width * this.height; 
  }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
  draw() {
    super.draw();
    console.log('triangle');
  }
  
  getArea() {
    return (this.width * this.height) /2 ; 
  }

  toString() {
    return `triangle: color: ${this.color}`; 
  }
}
const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw(); 
const triangle = new Triangle(20, 20, 'red');
triangle.draw(); 

//6. Class Checking: instanceOf
console.log(rectangle instanceof Rectangle);
console.log(rectangle instanceof Object);


// function calculate(command, a, b) {
//   if(command === "add") {
//     return a + b;
//   }
//   else if(command === "subtract") {
//     return a - b;
//   }
// }

function calculate(command, a, b) {
  switch(command) {
    case 'add':
      return a + b;
    case 'subtract':
      return a - b;
    case 'divide':
      return a / b;
    case 'multiply':
      return a * b;
    default:
      throw Error('unknown command');
    
  }
}
console.log(calculate('add', 2, 3)); 
