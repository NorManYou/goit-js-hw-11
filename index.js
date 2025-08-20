import{a as g,S as h,i as n}from"./assets/vendor-CaRFiM55.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();function y(o){return g.get("https://pixabay.com/api/",{params:{key:"51852329-0f9f7a5b812c170a88122fd74",q:o,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:18}}).then(t=>t.data.hits)}let l=null;function b(){l?l.refresh():l=new h(".gallery a",{captions:!0,captionsData:"alt",captionPosition:"bottom",captionDelay:250})}function L(o){const t=o.map(({webformatURL:i,largeImageURL:a,tags:e,likes:r,views:s,comments:m,downloads:p})=>`<li class="gallery-item">
            <a class="gallery-item-link" href="${a}">
              <img class="gallery-item-img" src="${i}" alt="${e}" />
            </a>
            <div class="gallery-description-container">
              <div class="gallery-img-info">
                <h5>Likes</h5>
                <p>${r}</p>
              </div>
              <div class="gallery-img-info">
                <h5>Views</h5>
                <p>${s}</p>
              </div>
              <div class="gallery-img-info">
                <h5>Comments</h5>
                <p>${m}</p>
              </div>
              <div class="gallery-img-info">
                <h5>Downloads</h5>
                <p>${p}</p>
              </div>
            </div>
          </li>`).join("");d.innerHTML=t,b()}function v(){d.innerHTML=""}function S(){f.classList.remove("hidden")}function c(){f.classList.add("hidden")}const q={form:document.querySelector(".form"),buttonInput:document.querySelector(".js-button-search"),inputSearch:document.querySelector(".js-input-search"),galleryList:document.querySelector(".gallery"),loader:document.querySelector(".js-loader")},{form:u,buttonInput:w,inputSearch:C,galleryList:d,loader:f}=q;u.addEventListener("submit",o=>{o.preventDefault(),S();const t=o.target.elements["search-text"].value.trim();if(!t){c(),n.show({message:"Введіть текст для пошуку",position:"topRight",backgroundColor:"#5c1e18",messageColor:"#bcbcbc"});return}v(),y(t).then(i=>{if(!i.length){n.show({message:`За запитом "${t}" не знайдено жодного результату.`,position:"topRight",backgroundColor:"#e74c3c",messageColor:"#fff"});return}L(i)}).catch(i=>{n.error({message:"Sorry, there are no images matching your search query. Please try again!error",backgroundColor:"#e74c3c",messageColor:"#fff"})}).finally(()=>{c()}),u.reset()});
//# sourceMappingURL=index.js.map
