
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


function displayImg (images) {
  const galleryContainer = document.querySelector(".image-container");
  galleryContainer.innerHTML = "";

  images.forEach((image) => {
    const imageCard = document.createElement('div');
    imageCard.classList.add('image-card');

    const imageUrl = image.webformatURL;
    const imageAlt = image.tags;
const imageLike = image.likes;
const imageView = image.views;
const imageComments = image.comments;
const imageDownloads = image.downloads;

    imageCard.innerHTML = `
      <a href="${image.largeImageURL}" data-lightbox="gallery" data-title="${imageAlt}">
        <img src="${imageUrl}" alt="${imageAlt}" loading="lazy">
      </a>
      <div class="card-text">
      <h3 class="card-title">Likes:</h3>
     <p class="card-text"> ${imageLike}</p>
     <h3 class="card-title">Views:</h3>
     <p class="card-text">${imageView}</p>
     <h3 class="card-title">Comments:</h3>
     <p class="card-text">${imageComments}</p>
     <h3 class="card-title">Downloads:</h3>
     <p class="card-text">${imageDownloads}</p>
     </div>
    `;

    galleryContainer.appendChild(imageCard);
  });


  const lightbox = new SimpleLightbox('.image-card a');
  lightbox.refresh();
}



export { displayImg };



