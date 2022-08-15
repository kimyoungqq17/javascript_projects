// document.getElementById("app").innerHTML = `
//   <h1>Hello Parcel!</h1>
//   <div>
//   Look Out
//   </div>
// `;

const heading = document.createElement("h1");
heading.innerHTML = "<span>Hello</span>" + document.URL;
document.body.appendChild(heading)

const logo = document.getElementById("logo"); 
const logo2 = document.querySelector("#logo"); 

  
logo.innerText = "Yo"