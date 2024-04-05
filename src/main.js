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
    .then(users => {
      if (users.total === 0) {
        iziToast.error({
          position: 'topRight',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
      } else {
        const markup = users
          .map(user => {
            return `<li>

                  </li>`;
          })
          .join('');
        userList.insertAdjacentHTML('beforeend', markup);
      }
      console.log(users);
    })
    .catch(error => console.log(error));
});
