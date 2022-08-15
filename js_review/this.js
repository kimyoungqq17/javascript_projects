 //originally this equals to windows 
 //you can access it with windows anyway

console.log(this);

const logGreeting = () => {console.log(this)};

const logGreeting2 = function() {console.log(this)};

const test = {
  name: "test", 
  testFunc: function() {
    console.log(this.name);
    this.name = "Scott";
    console.log(this.name); 
  },

  //this won't be no longer parent when using an arrow func 
  testFuncTwo: () => {
    console.log(this);
  },

  testFuncThree: function() {
    //we use an arrow function so the context is coming from parent, which is an entire object here
    //referring class itself
    ['hi', 'hello'].map(function() {
      console.log(this);
    })
  },

  testFuncFour: function() {
    //we get undefined 
    //we use bind 
    ['hi', 'hello'].map(logGreeting2.bind(this));
  }
}; 

//"this" is
//not creating any contents
//need to use a constructor
function team(name) {
  this.name = name;
  console.log(this); 
}

const button = document.getElementById("new-colors"); 
button.addEventListener("click", function() {
  //this referring to the context which is the button 
  //cant use an arrow function like () => {console.log(this)}
  console.log(this);
  this.innerText = "Clicked"
});



team();
const wings = new team("Red Wings"); 

