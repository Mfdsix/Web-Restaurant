import 'lazysizes'
import 'lazysizes/plugins/parent-fit/ls.parent-fit'
import AssetHelper from '../../../../utils/asset-helper'

const ImageTemplate = ({ imageAlt, imageId, rating }) => `
    <img class="lazyload" data-src="${AssetHelper.getAsset(imageId)}" alt="${imageAlt}"/>
    <div class="detail__rating">${rating}</div>
`

export default ImageTemplate
