// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
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
    return;
  }

  clearGallery();

   showLoader();
   getImages(QUERY)
   .then(data => {
     if (data.hits.length === 0) {
       iziToast.warning({
         message: "Sorry, there are no images matching your search query. Please try again!",
         messageColor: "#ffffff", 
        backgroundColor: "#B51B1B",
        position: "topRight",
       });
     } else {
       displayImg(data.hits);
     }
   })
   .catch(error => {
     console.error(error);
   })
   .finally(() => {
     hideLoader();
   });
}


function clearGallery() {
  const galleryContainer = document.querySelector(".image-container");
  galleryContainer.innerHTML = "";
}

function showLoader() {
  loader.style.display = "block";
}

function hideLoader() {
  loader.style.display = "none";
}




