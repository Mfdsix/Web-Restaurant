const MenuTemplate = (menus) => {
  if (menus) {
    return `
        <h3 class="section-title font-title">Puth's Selection</h3>

        <div class="menu__inner">` +
        _renderMenuItems(menus) +
        `</div>
        `
  }

  return ''
}

const _renderMenuItems = (menus) => {
  const { foods, drinks } = menus
  return [...foods, ...drinks].map((menu) => {
    return `<div class="menu__item">${menu.name}</div>`
  }).join('')
}

export default MenuTemplate
