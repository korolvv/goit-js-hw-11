import{i as u,S as m}from"./assets/vendor-3fe00192.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const i=document.querySelector("form"),l=document.querySelector(".loader"),c=document.querySelector(".userList");i.addEventListener("submit",n=>{n.preventDefault(),c.innerHTML="",l.style.display="inline-block";const r=new URLSearchParams({key:"43243729-04275528cc78ca8d3cba6ce95",q:i.elements.request.value,image_type:"photo",orientation:"horizontal",safesearch:!0});fetch(`https://pixabay.com/api/?${r}`).then(o=>{if(!o.ok)throw new Error(o.status);return l.style.display="none",o.json()}).then(o=>{if(o.total===0)u.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"});else{const e=o.hits.map(s=>`<li class="userItem">
            <a class='link_photo' href="${s.largeImageURL}"
              ><img class="mini_photo" src="${s.webformatURL}" alt="${s.tags}"
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
          </li>`).join("");c.insertAdjacentHTML("beforeend",e),new m(".userItem a").refresh()}}).catch(o=>console.log(o))});
//# sourceMappingURL=commonHelpers.js.map
