import DB from '../src/scripts/data/idb-favorite-restaurant'
import * as TestFactories from './factories/favoriteButtonFactory'

describe('Mark Restaurant as Favorite', () => {
  function _renderContainer () {
    document.body.innerHTML = '<div id="favoriteButtonContainer"></div>'
  }

  beforeEach(() => {
    _renderContainer()
  })

  it('Should show Favorite Button when Restaurant not favorited yet', async () => {
    await TestFactories.initFavoriteButtonWithRestaurant({
      id: 1
    })

    expect(document.querySelector('[aria-label="Favorite this Restaurant"]'))
      .toBeTruthy()
  })

  it('Should not show Unfavorite Button when Restaurant not favorited yet', async () => {
    await TestFactories.initFavoriteButtonWithRestaurant({
      id: 1
    })

    expect(document.querySelector('[aria-label="Unfavorite this Restaurant"]'))
      .toBeFalsy()
  })

  it('Should be able to mark restaurant as Favorite', async () => {
    const restaurantId = 1

    await TestFactories.initFavoriteButtonWithRestaurant({
      id: restaurantId
    })

    document.querySelector('#favoriteButtonContainer').dispatchEvent(new Event('click'))

    const favorited = await DB.findOne(restaurantId)
    expect(favorited).toEqual({
      id: restaurantId
    })

    DB.deleteById(restaurantId)
  })

  it('Should not Favorite Restaurant again after being favorited', async () => {
    const restaurantId = 1
    await TestFactories.initFavoriteButtonWithRestaurant({
      id: restaurantId
    })

    await DB.putOne({
      id: restaurantId
    })

    document.querySelector('#favoriteButtonContainer').dispatchEvent(new Event('click'))

    const favorites = await DB.getAll()
    expect(favorites.length).toEqual(1)
    expect(favorites[0].id).toEqual(restaurantId)

    DB.deleteById(restaurantId)
  })

  it('Should not Add Restaurant when ID is not defined', async () => {
    await TestFactories.initFavoriteButtonWithRestaurant({})

    document.querySelector('#favoriteButtonContainer').dispatchEvent(new Event('click'))

    const favorites = await DB.getAll()
    expect(favorites.length).toEqual(0)
  })
})
