import DicodingRestaurantSource from '../../data/dicoding-restaurant-source'
import { HeroTemplate, BestRestaurantTemplate, BestRestaurantShimmer } from '../templates/Home'

const HomePage = {
  async render () {
    this._renderHero()

    return `
    <section class="best">
      <h3 class="section-title font-title">Puth's Best</h3>
      <div class="best__background"></div>
        
      <div id="best__content"></div>
    </section>`
  },

  async afterRender () {
    const restaurantContainer = document.querySelector('#best__content')

    this._renderBestRestaurantShimmer(restaurantContainer)
    const restaurants = await DicodingRestaurantSource.allRestaurants()

    restaurantContainer.innerHTML = BestRestaurantTemplate(restaurants)
  },

  _renderHero () {
    document.querySelector('#maincontent').insertAdjacentHTML('beforebegin', HeroTemplate)
  },

  _renderBestRestaurantShimmer (container) {
    container.innerHTML = BestRestaurantShimmer(8)
  }
}

export default HomePage
