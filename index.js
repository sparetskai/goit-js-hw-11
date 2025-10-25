import{a as f,S as d,i}from"./assets/vendor-BNibzuFn.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const p="52921065-da1fe04bba5d9d2706b6c1990",y="https://pixabay.com/api/";async function m(a){try{return(await f.get(y,{params:{key:p,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}catch(t){throw console.error("Error fetching images:",t),t}}const c=document.querySelector(".gallery"),l=document.querySelector(".loader"),h=new d(".gallery a",{captionsData:"alt",captionDelay:250});function g(a){const t=a.map(r=>`
    <li class="gallery-item">
      <a href="${r.largeImageURL}">
        <img src="${r.webformatURL}" alt="${r.tags}" loading="lazy" />
      </a>
      <div class="info">
        <p>Likes: ${r.likes}</p>
        <p>Views: ${r.views}</p>
        <p>Comments: ${r.comments}</p>
        <p>Downloads: ${r.downloads}</p>
      </div>
    </li>
  `).join("");c.innerHTML=t,h.refresh()}function L(){c.innerHTML=""}function b(){l.hidden=!1}function w(){l.hidden=!0}const u=document.querySelector(".form"),S=u.querySelector('input[name="search-text"]');u.addEventListener("submit",async a=>{a.preventDefault();const t=S.value.trim();if(!t){i.warning({title:"Warning"});return}L(),b();try{const r=await m(t);r.hits.length?g(r.hits):i.error({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#ef4040",color:"#fafafb",icon:"fa fa-exclamation-circle"})}catch{i.error({title:"Error"})}finally{w()}});
//# sourceMappingURL=index.js.map
