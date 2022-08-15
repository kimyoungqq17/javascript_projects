//consistency is king!!

const dev = ({
  name: "bart",
  age: 10,
  location: "springfield"
}); 
//DO NOT DO 
const hireDev = ({ devInfo }) => {
  const hireDevInfo = {
    hired: true,
    ...devInfo
  }
  return hireDevInfo;
}

console.log(hireDev({devInfo: dev}));

//Refactor 
//Correct
//consistent name: dev 
const hireDev2 = ({ dev }) => {
  const hiredDev = {
    hired: true,
    ...dev
  };
  return hireDev2;
}

console.log(hireDev2({dev}));

//variable name: clear, searchable, obvious

//this is constant 
//will never change
const BASE_SALARY = 16000;  
const SALARY_MULTIPLIER =4; 

const makePErson = ({ firstName, age, lastName, job}) => {
  return {
    name: firstName + " " + lastName,
    age,
    job,
    // salary: 16000 * 4
    salary: BASE_SALARY * SALARY_MULTIPLIER
  }; 
};

//non: ytd
//oui: years to date


