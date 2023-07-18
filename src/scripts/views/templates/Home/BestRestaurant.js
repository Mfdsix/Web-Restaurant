import AssetHelper from '../../../utils/asset-helper'

const BestRestaurantTemplate = (restaurants = []) => restaurants.map((restaurant) => `
    <article class="best__item">
        <a href="/#/resto/${restaurant.id}" class="best__link">
            <div class="best__img">
                <img class="" src="${AssetHelper.getAsset(restaurant.pictureId)}" alt="${restaurant.name}">
                <div class="best__rating">${restaurant.rating}</div>
            </div>

            <div class="best__inner">
                <h4 class="best__city">${restaurant.city}</h4>
                <h3 class="best__title">${restaurant.name}</h3>
            </div>
        </a>
    </article>`
).join('')

export default BestRestaurantTemplate
