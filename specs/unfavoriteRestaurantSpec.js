import FavoriteButton from '../src/scripts/views/components/FavoriteButton'
import DB from '../src/scripts/data/idb-favorite-restaurant'

describe('Unfavorite Restaurant', () => {
  function _renderContainer () {
    document.body.innerHTML = '<div id="favoriteButtonContainer"></div>'
  }

  async function _initFavoriteRestaurant () {
    await DB.putOne({
      id: 1
    })
  }

  beforeEach(() => {
    _renderContainer()
    _initFavoriteRestaurant()
  })

  afterEach(async () => {
    await DB.deleteById(1)
  })

  it('Should show Unfavorite Button when Restaurant favorited', async () => {
    await FavoriteButton.init({
      container: document.querySelector('#favoriteButtonContainer'),
      restaurant: {
        id: 1
      }
    })

    expect(document.querySelector('[aria-label="Unfavorite this Restaurant"]'))
      .toBeTruthy()
  })

  it('Should not show Favorite Button when Restaurant favorited', async () => {
    await FavoriteButton.init({
      container: document.querySelector('#favoriteButtonContainer'),
      restaurant: {
        id: 1
      }
    })

    expect(document.querySelector('[aria-label="Favorite this Restaurant"]'))
      .toBeFalsy()
  })

  it('Should be able to Unfavorite Restaurant', async () => {
    const restaurantId = 1

    await FavoriteButton.init({
      container: document.querySelector('#favoriteButtonContainer'),
      restaurant: {
        id: restaurantId
      }
    })

    document.querySelector('#favoriteButtonContainer').dispatchEvent(new Event('click'))

    const favorited = await DB.findOne(restaurantId)
    expect(favorited).toBeUndefined()
  })

  it('Should not Remove Restaurant when ID is not defined', async () => {
    await FavoriteButton.init({
      container: document.querySelector('#favoriteButtonContainer'),
      restaurant: {}
    })

    document.querySelector('#favoriteButtonContainer').dispatchEvent(new Event('click'))

    const favorites = await DB.getAll()
    expect(favorites.length).toEqual(1)
  })
})
