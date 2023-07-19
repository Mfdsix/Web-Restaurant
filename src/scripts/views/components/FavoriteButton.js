import DB from '../../data/idb-favorite-restaurant'

const FavoriteButton = {
  async init ({ container, restaurant }) {
    this._container = container
    console.log("init", container)
    this._restaurant = restaurant
    this._isFavorited = false

    await this._renderButton()
  },

  async _renderButton () {
    const { id } = this._restaurant

    this._isFavorited = await this._isRestaurantExist(id)

    this._container.innerHTML = this._isFavorited
      ? '<img src="/icons/favorite-active.png"/>'
      : '<img src="/icons/favorite.png"/>'

    console.log("content", this._container)

    this._container.addEventListener('click', async (event) => {
      this._toggleFavoriteState()
      event.stopPropagation()
    })
  },

  async _isRestaurantExist (id) {
    const restaurant = await DB.findOne(id)
    return !!restaurant
  },

  async _toggleFavoriteState () {
    if (this._isFavorited && this._restaurant && this._restaurant.id) {
      await DB.deleteById(this._restaurant.id)
    } else {
      await DB.putOne(this._restaurant)
    }
    this._renderButton()
  }
}

export default FavoriteButton