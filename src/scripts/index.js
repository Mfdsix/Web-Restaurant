import 'regenerator-runtime'
import '../styles/main.css'
import '../styles/responsive.css'

import App from './views/app'
import swRegister from './utils/sw-register'

const app = new App({
  content: document.querySelector('#maincontent')
})

window.addEventListener('hashchange', () => {
  app.renderPage()
})

window.addEventListener('load', () => {
  app.renderPage()
  swRegister()
})
