const assert = require('assert')

const timeToWaitInSec = 5

Feature('Favorite Restaurant')

Scenario('Empty Favorite', ({ I }) => {
  I.amOnPage('/#/favorite')
  I.seeElement('#favorite__content')
  I.see('No Favorite (Restaurants) Found', '.data__message')
})

Scenario('Mark as Favorite', async ({ I }) => {
  I.amOnPage('/')

  //   select first restaurant
  I.seeElement('#best__content')
  I.waitForElement('.best__item .best__link', timeToWaitInSec)
  const firstRestaurant = locate('.best__item .best__link').first()
  const firstRestaurantName = await I.grabTextFrom(locate('.best__title').first())
  I.click(firstRestaurant)

  //   mark as favorite
  I.seeElement('.detail__inner')
  I.waitForElement('.detail__title h1', timeToWaitInSec)
  const detailRestaurantName = await I.grabTextFrom('.detail__title h1')
  assert.strictEqual(firstRestaurantName, detailRestaurantName)

  I.seeElement('#btn__favorite')
  I.click('#btn__favorite')

  //   check favorited restaurant
  I.amOnPage('/#/favorite')
  I.seeElement('#favorite__content')
  I.waitForElement('.favorite__item', timeToWaitInSec)
  I.seeNumberOfElements('.favorite__item', 1)

  const favoriteRestaurantName = await I.grabTextFrom(locate('.favorite__title').first())
  assert.strictEqual(detailRestaurantName, favoriteRestaurantName)
})

Scenario('Mark as Unfavorite', async ({ I }) => {
  I.amOnPage('/')

  //   select first restaurant
  I.seeElement('#best__content')
  I.waitForElement('.best__item .best__link', timeToWaitInSec)
  const firstRestaurant = locate('.best__item .best__link').first()
  const firstRestaurantName = await I.grabTextFrom(locate('.best__title').first())
  I.click(firstRestaurant)

  //   mark as favorite
  I.seeElement('.detail__inner')
  I.waitForElement('.detail__title h1', timeToWaitInSec)
  const detailRestaurantName = await I.grabTextFrom('.detail__title h1')
  assert.strictEqual(firstRestaurantName, detailRestaurantName)

  I.seeElement('#btn__favorite')
  I.click('#btn__favorite')

  //   check favorite restaurant
  I.amOnPage('/#/favorite')
  I.seeElement('#favorite__content')
  I.waitForElement('.favorite__item', timeToWaitInSec)
  I.seeNumberOfElements('.favorite__item', 1)

  const favoriteRestaurantName = await I.grabTextFrom(locate('.favorite__title').first())
  assert.strictEqual(detailRestaurantName, favoriteRestaurantName)
  const firstFavorite = locate('.favorite__link').first()
  I.click(firstFavorite)

  //   mark as unfavorite
  I.seeElement('.detail__inner')
  I.waitForElement('.detail__title h1', timeToWaitInSec)
  const detailRestaurantName2 = await I.grabTextFrom('.detail__title h1')
  assert.strictEqual(favoriteRestaurantName, detailRestaurantName2)

  I.seeElement('#btn__favorite')
  I.click('#btn__favorite')

  //   check empty favorite
  I.amOnPage('/#/favorite')
  I.seeElement('#favorite__content')
  I.see('No Favorite (Restaurants) Found', '.data__message')
})
