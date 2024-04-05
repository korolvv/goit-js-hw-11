import{i as u,S as p}from"./assets/vendor-3fe00192.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();function m(o){return o.map(s=>`<li class="userItem">
            <a class='link_photo' href="${s.largeImageURL}"
              ><img class="mini_photo" src="${s.webformatURL}" alt="${s.tags}" title="${s.tags}"
            /></a>
            <ul class="counter">
              <li class="counter_wrapper">
                <h3 class="likes">Likes</h3>
                <p class="likes_amount">${s.likes}</p>
              </li>
              <li class="counter_wrapper">
                <h3 class="views">Views</h3>
                <p class="views_amount">${s.views}</p>
              </li>
              <li class="counter_wrapper">
                <h3 class="comments">Comments</h3>
                <p class="comments_amount">${s.comments}</p>
              </li>
              <li class="counter_wrapper">
                <h3 class="downloads">Downloads</h3>
                <p class="downloads_amount">${s.downloads}</p>
              </li>
            </ul>
          </li>`).join("")}function d(o,r,s){const c=new URLSearchParams({key:"43243729-04275528cc78ca8d3cba6ce95",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0});fetch(`https://pixabay.com/api/?${c}`).then(e=>{if(!e.ok)throw new Error(e.status);return s.style.display="none",e.json()}).then(e=>{if(e.total===0)u.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"});else{const t=e.hits,n=m(t);r.insertAdjacentHTML("beforeend",n),new p(".userItem a").refresh()}}).catch(e=>console.log(e))}const a=document.querySelector("form"),i=document.querySelector(".userList"),l=document.querySelector(".loader");a.addEventListener("submit",o=>{o.preventDefault(),i.innerHTML="",l.style.display="inline-block";const r=a.elements.request.value;d(r,i,l)});
//# sourceMappingURL=commonHelpers.js.map
