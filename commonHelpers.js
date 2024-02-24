import{S as u,i as h}from"./assets/vendor-5b791d57.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const f="42504906-5b025263817bd530cbe95d02a",g="https://pixabay.com/api/";function p(i){const o=`${g}?key=${f}&q=${i}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(o).then(r=>{if(!r.ok)throw new Error("Image error!");return r.json()}).catch(r=>{throw console.error("Error fetching images:",r),r})}function y(i){const o=document.querySelector(".image-container");o.innerHTML="",i.forEach(s=>{const e=document.createElement("li");e.classList.add("image-card");const t=s.webformatURL,a=s.tags,n=s.likes,l=s.views,d=s.comments,m=s.downloads;e.innerHTML=`
      <a href="${s.largeImageURL}" data-lightbox="gallery" data-title="${a}">
        <img src="${t}" alt="${a}" loading="lazy">
      </a>
      <ul class="card-list">
      <li class="card-list-item">
      <h3 class="card-title">Likes:</h3>
     <p class="card-text"> ${n}</p>
     </li>
     <li class="card-list-item">
     <h3 class="card-title">Views:</h3>
     <p class="card-text">${l}</p>
     </li>
     <li class="card-list-item">
     <h3 class="card-title">Comments:</h3>
     <p class="card-text">${d}</p>
     </li>
     <li class="card-list-item">
     <h3 class="card-title">Downloads:</h3>
     <p class="card-text">${m}</p>
     </li>
     </ul>
    `,o.appendChild(e)}),new u(".image-card a").refresh()}const L=document.querySelector(".form-search"),b=document.querySelector(".form-input"),c=document.querySelector(".loader");L.addEventListener("submit",w);function w(i){i.preventDefault();const o=b.value.trim();o!==""&&(S(),c.style.display="block",p(o).then(r=>{setTimeout(()=>{c.style.display="none",r.hits.length===0?h.warning({message:"Sorry, there are no images matching your search query. Please try again!"}):y(r.hits)},2e3)}).catch(r=>{c.style.display="none"}))}function S(){const i=document.querySelector(".image-container");i.innerHTML=""}
//# sourceMappingURL=commonHelpers.js.map
