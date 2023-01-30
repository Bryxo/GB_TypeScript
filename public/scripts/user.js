import { renderBlock } from './lib.js';
export function renderUserBlock() {
    const userData = getUserData();
    const favoritesAmount = getFavoritesAmount();
    const favoritesCaption = favoritesAmount ? favoritesAmount : 'ничего нет';
    const hasFavoriteItems = favoritesAmount ? true : false;
    renderBlock('user-block', `
    <div class="header-container">
      <img class="avatar" src="${userData.avatarUrl}" alt="Wade Warren" />
      <div class="info">
          <p class="name">${userData.username}</p>
          <p class="fav">
            <i class="heart-icon${hasFavoriteItems ? ' active' : ''}"></i>${favoritesCaption}
          </p>
      </div>
    </div>
    `);
}
export function getUserData() {
    const user = JSON.parse(localStorage.getItem('user') || '');
    const emptyUser = {
        username: 'unknown',
        avatarUrl: '/img/empty.png'
    };
    const result = {
        username: isUser(user) ? user.username : emptyUser.username,
        avatarUrl: isUser(user) ? user.avatarUrl : emptyUser.avatarUrl
    };
    return result;
}
function isUser(user) {
    return typeof user === 'object' && user !== null && 'username' in user && 'avatarUrl' in user;
}
export function getFavoritesAmount() {
    const favoriteItems = getFavorites();
    return favoriteItems.length;
}
function getFavorites() {
    const favoriteItems = JSON.parse(localStorage.getItem('favoriteItems') || '');
    if (!Array.isArray(favoriteItems) || favoriteItems.length === 0) {
        return [];
    }
    return favoriteItems;
}
export function toggleFavorites(favPlace) {
    const favoriteItems = getFavorites();
    const filtredFavorites = favoriteItems.filter((fav) => fav.id !== favPlace.id);
    filtredFavorites.length === favoriteItems.length ?
        localStorage.setItem('favoriteItems', JSON.stringify([...favoriteItems, favPlace])) :
        localStorage.setItem('favoriteItems', JSON.stringify(filtredFavorites));
}
export function isFavorite(placeId) {
    const favoriteItems = getFavorites();
    return favoriteItems.find((fav) => fav.id === placeId) ? true : false;
}
