import FavoriteButton from '../../src/scripts/views/components/FavoriteButton'

const initFavoriteButtonWithRestaurant = async (restaurant) => {
  await FavoriteButton.init({
    container: document.querySelector('#favoriteButtonContainer'),
    restaurant
  })
}

export {
  initFavoriteButtonWithRestaurant
}
