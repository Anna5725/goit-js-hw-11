import{a as f,S as m,i as c}from"./assets/vendor-Bz4lgVUE.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const p="50600363-124150c1580125848cace6785",h="https://pixabay.com/api/";function g(i){const r={key:p,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0};return f.get(h,{params:r}).then(o=>o.data)}const a=document.querySelector(".gallery"),l=document.getElementById("loader"),y=new m(".gallery a");function L(i){const r=i.map(({webformatURL:o,largeImageURL:n,tags:e,likes:t,views:s,comments:d,downloads:u})=>`<li class = 'gallery-item'>
<a href = "${n}">
    <img src = "${o}" alt = "${e}"/>
    </a>
    <div class="info">
    <p><b>Likes:</b>${t}</p>
    <p><b>Views:</b>${s}</p>
    <p><b>Comments:</b>${d}</p>
    <p><b>Downloads:</b>${u}</p>
    </div>
    </li>`).join("");a.insertAdjacentHTML("beforeend",r),a.classList.remove("hidden"),y.refresh()}function b(){a.innerHTML="",a.classList.add("hidden")}function v(){l.classList.remove("hidden")}function w(){l.classList.add("hidden")}const S=document.querySelector(".form");S.addEventListener("submit",function(i){i.preventDefault();const r=i.target.elements["search-text"].value.trim();if(!r){c.warning({message:"Please enter a search query.",position:"topRight"});return}b(),v(),g(r).then(o=>{o.hits.length===0?c.error({message:"Sorry, there are no images matching your search query.",position:"topRight"}):L(o.hits)}).catch(o=>{c.error({message:"Something went wrong. Please try again later.",position:"topRight"})}).finally(()=>{w()})});
//# sourceMappingURL=index.js.map
