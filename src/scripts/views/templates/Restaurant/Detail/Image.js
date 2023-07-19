import AssetHelper from '../../../../utils/asset-helper'

const ImageTemplate = ({ imageId, rating }) => `
    <img src="${AssetHelper.getAsset(imageId)}"/>
    <div class="detail__rating">${rating}</div>
`

export default ImageTemplate
