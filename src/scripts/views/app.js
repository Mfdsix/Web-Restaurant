import AppDrawer from './components/AppDrawer'
import UrlParser from '../utils/url-parser'
import routes from '../routes'

class App {
  constructor ({ content }) {
    this._content = content
    this._initialAppShell()
  }

  _initialAppShell () {
    AppDrawer.init({
      hamburger: document.querySelector('#header__menu'),
      drawer: document.querySelector('#drawer'),
      closer: document.querySelector('#drawer__close')
    })
  }

  async renderPage () {
    const url = UrlParser.parseActiveUrlWithCombiner()
    const page = routes[url]

    const removableContents = document.querySelector('.removable')
    removableContents?.remove()

    this._content.innerHTML = await page.render()
    await page.afterRender()

    const skipLinkElem = document.querySelector('.skip-link')
    skipLinkElem.addEventListener('click', (event) => {
      event.preventDefault()
      document.querySelector('#maincontent').focus()
    })
  }
}

export default App
