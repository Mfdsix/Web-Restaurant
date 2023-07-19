const DetailShimmer = (restaurant) => `
    <h1 class="detail__title">${restaurant.name}</h1>` +

    _renderCategories(restaurant.categories) +

    `<h3 class="detail__city">${restaurant.city}</h3>
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

export default DetailShimmer
