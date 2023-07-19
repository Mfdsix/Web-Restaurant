import RestaurantDetail from '../views/pages/Restaurant/Detail'
import RestaurantFavoritePage from '../views/pages/Restaurant/Favorite'

export default {
  '/favorite': RestaurantFavoritePage,
  '/resto/:id': RestaurantDetail
}
