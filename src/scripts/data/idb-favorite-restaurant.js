import { openDB } from 'idb'
import CONFIG from '../global/config'

const { DATABASE_NAME, DATABASE_VERSION, FAVORITE_STORE_NAME } = CONFIG

const dbPromise = openDB(DATABASE_NAME, DATABASE_VERSION, {
  upgrade (database) {
    database.createObjectStore(FAVORITE_STORE_NAME, { keyPath: 'id' })
  }
})

const IDBFavoriteRestaurant = {
  async findOne (id) {
    if (!id) return
    return (await dbPromise).get(FAVORITE_STORE_NAME, id)
  },
  async getAll () {
    return (await dbPromise).getAll(FAVORITE_STORE_NAME)
  },
  async putOne (restaurant) {
    if (!restaurant || !restaurant.id) return
    return (await dbPromise).put(FAVORITE_STORE_NAME, restaurant)
  },
  async deleteById (id) {
    return (await dbPromise).delete(FAVORITE_STORE_NAME, id)
  }
}

export default IDBFavoriteRestaurant
