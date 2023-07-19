const ReviewShimmer = (count = 3) => {
  const items = []
  for (let i = 0; i < count; i++) {
    items.push(`
        <div class="placeholder" style="height: 200px; margin-bottom: 20px"></div>
    `)
  }

  return `
  <div class="menu__inner">
    ${items.join('')}
  </div>`
}

export default ReviewShimmer
