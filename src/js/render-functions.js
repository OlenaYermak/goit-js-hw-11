// //=====VAR 1==========
// import SimpleLightbox from "simplelightbox";
// import "simplelightbox/dist/simple-lightbox.min.css";

// function renderGallery(images) {
//   const galleryContainer = document.querySelector(".gallery-container");
//   galleryContainer.innerHTML = "";

//   if (images.length === 0) {
//     iziToast.warning({
//       title: "No Results",
//       message: "Sorry, there are no images matching your search query. Please try again!",
//     });
//     return;
//   }

//   const fragment = document.createDocumentFragment();
//   images.forEach((image) => {
//     const card = createImageCard(image);
//     fragment.appendChild(card);
//   });

//   galleryContainer.appendChild(fragment);

//   // Initialize SimpleLightbox
//   const lightbox = new SimpleLightbox(".gallery-container a");
//   lightbox.refresh();
// }

// function createImageCard(image) {
//   const card = document.createElement("div");
//   card.classList.add("card");

//   const img = document.createElement("img");
//   img.src = image.webformatURL;
//   img.alt = image.tags;

//   const link = document.createElement("a");
//   link.href = image.largeImageURL;
//   link.appendChild(img);

//   card.appendChild(link);

//   return card;
// }

// export { renderGallery };
// //=====VAR 1==========


import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

// function renderImages(images) {
//   const gallery = document.querySelector(".gallery");
//   gallery.innerHTML = "";

//   images.forEach(image => {
//     const card = createImageCard(image);
//     gallery.appendChild(card);
//   });

//   // Оновлення SimpleLightbox
//   const lightbox = new SimpleLightbox('.gallery a');
//   lightbox.refresh();
// }

// function createImageCard(image) {
//   const card = document.createElement("div");
//   card.classList.add("card");

//   // Створення розмітки карточки для зображення

//   return card;
// }
//refactoring===========
function displayImg (images) {
  const galleryContainer = document.querySelector(".image-container");
  galleryContainer.innerHTML = "";

  images.forEach((image) => {
    const imageCard = document.createElement('div');
    imageCard.classList.add('image-card');

    const imageUrl = image.webformatURL;
    const imageAlt = image.tags;

    imageCard.innerHTML = `
      <a href="${image.largeImageURL}" data-lightbox="gallery" data-title="${imageAlt}">
        <img src="${imageUrl}" alt="${imageAlt}" loading="lazy">
      </a>
    `;

    galleryContainer.appendChild(imageCard);
  });


  const lightbox = new SimpleLightbox('.image-card a');
  lightbox.refresh();
}

function createImageCard(image) {
  const card = document.createElement("div");
  card.classList.add("card");

  // Створення розмітки карточки для зображення

  return card;
}

//refactoring===========
export { displayImg };



// function renderImageGallery(images) {
//   const galleryContainer = document.querySelector(".gallery-container");
//   galleryContainer.innerHTML = "";

//   images.forEach((image) => {
//     const imageElement = document.createElement("img");
//     imageElement.src = image.webformatURL;
//     imageElement.alt = image.tags;
//     imageElement.dataset.large = image.largeImageURL;

//     galleryContainer.appendChild(imageElement);
//   });

//   // Initialize SimpleLightbox
//   SimpleLightbox.refresh();
// }
