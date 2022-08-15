const generateColorValue = () => Math.floor(Math.random() * 256); 
const createColor = () => {
  const red = generateColorValue(); 
  const green = generateColorValue();
  const blue = generateColorValue();
  return `rgb(${red}, ${green}, ${blue})`
};

const applyColorToBody = (color) => {
  // const color = createColor(); 
  return document.body.style.backgroundColor = color; 
};

const addRandomColorToBackground = () => {
  const color = createColor();
  return applyColorToBody(color); 
}
addRandomColorToBackground();

newColors.addEventListener('click', addRandomColorToBackground);
newColors.addEventListener('click', () => console.log("hi"));

//setTimeOut
setTimeout(console.log('in timeout'), 1000); 

setTimeout(()=> console.log("is in timeout"), 1000); 

const log = () => console.log("is in time out")
//this works because we are using a js expression 
setTimeout(log, 1000); 

//this wont work
setTimeout(log(), 1000); 


setTimeout(addRandomColorToBackground, 5000);
//the application doesnt wait the color to be changed and print ran here 
//we use promise 
console.log("ran here")
function timeout(time) {
  return new Promise(resolve => setTimeout(resolve, time))
}
await timeout(5000); 

//setTimeout happens once
//setInterval happens over and over 

const interval = setInterval(addRandomColorToBackground, 2000); 
newColors.addEventListener("click", () => clearInterval(interval));