import HomePage from '../views/pages/Home'
import RestaurantRoutes from './restaurant'

const routes = {
  '/': HomePage,
  ...RestaurantRoutes
}

export default routes
