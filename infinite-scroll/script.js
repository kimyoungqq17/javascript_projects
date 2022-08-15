// window.console.log('testing');

const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');


let ready = false;
let imagesLoaded = 0;
let totalImages = 0; 
let photosArray = []; 

//unsplash api
const count = 30;
const apiKey = `PN06mIYxdEcGk-xXdxCdA_o6ewdldl-kiOc1dunuLrk`
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`; 



//check if all images were loaded 
function imageLoaded() {
  console.log('image loaded');
  imagesLoaded++;
  console.log(imagesLoaded);
  if(imagesLoaded == totalImages) {
    ready = true;
    loader.hidden = true;
    console.log('ready =', ready)
    count = 30;
  }
}

//helper function to set attributes on dom elements 
function setAttribute(element, attributes) {
  for(const key in attributes) {
    element.setAttribute(key, attributes[key])
  }
}

//create elementsf or links and photos, add to dom 
function displayPhotos() {
  imagesLoaded = 0;
  totalImages = photosArray.length;
  console.log('')
  //run function for each object in photosArray
  photosArray.forEach((photo) => {
    //create <a> to link to unsplash
    const item = document.createElement('a');

    // item.setAttribute('href', photo.links.html);
    // item.setAttribute('target', '_blank');

    setAttribute(item, {
      href: photo.links.html,
      target: '_blank', 
    }); 

    //create <img> for photo 
    const img = document.createElement('img');

    img.setAttribute('src', photo.urls.regular);
    img.setAttribute('alt', photo.alt_description);
    img.setAttribute('title', photo.alt_description);

    setAttribute(img, {
      src: photo.urls.regular,
      alt: photo.alt_description,
      title: photo.alt_description
    });

    //event listener, check when each is finished loading 
    img.addEventListener('load', imageLoaded);

    //put <img> inside <a>, then put both inside imageContainer element 
    item.appendChild(img);
    imageContainer.appendChild(item);
  });
}

async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    // const data = await response.json();
    // console.log(data);
    photosArray = await response.json();
    displayPhotos();
  }catch(error) {

  }
}

//check to see if scrolling near bottom of page, load more photos
window.addEventListener('scroll', () => {
  if(window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 && ready) {
    ready = false; 
    getPhotos();
  }
})


getPhotos();
