const HeroTemplate = `
<div class="hero removable">
    <picture>
        <source media="(max-width: 600px)" type="image/webp" srcset="/images/hero-image-sm.webp">
        <source media="(max-width: 600px)" type="image/jpeg" srcset="/images/hero-image-sm.jpg">
        <source type="image/webp" srcset="/images/hero-image-lg.webp">
        <source type="image/jpeg" srcset="/images/hero-image-lg.jpg">
        <img class="hero__img" src="/images/hero-image-lg.jpg" alt="Food Hero Background">
    </picture>

    <div class="hero__inner">
        <h1 class="font-title">PUTH FOOD</h1>
        <h2>YOUR FOOD SOLUTION</h2>

        <div class="hero__description">
            <p>Discover best food in your area with PUTH FOOD now. Your deserve for the best meal.</p>
            <a href="#maincontent">Discover NOW</a>
        </div>
    </div>
</div>
`

export default HeroTemplate
