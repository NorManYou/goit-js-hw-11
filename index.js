import{a as m,S as p,i as n}from"./assets/vendor-CaRFiM55.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();function g(o){return m.get("https://pixabay.com/api/",{params:{key:"51852329-0f9f7a5b812c170a88122fd74",q:o,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:18}}).then(r=>r.data.hits)}let l=null;function h(){l?l.refresh():l=new p(".gallery a",{captions:!0,captionsData:"alt",captionPosition:"bottom",captionDelay:250})}function y({webformatURL:o,largeImageURL:r,tags:i,likes:a,views:e,comments:t,downloads:s}){return`<li class="gallery-item">
          <a class="gallery-item-link" href="${r}"> 
            <img class="gallery-item-img" src="${o}" alt="${i}" />
          </a>
          <div class="gallery-description-container">
            <div class="gallery-img-info">
              <h5>Likes</h5>
              <p>${a}</p>
            </div>
            <div class="gallery-img-info">
              <h5>Views</h5>
              <p>${e}</p>
            </div>
            <div class="gallery-img-info">
              <h5>Comments</h5>
              <p>${t}</p>
            </div>
            <div class="gallery-img-info">
              <h5>Downloads</h5>
              <p>${s}</p>
            </div>
          </div>
        </li>`}function L(o){return o.map(y).join("")}function b(o){const r=L(o);f.innerHTML=r}function v(){f.innerHTML=""}function S(){d.classList.remove("hidden")}function c(){d.classList.add("hidden")}const q={form:document.querySelector(".form"),buttonInput:document.querySelector(".js-button-search"),inputSearch:document.querySelector(".js-input-search"),galleryList:document.querySelector(".gallery"),loader:document.querySelector(".js-loader")},{form:u,buttonInput:w,inputSearch:C,galleryList:f,loader:d}=q;u.addEventListener("submit",o=>{o.preventDefault(),S();const r=o.target.elements["search-text"].value.trim();if(!r){c(),n.show({message:"Введіть текст для пошуку",position:"topRight",backgroundColor:"#e74c3c",messageColor:"#fff"});return}v(),g(r).then(i=>{if(!i.length){n.show({message:`За запитом "${r}" не знайдено жодного результату.`,position:"topRight",backgroundColor:"#e74c3c",messageColor:"#fff"});return}b(i),h()}).catch(i=>{n.error({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#e74c3c",messageColor:"#fff"})}).finally(()=>{c()}),u.reset()});
//# sourceMappingURL=index.js.map
