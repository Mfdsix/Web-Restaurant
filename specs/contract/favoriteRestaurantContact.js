const itActsAsFavoriteRestaurantModel = (favoriteRestaurant) => {
  it('Should return the restaurant that has been added', async () => {
    favoriteRestaurant.putOne({
      id: 1
    })
    favoriteRestaurant.putOne({
      id: 2
    })

    const favoriteOne = await favoriteRestaurant.findOne(1)
    expect(favoriteOne).toEqual({ id: 1 })
    const favoriteTwo = await favoriteRestaurant.findOne(2)
    expect(favoriteTwo).toEqual({ id: 2 })
    const favoriteThree = await favoriteRestaurant.findOne(3)
    expect(favoriteThree).toBeUndefined()
  })

  it('Should not add invalid restaurant data', async () => {
    favoriteRestaurant.putOne({
      invalidProp: 'validValue'
    })

    const favorites = await favoriteRestaurant.getAll()
    expect(favorites.length).toEqual(0)
  })

  it('Should return valid data after adding restaurants', async () => {
    favoriteRestaurant.putOne({
      id: 1
    })
    favoriteRestaurant.putOne({
      id: 2
    })

    const favorites = await favoriteRestaurant.getAll()
    expect(favorites.length).toEqual(2)
    expect(favorites[0]).toEqual({ id: 1 })
    expect(favorites[1]).toEqual({ id: 2 })
  })

  it('Should remove favorited restaurant', async () => {
    favoriteRestaurant.putOne({
      id: 1
    })
    favoriteRestaurant.putOne({
      id: 2
    })
    favoriteRestaurant.putOne({
      id: 3
    })

    await favoriteRestaurant.deleteById(2)

    const favorites = await favoriteRestaurant.getAll()
    expect(favorites.length).toEqual(2)
    expect(favorites[0]).toEqual({ id: 1 })
    expect(favorites[1]).toEqual({ id: 3 })
  })

  it('Should not remove restaurant when not exist on model', async () => {
    favoriteRestaurant.putOne({
      id: 1
    })
    favoriteRestaurant.putOne({
      id: 2
    })
    favoriteRestaurant.putOne({
      id: 3
    })

    await favoriteRestaurant.deleteById(123)

    const favorites = await favoriteRestaurant.getAll()
    expect(favorites.length).toEqual(3)
    expect(favorites[0]).toEqual({ id: 1 })
    expect(favorites[1]).toEqual({ id: 2 })
    expect(favorites[2]).toEqual({ id: 3 })
  })
}

export {
  itActsAsFavoriteRestaurantModel
}
