const FavoriteButton = {
  async init ({ container, restaurant, storage }) {
    if (!restaurant || !restaurant.id) return

    this._storage = storage

    this._container = container
    this._restaurant = restaurant
    this._isFavorited = false

    await this._renderButton()
  },

  async _renderButton () {
    const { id } = this._restaurant

    this._isFavorited = await this._isRestaurantExist(id)

    this._container.setAttribute('aria-label', this._isFavorited ? 'Unfavorite this Restaurant' : 'Favorite this Restaurant')

    this._container.innerHTML = this._isFavorited
      ? '<img src="/icons/favorite-active.png" alt=""/>'
      : '<img src="/icons/favorite.png" alt=""/>'

    this._container.addEventListener('click', async (event) => {
      this._toggleFavoriteState()
      event.stopPropagation()
    })
  },

  async _isRestaurantExist (id) {
    const restaurant = await this._storage.findOne(id)
    return !!restaurant
  },

  async _toggleFavoriteState () {
    if (this._isFavorited && this._restaurant && this._restaurant.id) {
      await this._storage.deleteById(this._restaurant.id)
    } else {
      await this._storage.putOne(this._restaurant)
    }
    this._renderButton()
  }
}

export default FavoriteButton
