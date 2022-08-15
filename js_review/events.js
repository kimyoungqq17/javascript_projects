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

const newColors = document.getElementById("new-colors");
//on click allows you to attch 1 event 
newColors.onclick = () => addRandomColorToBackground();
//we can do 
newColors.addEventListener('click', addRandomColorToBackground);
newColors.addEventListener('click', () => console.log("hi"));
