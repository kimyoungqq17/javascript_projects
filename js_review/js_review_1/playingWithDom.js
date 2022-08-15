const image0 = document.getElementById('brand');

const image = document.querySelector('img');
const image1 = document.querySelector('.img');
const image2 = document.querySelector('#img');
const image3 = document.querySelector('img[src="img/avatar.png"]'); 

const images = document.querySelectorAll('img'); 

const section = document.querySelector('section');
const h2 = document.createElement('h2'); 
h2.setAttribute('class', 'title');//<h2 class="title"></h2>
h2.textContent = 'This is a title'; //<h2 class="title">This is a title</h2>
section.appendChild(h2); 

const h3 = document.querySelector('h3'); 
section.insertBefore(h2, h3); 
//we have reference to it when doing createElement unlike innerHTML
section.removeChild(h2); 
section.innerHTML = `
  <img src="img/avatar.png" alt="avatar" />
  <h1 id="brand">Dream Coding</h1>
  `
//if h1 changes a lot it's better to not create the whole dom tree and render everytime 
section.innerHTML
console.log(image);