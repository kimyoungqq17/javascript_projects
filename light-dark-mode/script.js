const toggleSwitch = document.querySelector('input[type="checkbox"]'); 

const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');


//Dark Mode Styles
function darkMode() {
  nav.style.backgroundColor = 'rgb(0 0 0 / 50%)';
  textBox.style.backgroundColor = 'rgb(255 255 255 / 50%)';
  toggleIcon.children[0].textContent = 'Dark Mode';
  toggleIcon.children[1].classList.remove('fa-sun');
  toggleIcon.children[1].classList.add('fa-moon');
  image1.src = 'img/travel.svg'
  image2.src = 'img/travel.svg'
  image3.src = 'img/travel.svg'


}

//light Mode Styles
function lightMode() {
  nav.style.backgroundColor = 'rgb(255 255 255 / 50%)';
  textBox.style.backgroundColor = 'rgb(0 0 0 / 50%)';
  toggleIcon.children[0].textContent = 'light mode';
  toggleIcon.children[1].classList.remove('fa-moon');
  toggleIcon.children[1].classList.add('fa-sun');
  image1.src = 'img/beach.svg'
  image2.src = 'img/buddy.svg'
  image3.src = 'img/travel.svg'


}


//Switch Theme Dynamically
function switchTheme(event) {
  // console.log(event.target.checked); 

  if(event.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark'); 
    darkMode();
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light'); 

    lightMode();
  }
}

//Event Listener
toggleSwitch.addEventListener('change', switchTheme);

//check local storage for theme 
const currentTheme = localStorage.getItem('theme');
if(currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);

  if(currentTheme === 'dark') {
    toggleSwitch.checked = true;
    darkMode();
  }
}
