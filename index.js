import{a as f,S as m,i as n}from"./assets/vendor-CxL-4rjn.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const y="42906577-f3a74609592fdc176ad4717b8",p="https://pixabay.com/api/";async function g(a){const o={key:y,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0};try{return(await f.get(p,{params:o})).data}catch(t){throw console.error("Error fetching images:",t),t}}const c=document.querySelector(".gallery"),h=new m(".gallery a");function b(a){const o=a.map(({webformatURL:t,largeImageURL:i,tags:e,likes:r,views:s,comments:u,downloads:d})=>`
    <li class="gallery__item">
    <a href="${i}" class="gallery__link">
        <img src="${t}" alt="${e}" loading="lazy" class="gallery__image" />
    </a>
    <div class="info">
        <p><b>Likes:</b> ${r}</p>
        <p><b>Views:</b> ${s}</p>
        <p><b>Comments:</b> ${u}</p>
        <p><b>Downloads:</b> ${d}</p>
    </div>
    </li>
`).join("");c.insertAdjacentHTML("beforeend",o),h.refresh()}function L(){c.innerHTML=""}function S(){document.querySelector(".loader").classList.remove("loader-hidden")}function q(){document.querySelector(".loader").classList.add("loader-hidden")}const l=document.querySelector(".form"),_=l.querySelector('input[name="search-text"]');l.addEventListener("submit",async a=>{a.preventDefault();const o=_.value.trim();if(!o){n.error({title:"Error",message:"Search field cannot be empty!"});return}L(),S();try{const t=await g(o);if(t.hits.length===0){n.info({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!"});return}b(t.hits)}catch{n.error({title:"Error",message:"Failed to fetch images. Please try again later."})}finally{q()}});
//# sourceMappingURL=index.js.map
