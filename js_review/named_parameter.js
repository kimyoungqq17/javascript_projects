const makePerson = (name, age, job, lastName) => {
  return {
    name, 
    age, 
    job, 
    lastName
  };
};
//the arguments must keep the same order
//as the parameters in the function declaration 
const dev = makePerson("scott", 32, "web dev", "Tolinski"); 
console.log(dev); 

//refactoring: 
const tempName = {
  name: "Scott", 
  lastName: "Tolinski",
  age: 32, 
  job: "Web Dev"
}
//passing an argument to a function 
const dev2 = makePerson(tempName); 

//the order doesnt matter for this one 
const makePerson3 = ({name, age, job, lastName}) => {
  return {
    name, 
    age, 
    job, 
    lastName
  };
};
const tempName2  = {
  name: "Scott", 
  lastName: "Tolinski",
  age: 32, 
  job: "Web Dev"
}
const dev3 = makePerson3(tempName2); 
const dev4 = makePerson3( {
  name: "Scott", 
  lastName: "Tolinski",
  age: 32, 
  job: "Web Dev"
})

//named parameter
const makePerson4 = ({firstName, age, lastName, job}) => {
  return {
    name: firstName + '' + lastName,
    age,
    job,
  };
}; 

const dev5 = makePerson4({
  firstName: "Scott",
  lastName: "Tolinsk5i",
  age: 32,
  job: "Web Dev"
}); 

console.log(dev5); 

