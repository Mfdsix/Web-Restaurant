const ReviewTemplate = (reviews) => reviews.map((review) => {
  return `
    <article class="review__item">
        <img src="https://placehold.co/400" class="review__img"/>

        <div class="review__content">
        <h3 class="review__name">${review.name}</h3>
        <p class="review__description">${review.review}</p>
        </div>
    </article>
    `
}).join('')

export default ReviewTemplate
