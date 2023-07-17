import 'regenerator-runtime' /* for async await transpile */
import '../styles/main.css'
import '../styles/responsive.css'
import DATA from "../public/data/DATA.json"

const { restaurants } = DATA

// load restaurants data
const FAVORITE_CONTENT = document.querySelector(".favorite__content")

let _favorite_contents = ''
restaurants.forEach((restaurant) => {
    _favorite_contents += `
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
      </article>
    `
})

FAVORITE_CONTENT.innerHTML = _favorite_contents


// drawer transition
const DRAWER_TRIGGER = document.querySelector("#header__menu")
const DRAWER_CLOSE = document.querySelector("#drawer__close")
const DRAWER = document.querySelector("#drawer")

DRAWER_TRIGGER.addEventListener("click", function(event){
    DRAWER.classList.add("open")
    event.stopPropagation()
})
DRAWER_CLOSE.addEventListener("click", function(event){
    DRAWER.classList.remove("open")
    event.stopPropagation()
})