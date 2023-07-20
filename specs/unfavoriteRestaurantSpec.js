import DB from '../src/scripts/data/idb-favorite-restaurant'
import * as TestFactories from './factories/favoriteButtonFactory'

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
    await TestFactories.initFavoriteButtonWithRestaurant({
      id: 1
    })

    expect(document.querySelector('[aria-label="Unfavorite this Restaurant"]'))
      .toBeTruthy()
  })

  it('Should not show Favorite Button when Restaurant favorited', async () => {
    await TestFactories.initFavoriteButtonWithRestaurant({
      id: 1
    })

    expect(document.querySelector('[aria-label="Favorite this Restaurant"]'))
      .toBeFalsy()
  })

  it('Should be able to Unfavorite Restaurant', async () => {
    const restaurantId = 1

    await TestFactories.initFavoriteButtonWithRestaurant({
      id: restaurantId
    })

    document.querySelector('#favoriteButtonContainer').dispatchEvent(new Event('click'))

    const favorited = await DB.findOne(restaurantId)
    expect(favorited).toBeUndefined()
  })

  it('Should not Remove Restaurant when ID is not defined', async () => {
    await TestFactories.initFavoriteButtonWithRestaurant({})

    document.querySelector('#favoriteButtonContainer').dispatchEvent(new Event('click'))

    const favorites = await DB.getAll()
    expect(favorites.length).toEqual(1)
  })
})
