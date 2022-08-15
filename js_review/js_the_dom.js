

//will print dom 
console.log(document.body); 

const heading = document.createElement("h1"); 
heading.innerHTML = "<span>hi</span>";
console.log(heading);

document.body.appendChild(heading);
