const BestRestaurantShimmer = (count = 5) => {
  const items = []
  for (let i = 0; i < count; i++) {
    items.push(`
        <div>
            <div class="placeholder" style="width: 100%; height: 250px"></div>

            <div style="margin-top: 20px">
                <div class="placeholder" style="width: 100px; height: 20px; margin-bottom: 5px"></div>
                <div class="placeholder" style="width: 75%px; height: 50px"></div>
            </div>
        </div>
        `)
  }

  return items.join('')
}

export default BestRestaurantShimmer
