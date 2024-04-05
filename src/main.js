import useApi from './js/pixabay-api';

const form = document.querySelector('form');
const userList = document.querySelector('.userList');
const loader = document.querySelector('.loader');

form.addEventListener('submit', e => {
  e.preventDefault();
  userList.innerHTML = '';
  loader.style.display = 'inline-block';
  const requestText = form.elements.request.value;

  useApi(requestText, userList, loader);
});
