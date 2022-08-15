const chargeCard = () => new Promise((resolve, reject) => {
  //card is valid
  if(true) {
    return resolve(true);
  }
  return resolve(false);
});

//when you have async here and the func returns promise
//then we can wait 
const chargeCC = async (ccNumber) => {
  //we have to wait till it returns
  //since we have await, async, and promise
  //it will wait and give us a result. 
  try {
    const res = await chargeCard(ccNumber); 
    console.log(res); 
    return res;
  } catch(error) {
    console.log(error);
  }


  // chargeCard(ccNumber)
  // .then((val) => {
  //   console.log(val);
  // }).catch(err => {
  //   console.log(err);
  // });
} 

//returning promise 
console.log(chargeCC('21321312'))
