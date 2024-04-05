function renderItem(array) {
  const result = array
    .map(item => {
      return `<li class="userItem">
            <a class='link_photo' href="${item.largeImageURL}"
              ><img class="mini_photo" src="${item.webformatURL}" alt="${item.tags}" title="${item.tags}"
            /></a>
            <ul class="counter">
              <li class="counter_wrapper">
                <h3 class="likes">Likes</h3>
                <p class="likes_amount">${item.likes}</p>
              </li>
              <li class="counter_wrapper">
                <h3 class="views">Views</h3>
                <p class="views_amount">${item.views}</p>
              </li>
              <li class="counter_wrapper">
                <h3 class="comments">Comments</h3>
                <p class="comments_amount">${item.comments}</p>
              </li>
              <li class="counter_wrapper">
                <h3 class="downloads">Downloads</h3>
                <p class="downloads_amount">${item.downloads}</p>
              </li>
            </ul>
          </li>`;
    })
    .join('');
  return result;
}

export default renderItem;
