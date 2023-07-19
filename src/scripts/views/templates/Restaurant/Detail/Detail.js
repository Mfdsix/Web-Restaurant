const DetailTemplate = (restaurant) => `
    <div class="detail__title">
      <h1>${restaurant.name}</h1>

      <a data-id="${restaurant.id}" href="javascript:void(0)" id="btn__favorite"></a>
    </div>` +
    _renderCategories(restaurant.categories) +
    `<h3 class="detail__city">${restaurant.city}</h3>
    <span>${restaurant.address}</span>
    <p class="detail__description">${restaurant.description}</p>
`

const _renderCategories = (categories) => {
  return `
    <div class="detail__category">` +

    categories.map((category) => {
      return `<span class="detail__category__item">${category.name}</span>`
    }).join('') +

    '</div>'
}

export default DetailTemplate
