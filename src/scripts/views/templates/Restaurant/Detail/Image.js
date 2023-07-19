import AssetHelper from '../../../../utils/asset-helper'

const ImageTemplate = ({ imageAlt, imageId, rating }) => `
    <img src="${AssetHelper.getAsset(imageId)}" alt="${imageAlt}"/>
    <div class="detail__rating">${rating}</div>
`

export default ImageTemplate
