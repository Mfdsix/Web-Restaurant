import API_ENDPOINT from '../global/api-endpoint'
import CONFIG from '../global/config'

const HttpRequest = (endpoint) => {
  return fetch(`${CONFIG.BASE_URL}${endpoint}`)
}

class DicodingRestaurantSource {
  static async allRestaurants () {
    const response = await HttpRequest(API_ENDPOINT.GET_ALL_RESTAURANT)
    const responseJson = await response.json()
    return responseJson.restaurants
  }

  static async detailRestaurant (id) {
    const response = await fetch(API_ENDPOINT.GET_DETAIL_RESTAURANT(id))
    return response.json()
  }
}

export default DicodingRestaurantSource
