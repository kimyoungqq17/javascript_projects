//IIFE
//invokes right away

// (function() {

// }());

(function() {

  const SEARCH_QUERY = 'Javascript';
  const SEARCH_URL = 'https://openlibrary.org/search.json?q='
  const API_URL = `${SEARCH_URL}${SEARCH_QUERY}`;

  fetch(API_URL).then((res) => {
    return res.json(); 
  })
  .then(data => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error); 
  });
}());


//async function that runs automatically

(async () => {

  try {
    const SEARCH_QUERY = 'Javascript';
    const SEARCH_URL = 'https://openlibrary.org/search.json?q='
    const API_URL = `${SEARCH_URL}${SEARCH_QUERY}`;

    //returning a promise so we use await 
    //without .then it looks more cleaner 
    const res = await fetch(API_URL)
    const data = await res.json();

    console.log(data);

  }
  catch (e) {
    console.error(e.message);
  }
})();
