import iziToast from 'izitoast';
import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('form');
const waitingText = document.querySelector('.waitingText');
const userList = document.querySelector('.userList');

form.addEventListener('submit', e => {
  waitingText.removeAttribute('hidden');
  e.preventDefault();
  const searchParams = new URLSearchParams({
    key: '43243729-04275528cc78ca8d3cba6ce95',
    q: form.elements.request.value,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });
  fetch(`https://pixabay.com/api/?${searchParams}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      waitingText.setAttribute('hidden', 'hidden');
      return response.json();
    })
    .then(response => {
      if (response.total === 0) {
        iziToast.error({
          position: 'topRight',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
      } else {
        const pictures = response.hits;
        const markup = pictures
          .map(picture => {
            return `<li class="userItem">
            <a href="#"
              ><img class="mini_photo" src="${picture.webformatURL}" alt="${picture.tags}"
            /></a>
            <a hidden href="#"><img src="${picture.largeImageURL}" alt="${picture.tags}" /></a>
            <ul class="counter">
              <li class="counter_wrapper">
                <h3 class="likes">Likes</h3>
                <p class="likes_amount">${picture.likes}</p>
              </li>
              <li class="counter_wrapper">
                <h3 class="views">Views</h3>
                <p class="views_amount">${picture.views}</p>
              </li>
              <li class="counter_wrapper">
                <h3 class="comments">Comments</h3>
                <p class="comments_amount">${picture.comments}</p>
              </li>
              <li class="counter_wrapper">
                <h3 class="downloads">Downloads</h3>
                <p class="downloads_amount">${picture.downloads}</p>
              </li>
            </ul>
          </li>`;
          })
          .join('');
        userList.insertAdjacentHTML('beforeend', markup);
      }
    })
    .catch(error => console.log(error));
});
