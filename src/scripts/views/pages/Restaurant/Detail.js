import DicodingRestaurantSource from '../../../data/dicoding-restaurant-source'
import UrlParser from '../../../utils/url-parser'
import {
  ImageTemplate,
  DetailTemplate,
  ReviewTemplate,
  MenuTemplate,
  ImageShimmer,
  DetailShimmer,
  MenuShimmer,
  ReviewShimmer
} from '../../templates/Restaurant/Detail'
import FavoriteButton from '../../components/FavoriteButton'

const RestaurantDetailPage = {
  async render () {
    return `
    <section class="detail">
      <div class="detail__inner">
        <div id="detail__img"></div>

        <div id="detail__content"></div>
      </div>
    </section>

    <section id="restaurant_menu"></section>

    <section class="review">
      <h3 class="section-title font-title">Puth's Reputation</h3>
      <div class="review__background"></div>

      <div id="review__inner"></div>
    </section>
    `
  },

  async afterRender () {
    this.renderShimmer()

    const url = UrlParser.parseActiveUrlWithoutCombiner()
    const detail = await DicodingRestaurantSource.detailRestaurant(url.id)

    if (detail && !detail.error) {
      const { restaurant } = detail

      const imageContainer = document.querySelector('#detail__img')
      const detailContainer = document.querySelector('#detail__content')
      const menuContainer = document.querySelector('#restaurant_menu')
      const reviewContainer = document.querySelector('#review__inner')

      imageContainer.innerHTML = ImageTemplate({
        imageId: restaurant.pictureId,
        rating: restaurant.rating
      })
      menuContainer.innerHTML = MenuTemplate(restaurant.menus)
      detailContainer.innerHTML = DetailTemplate(restaurant)
      reviewContainer.innerHTML = ReviewTemplate(restaurant.customerReviews)

      const favoriteContainer = document.querySelector('#btn__favorite')
      favoriteContainer.innerHTML = FavoriteButton.init({
        container: favoriteContainer,
        restaurant
      })
    } else {
      alert('Restaurant Not Found')
    }
  },

  renderShimmer () {
    const imageContainer = document.querySelector('#detail__img')
    const detailContainer = document.querySelector('#detail__content')
    const menuContainer = document.querySelector('#restaurant_menu')
    const reviewContainer = document.querySelector('#review__inner')

    imageContainer.innerHTML = ImageShimmer()
    detailContainer.innerHTML = DetailShimmer()
    menuContainer.innerHTML = MenuShimmer()
    reviewContainer.innerHTML = ReviewShimmer()
  }
}

export default RestaurantDetailPage
