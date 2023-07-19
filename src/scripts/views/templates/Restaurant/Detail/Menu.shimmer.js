const MenuShimmer = (count = 10) => {
  const items = []
  for (let i = 0; i < count; i++) {
    items.push(`
        <div class="placeholder" style="height: 150px"></div>
    `)
  }

  return `
  <div class="menu__inner">
    ${items.join('')}
  </div>`
}

export default MenuShimmer
