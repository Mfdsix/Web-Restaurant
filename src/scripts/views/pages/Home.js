import DicodingRestaurantSource from '../../data/dicoding-restaurant-source'

const HomePage = {
  async render () {
    return `
        <div>
        </div>
        `
  },

  async afterRender () {
    const restaurants = await DicodingRestaurantSource.allRestaurants()
    const restaurantContainer = document.querySelector('#favorite')

    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += ''
    })
  }
}

export default HomePage
