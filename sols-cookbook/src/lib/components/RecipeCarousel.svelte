<script>
  import RecipeCard from './RecipeCard.svelte';
  import Icon from './Icon.svelte';

  let { recipes = [], showDots = true, showArrows = true } = $props();

  let currentIndex = $state(0);
  // Calculate total slides
  let totalSlides = $derived(recipes.length);

  // Navigate to specific slide
  function goToSlide(index) {
    currentIndex = Math.max(0, Math.min(index, totalSlides - 1));
  }

  // Next slide
  function nextSlide() {
    currentIndex = currentIndex === totalSlides - 1 ? 0 : currentIndex + 1;
  }

  // Previous slide
  function prevSlide() {
    currentIndex = currentIndex === 0 ? totalSlides - 1 : currentIndex - 1;
  }
</script>

<div
  class="recipe-carousel"
  aria-label="Recipe Carousel"
  role="region"
  aria-roledescription="Recipe Carousel"
>
  <div class="recipe-carousel__track" style="transform: translateX(-{currentIndex * 100}%)">
    {#each recipes as recipe, index}
      <div class="recipe-carousel__slide" class:active={index === currentIndex}>
        <RecipeCard {recipe} />
      </div>
    {/each}
  </div>
</div>

{#if showArrows}
  <button
    class="recipe-carousel__arrow recipe-carousel__arrow--prev"
    onclick={prevSlide}
    aria-label="Previous Slide"
  >
    <Icon name="chevron-left" size={48} class="recipe-carousel__arrow-icon" color="#05025f" />
  </button>

  <button
    class="recipe-carousel__arrow recipe-carousel__arrow--next"
    onclick={nextSlide}
    aria-label="Next Slide"
  >
    <Icon name="chevron-right" size={48} class="recipe-carousel__arrow-icon" color="#05025f" />
  </button>
{/if}

{#if showDots}
  <div class="recipe-carousel__dots">
    {#each recipes as _, index}
      <button
        class="carousel-dot"
        class:active={index === currentIndex}
        onclick={() => goToSlide(index)}
        aria-label="Go to slide {index + 1}"
      ></button>
    {/each}
  </div>
{/if}

<style>
  .recipe-carousel {
    position: relative;
    overflow: hidden;
    max-width: 1200px;
    max-height: 800px;
    margin: 0 auto;
  }

  .recipe-carousel__track {
    width: 100%;
    height: 100%;
    display: flex;
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    will-change: transform;
  }

  .recipe-carousel__slide {
    flex: 0 0 100%;
    min-width: 0;
    position: relative;
    height: 800px;
    width: 100%;
  }

  .recipe-carousel__arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    cursor: pointer;
  }

  .recipe-carousel__arrow:hover {
    background: none;
    border: none;
    cursor: pointer;
    transform: translateY(-50%) scale(1.1);
  }

  .recipe-carousel__arrow--prev {
    left: 10px;
  }

  .recipe-carousel__arrow--next {
    right: 10px;
  }

  .recipe-carousel__arrow-icon {
    width: 24px;
    height: 24px;
    color: #05025f;
    cursor: pointer;
    fill: #05025f;
  }

  .recipe-carousel__dots {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 8px;
    z-index: 10;
  }

  .carousel-dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.5);
    border: none;
    cursor: pointer;
  }

  .carousel-dot.active {
    background: white;
  }
</style>
