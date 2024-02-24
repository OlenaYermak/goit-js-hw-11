import{S as u,i as f}from"./assets/vendor-5b791d57.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const h="42504906-5b025263817bd530cbe95d02a",g="https://pixabay.com/api/";function p(i){const o=`${g}?key=${h}&q=${i}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(o).then(t=>{if(!t.ok)throw new Error("Image error!");return t.json()}).catch(t=>{throw console.error("Error images:",t),t})}function y(i){const o=document.querySelector(".image-container");o.innerHTML="",i.forEach(s=>{const e=document.createElement("li");e.classList.add("image-card");const r=s.webformatURL,a=s.tags,c=s.likes,l=s.views,d=s.comments,m=s.downloads;e.innerHTML=`
      <a href="${s.largeImageURL}" data-lightbox="gallery" data-title="${a}">
        <img src="${r}" alt="${a}" loading="lazy">
      </a>
      <ul class="card-list">
      <li class="card-list-item">
      <h3 class="card-title">Likes:</h3>
     <p class="card-text"> ${c}</p>
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
    `,o.appendChild(e)}),new u(".image-card a").refresh()}const L=document.querySelector(".form-search"),b=document.querySelector(".form-input"),n=document.querySelector(".loader");L.addEventListener("submit",w);function w(i){i.preventDefault();const o=b.value.trim();o!==""&&(S(),$(),p(o).then(t=>{t.hits.length===0?f.warning({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#ffffff",backgroundColor:"#B51B1B",position:"topRight"}):y(t.hits)}).catch(t=>{console.error(t)}).finally(()=>{x()}))}function S(){const i=document.querySelector(".image-container");i.innerHTML=""}function $(){n.style.display="block"}function x(){n.style.display="none"}
//# sourceMappingURL=commonHelpers.js.map
