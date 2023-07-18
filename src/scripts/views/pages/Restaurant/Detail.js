import DicodingRestaurantSource from '../../../data/dicoding-restaurant-source'
import UrlParser from '../../../utils/url-parser'

const RestaurantDetailPage = {
  async render () {},

  async afterRender () {
    const url = UrlParser.parseActiveUrlWithoutCombiner()
    const restaurant = await DicodingRestaurantSource.detailRestaurant(url.id)
    const detailContainer = document.querySelector('a')

    detailContainer.innerHTML += restaurant
  }
}

export default RestaurantDetailPage
