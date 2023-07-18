const AppDrawer = {
  init ({ hamburger, drawer, closer }) {
    hamburger.addEventListener('click', (event) => {
      drawer.classList.add('open')
      event.stopPropagation()
    })

    closer.addEventListener('click', (event) => {
      drawer.classList.add('open')
      event.stopPropagation()
    })
  }
}

export default AppDrawer
