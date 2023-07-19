import AssetHelper from '../../../../utils/asset-helper'

const ListTemplate = (restaurants = []) => {
  if (restaurants && restaurants.length > 0) {
    return restaurants.map((restaurant) => `
          <article class="favorite__item">
          <a href="/#/resto/${restaurant.id}" class="favorite__link">
          <div class="favorite__img">
          <img class="" src="${AssetHelper.getAsset(restaurant.pictureId)}" alt="${restaurant.name}">
          <div class="favorite__rating">${restaurant.rating}</div>
          </div>
          
          <div class="favorite__inner">
          <h4 class="favorite__city">${restaurant.city}</h4>
          <h3 class="favorite__title">${restaurant.name}</h3>
          </div>
          </a>
          </article>`
    ).join('')
  } else {
    return '<p class="data__message">No Favorite (Restaurants) Found</p>'
  }
}

export default ListTemplate
