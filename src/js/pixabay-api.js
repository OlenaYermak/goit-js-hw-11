

const KEY = "42504906-5b025263817bd530cbe95d02a";
const BASE_URL = "https://pixabay.com/api/";

function getImages(QUERY) {
  const URL = `${BASE_URL}?key=${KEY}&q=${QUERY}&image_type=photo&orientation=horizontal&safesearch=true`;
  
  return fetch(URL)
    .then(response => {
      if (!response.ok) {
        throw new Error("Image error!");
      }

      return response.json();
    })
    .catch(error => {
      console.error("Error images:", error);
      throw error;
    });
}

export { getImages };
