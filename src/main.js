// //=====VAR 1==========
// // Описаний у документації
// import iziToast from "izitoast";
// // Додатковий імпорт стилів
// import "izitoast/dist/css/iziToast.min.css";
// import { getImages } from "./pixabay-api.js";
// import { renderGallery } from "./render-functions.js";

// const searchForm = document.querySelector(".search-form");
// const loader = document.querySelector(".loader");

// searchForm.addEventListener("submit", handleSearch);

// function handleSearch(event) {
//   event.preventDefault();

//   const searchQueryInput = document.querySelector(".form-input");
//   const searchQuery = searchQueryInput.value.trim();

//   if (searchQuery === "") {
//     iziToast.error({
//       title: "Error",
//       message: "Please enter a search term.",
//     });
//     return;
//   }

//   showLoader();
//   getImages(searchQuery)
//     .then((data) => {
//       renderGallery(data.hits);
//       hideLoader();
//     })
//     .catch((error) => {
//       console.error("Error:", error.message);
//       hideLoader();
//       iziToast.error({
//         title: "Error",
//         message: "An error occurred while fetching images. Please try again later.",
//       });
//     });
// }

// function showLoader() {
//   loader.style.display = "block";
// }

// function hideLoader() {
//   loader.style.display = "none";
// }
// //=====VAR 1==========


import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { getImages } from "./js/pixabay-api.js";
import { displayImg } from "./js/render-functions";

const searchForm = document.querySelector(".form-search");
const inputForm = document.querySelector(".form-input");
const loader = document.querySelector(".loader");

searchForm.addEventListener("submit", handleFormSubmit);

function handleFormSubmit(event) {
  event.preventDefault();

  const QUERY = inputForm.value.trim();

  if (QUERY === "") {
    iziToast.error({
      title: "Error",
      message: "Please enter a search term.",
    });
    return;
  }

  // loader.style.display = "block";

  getImages(QUERY)
    .then(data => {
      // loader.style.display = "none";

      if (data.hits.length === 0) {
        iziToast.warning({
          title: "No Results",
          message: "Sorry, there are no images matching your search query. Please try again!",
        });
      } else {
        displayImg(data.hits);
      }
    })
    .catch(error => {
      // loader.style.display = "none";
    });
}