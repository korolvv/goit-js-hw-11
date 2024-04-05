import iziToast from 'izitoast';
import SimpleLightbox from 'simplelightbox';
import renderItem from './render-functions';

import 'simplelightbox/dist/simple-lightbox.min.css';
import 'izitoast/dist/css/iziToast.min.css';

function useApi(request, userList, loader) {
  const searchParams = new URLSearchParams({
    key: '43243729-04275528cc78ca8d3cba6ce95',
    q: request,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  fetch(`https://pixabay.com/api/?${searchParams}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      loader.style.display = 'none';
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
        const item = renderItem(pictures);
        userList.insertAdjacentHTML('beforeend', item);
        const lightbox = new SimpleLightbox('.userItem a');
        lightbox.refresh();
      }
    })
    .catch(error => console.log(error));
}

export default useApi;
