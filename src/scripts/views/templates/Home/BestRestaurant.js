import 'lazysizes'
import 'lazysizes/plugins/parent-fit/ls.parent-fit'
import AssetHelper from '../../../utils/asset-helper'

const BestRestaurantTemplate = (restaurants = []) => restaurants.map((restaurant) => `
    <article class="best__item">
        <div class="best__img">
            <img class="lazyload" data-src="${AssetHelper.getAsset(restaurant.pictureId)}" alt="${restaurant.name}"/>
            <div class="best__rating">${restaurant.rating}</div>
        </div>
    
        <div class="best__inner">
            <a href="/#/resto/${restaurant.id}" class="best__link">
                <h4 class="best__city">${restaurant.city}</h4>
                <h3 class="best__title">${restaurant.name}</h3>
            </a>

            <a href="javascript:void(0)" data-id="${restaurant.id}" class="btn__favorite"></a>
        </div>
    </article>`
).join('')

export default BestRestaurantTemplate
