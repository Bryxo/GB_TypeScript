import { renderBlock } from './lib.js';
// export function renderUserBlock (favoriteItemsAmount) {
//   const favoritesCaption = favoriteItemsAmount ? favoriteItemsAmount : 'ничего нет'
//   const hasFavoriteItems = favoriteItemsAmount ? true : false
export function renderUserBlock(userName, userAvatarUrl, favoriteItemsAmount, userNameAlt) {
    const favoritesCaption = favoriteItemsAmount ? favoriteItemsAmount : 'ничего нет nonono';
    const hasFavoriteItems = favoriteItemsAmount ? true : false;
    renderBlock('user-block', `
    <div class="header-container">
      <img class="avatar" src="${userAvatarUrl}" alt="${userNameAlt}" />
      <div class="info">
          <p class="name">${userName}</p>
          <p class="fav">
            <i class="heart-icon${hasFavoriteItems ? ' active' : ''}"></i>${favoritesCaption}
          </p>
      </div>
    </div>
    `);
}
