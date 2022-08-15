const modal = document.getElementById("modal");
const modalShow = document.getElementById("show-modal");
const modalClose = document.getElementById("close-modal");
const bookmarkForm = document.getElementById("bookmark-form");
const websiteNameEl = document.getElementById("website-name");
const websiteUrlEl = document.getElementById("website-url");
const bookmarksContainer = document.getElementById("bookmarks-container");

let bookmarks = [];

// Show Modal, Focus on Input
function showModal() {
  modal.classList.add("show-modal");
  websiteNameEl.focus();
}

modalShow.addEventListener("click", showModal);
modalClose.addEventListener("click", () =>
  modal.classList.remove("show-modal")
);
window.addEventListener("click", (e) =>
  e.target === modal ? modal.classList.remove("show-modal") : false
);

// Validate Form
function validate(nameValue, urlValue) {
  const expression =
    /(https)?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/g;
  const regex = new RegExp(expression);
  if (!nameValue || !urlValue) {
    alert("Please submit values for both fields.");
    return false;
  }
  if (!urlValue.match(regex)) {
    alert("Please provide a valid web address.");
    return false;
  }
  // Valid
  return true;
}


function deleteBookmark(url) {
  bookmarks.forEach((bookmark, index) => {
    if (bookmark.url === url) {
      bookmarks.splice(index, 1)
    }
  });

  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  fetchLocalStorage();
}

function buildBookmarks() {

  // we need to clear our dom before creating each of them
  bookmarksContainer.textContent = "";

  //build items
  bookmarks.forEach((bookmark) => {
    const { name, url } = bookmark;
    console.log(name, url);

    //Item Element
    const item = document.createElement("div");
    item.classList.add("item");

    //close Icon
    const closeIcon = document.createElement("i");
    closeIcon.classList.add("fas", "fa-times");
    closeIcon.setAttribute("title", "Delete Bookmark");
    closeIcon.setAttribute("onclick", `deleteBookmark('${url}')`);

    //favicon / link container
    const linkInfo = document.createElement("div");
    linkInfo.classList.add("name");

    //favicon
    const favicon = document.createElement('img');
    favicon.setAttribute('src', `https://s2.googleusercontent.com/s2/favicons?domain=${url}`);
    favicon.setAttribute('alt', 'Favicon');

    //Link
    const link = document.createElement("a");
    link.setAttribute("href", `${url}`);
    link.setAttribute("target", "_blank");
    link.textContent = name;

    // Append to bookmarks container
    linkInfo.append(favicon, link);
    item.append(closeIcon, linkInfo);
    bookmarksContainer.appendChild(item);
  });
}

function fetchLocalStorage() {
  // get bookmarks if it's exists
  if (localStorage.getItem("bookmarks")) {
    bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
  } else {
    // crete bookmarks array
    bookmarks = [
      {
        name: "google",
        url: "google.com",
      },

    ];

    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  }
  buildBookmarks();
}

function storeBookmark(e) {
  e.preventDefault();
  const nameValue = websiteNameEl.value;
  let urlValue = websiteUrlEl.value;
  // New Version
  if (!urlValue.includes("https://") && !urlValue.includes("http://")) {
    urlValue = `https://${urlValue}`;
  }

  if (!validate(nameValue, urlValue)) {
    console.log("return false happened");
    return false;
  }
  const bookmark = {
    name: nameValue,
    url: urlValue,
  };

  bookmarks.push(bookmark);
  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  fetchLocalStorage();
  bookmarkForm.reset(); // reseting our form inputs means cleaning
  websiteNameEl.focus();
}

bookmarkForm.addEventListener("submit", storeBookmark);

//onload application
fetchLocalStorage();
