//made up code
//imported chargedCard 

//will happen outside the flow 
const chargeCard = () => new Promise((resolve, reject) => {
  //card is valid
  if(true) {
    return resolve(true); 
  }
  return resolve(false);
});
//the result of this function is promise
console.log(chargeCard()); 

//when the data has returned then "then" runs
//here we get true
chargeCard().then((val) => {
  console.log(val);
}).catch(err => {
  console.log(err);
});

var scott =null; 


//callback hell
// chargeCard('12312321', (res) => {
//   //time to do something
//   saveToDb(res, () => {
//     //time to do something else
//   })
// });

//js doesnt always run top to bottom
//ex) fetch, axios: comes back with data 
//you can use call back/promise 
//promise exists as its own thing that I promise you I'll do something in future 
