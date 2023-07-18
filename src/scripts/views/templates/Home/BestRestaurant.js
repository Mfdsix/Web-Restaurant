const BestRestaurantTemplate = (restaurants) => `
    <section class="favorite">
        <h3 class="section-title font-title">Puth's Best</h3>
        <div class="favorite__background"></div>

        <div class="favorite__content">` +
        restaurants.map((restaurant) => `
            <article class="favorite__item">
                <div class="favorite__img">
                    <img class="" src="${restaurant.pictureId}" alt="${restaurant.name}">
                    <div class="favorite__rating">${restaurant.rating}</div>
                </div>
                <div class="favorite__inner">
                    <a href="#" class="favorite__link">
                        <h4 class="favorite__city">${restaurant.city}</h4>
                        <h3 class="favorite__title">${restaurant.name}</h3>
                    </a>
                </div>
            </article>`
        ).join('') +
        `</div>
    </section>
`

export default BestRestaurantTemplate
