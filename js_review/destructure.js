const[a, b] = ['hi', 'scott']; 
console.log(a);
console.log(b); 

//equivalent to 
const newArray = ['hi', 'scott', 'thirdArray', 'fourthArray'];
// const aa = newArray[0];
// const bb = newArray[1]; 

//destructurizing
const [aa, bb, ...cc] = newArray; 

const person = {
  name: "Scott",
  age: 32, 
  job: "web dev"
}

const makePerson = (name, age, job) => {
  return {
    name: name,
    age: age,
    job: job
  }
}

console.log(makePerson("scott", 32, "web dev")); 

//can omit the duplicates
const makePerson2 = (name, age, job) => {
  return {
    name,
    age,
    job
  };
};
console.log(makePerson2("scott", 32, "web dev")); 

//if not the same 
//bad practice
const makePerson3 = (personName, personAge, personJob) => {
  return {
    name: personName,
    age: personAge,
    job: personJob
  };
};
console.log(makePerson3("scott", 32, "web dev")); 


const dev = makePerson2("scott", 32, "web dev");
// const name = dev.name;
//keeping code cleaner with being consistent
// const { name } = dev; 
//essentially pulling out a property from the object 
//you can pull out a name and a job
// const {name, job} = dev;

//this.props.names
//const {names } = this.props

//using a ... 
const {name, ...rest} = dev; 
console.log(name ,rest); 