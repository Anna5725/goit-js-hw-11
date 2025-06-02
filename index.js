import{a as p,S as f,i as c}from"./assets/vendor-frHSA4Lh.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const m="50600363-124150c1580125848cace6785",h="https://pixabay.com/api/";async function y(s){const r={key:m,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await p.get(h,{params:r})).data}const a=document.querySelector(".gallery"),l=document.getElementById("loader"),g=new f(".gallery a");function L(s){const r=s.map(({webformatURL:o,largeImageURL:n,tags:e,likes:t,views:i,comments:d,downloads:u})=>`<li class = 'gallery-item'>
<a href = "${n}">
    <img src = "${o}" alt = "${e}"/>
    </a>
    <div class="info">
    <p><b>Likes:</b>${t}</p>
    <p><b>Views:</b>${i}</p>
    <p><b>Comments:</b>${d}</p>
    <p><b>Downloads:</b>${u}</p>
    </div>
    </li>`).join("");a.insertAdjacentHTML("beforeend",r),a.classList.remove("hidden"),g.refresh()}function b(){a.innerHTML="",a.classList.add("hidden")}function w(){l.classList.remove("hidden")}function v(){l.classList.add("hidden")}const S=document.querySelector(".form");S.addEventListener("submit",async s=>{s.preventDefault();const r=s.target.elements["search-text"].value.trim();if(!r){c.Toast.warning({message:"Please enter a search query.",position:"topRight"});return}b(),w();try{const o=await y(r);o.hits.length===0?c.error({message:"Sorry, there are no images matching your search query.",position:"topRight"}):L(o.hits)}catch{c.error({message:"Something went wrong. Please try again later.",position:"topRight"})}finally{v()}});
//# sourceMappingURL=index.js.map
