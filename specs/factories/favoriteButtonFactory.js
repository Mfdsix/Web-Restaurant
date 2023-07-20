import FavoriteButton from '../../src/scripts/views/components/FavoriteButton'
import IDBFavoriteRestaurant from '../../src/scripts/data/idb-favorite-restaurant'

const initFavoriteButtonWithRestaurant = async (restaurant) => {
  await FavoriteButton.init({
    container: document.querySelector('#favoriteButtonContainer'),
    restaurant,
    storage: IDBFavoriteRestaurant
  })
}

export {
  initFavoriteButtonWithRestaurant
}
