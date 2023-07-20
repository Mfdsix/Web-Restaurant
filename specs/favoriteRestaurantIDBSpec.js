import { itActsAsFavoriteRestaurantModel } from './contract/favoriteRestaurantContact'
import IDBFavoriteRestaurant from '../src/scripts/data/idb-favorite-restaurant'

describe('Favorite Restaurant IDB Match Contract', () => {
  afterEach(async () => {
    const favorites = await IDBFavoriteRestaurant.getAll()
    favorites.forEach(async ({ id }) => {
      await IDBFavoriteRestaurant.deleteById(id)
    })
  })

  itActsAsFavoriteRestaurantModel(IDBFavoriteRestaurant)
})
