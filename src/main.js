
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
    return;
  }

  clearGallery();

  loader.style.display = "block";


  getImages(QUERY)
    .then(data => {
      setTimeout(() => {
        loader.style.display = "none";

        if (data.hits.length === 0) {
          iziToast.warning({
            message: "Sorry, there are no images matching your search query. Please try again!",
          });
        } else {
          displayImg(data.hits);
        }
      }, 2000);
    })
   
    .catch(error => {
      loader.style.display = "none";
    });
}


function clearGallery() {
  const galleryContainer = document.querySelector(".image-container");
  galleryContainer.innerHTML = "";
}
