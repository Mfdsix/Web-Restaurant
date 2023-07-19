import {
  ListTemplate
} from '../../templates/Restaurant/Favorite'
import DB from '../../../data/idb-favorite-restaurant'

const RestaurantFavoritePage = {
  async render () {
    return `
    <section class="favorite">
    <h3 class="section-title font-title">Puth's Favorite</h3>
    <div class="favorite__background"></div>
    
    <div id="favorite__content"></div>
    </section>
    `
  },

  async afterRender () {
    const favorites = await DB.getAll()
    const favoriteContainer = document.querySelector('#favorite__content')

    if (favorites.length === 0) document.querySelector('.favorite__background').remove()

    favoriteContainer.innerHTML = ListTemplate(favorites)
  }
}

export default RestaurantFavoritePage
