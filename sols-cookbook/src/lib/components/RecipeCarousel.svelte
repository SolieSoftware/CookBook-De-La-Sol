<script>
import { onMount } from "svelte";

let { 
  recipes = [], 
  autoplay = false, 
  autoplayInterval = 3000, 
  showDots = true, 
  showArrows = true 
} = $props();

let currentIndex = $state(0);
let carouselContainer = $state();
let autoplayTimer = $state();
let isDragging = $state(false);
let startX = $state(0);
let currentX = $state(0);

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
  
  // Autoplay functionality
  function startAutoplay() {
    if (autoplay) {
      autoplayTimer = setInterval(nextSlide, autoplayInterval);
    }
  }
  
  function stopAutoplay() {
    if (autoplayTimer) {
      clearInterval(autoplayTimer);
    }
  }
  
  // Touch/Mouse drag functionality
  function handleStart(e) {
    isDragging = true;
    startX = e.type === 'mousedown' ? e.clientX : e.touches[0].clientX;
    stopAutoplay();
  }
  
  function handleMove(e) {
    if (!isDragging) return;
    currentX = e.type === 'mousemove' ? e.clientX : e.touches[0].clientX;
  }
  
  function handleEnd() {
    if (!isDragging) return;
    isDragging = false;
    
    const deltaX = currentX - startX;
    const threshold = 50; // Minimum distance to trigger slide change
    
    if (deltaX > threshold) {
      prevSlide();
    } else if (deltaX < -threshold) {
      nextSlide();
    }
    
    startAutoplay();
  }
  
  // Keyboard navigation
  function handleKeydown(e) {
    if (e.key === 'ArrowLeft') {
      prevSlide();
    } else if (e.key === 'ArrowRight') {
      nextSlide();
    }
  }
  
  onMount(() => {
    startAutoplay();
    return () => stopAutoplay();
  });
</script>


<div 
class="recipe-carousel"
on:mouseenter={stopAutoplay}
on:mouseleave={startAutoplay}
on:keydown={handleKeydown}
aria-label="Recipe Carousel"
role="region"
aria-roledescription="Recipe Carousel"
>
    <div 
    class="recipe-carousel__track"
    style="transform: translateX(-{currentIndex * 100}%)"
    on:mousedown={handleStart}
    on:touchstart={handleStart}
    on:mousemove={handleMove}
    on:touchmove={handleMove}
    on:mouseup={handleEnd}
    on:touchend={handleEnd}
    on:keydown={handleKeydown}
    >
        {#each recipes as recipe, index}
        <div class="recipe-carousel__slide" class:active={index === currentIndex} >
            <div class="recipe-carousel__image-container">  
                <img src={recipe.src} alt={recipe.title} class="recipe-carousel__image" />
            </div>

            <div class="recipe-carousel__item-content">
                <h3 class="recipe-carousel__item-title">{recipe.title}</h3>
                <p class="recipe-carousel__item-description">{recipe.description}</p>
                <button class="recipe-carousel__button" on:click={() => goToSlide(index)}>
                    {recipe.button.text}    
                </button>
            </div>
        </div>
        {/each}
    </div>
</div>

{#if showArrows}
<button 
class="recipe-carousel__arrow recipe-carousel__arrow--prev" 
on:click={prevSlide} 
aria-label="Previous Slide">
    <span class="recipe-carousel__arrow-icon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
            <path fill-rule="evenodd" d="M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z" clip-rule="evenodd" />
        </svg>
    </span>
</button>

<button class="recipe-carousel__arrow recipe-carousel__arrow--next" on:click={nextSlide} aria-label="Next Slide">
    <span class="recipe-carousel__arrow-icon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
            <path fill-rule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06L19.19 12l-6.72-6.72a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
        </svg>
    </span>
</button>
{/if}

{#if showDots}
<div class="recipe-carousel__dots">
        {#each recipes as _, index}
          <button
            class="carousel-dot"
            class:active={index === currentIndex}
            on:click={() => goToSlide(index)}
            aria-label="Go to slide {index + 1}"
          ></button>
        {/each}
</div>
{/if}

<style>
    .recipe-carousel {
         position: relative;
         overflow: hidden;
         width: 100%;
         height: 100%;
     }

    .recipe-carousel__track {
        display: flex;
        transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        will-change: transform;
    }

    .recipe-carousel__slide {
        flex: 0 0 100%;
        min-width: 0;
        position: relative;
        height: 600px;
        width: 100%;
    }

     .recipe-carousel__image {
         width: 100%;
         height: 100%;
         object-fit: cover;
     }

    .recipe-carousel__item-content {
         position: absolute;
         display: flex;
         flex-direction: column;
         justify-content: center;
         align-items: center;
         background: rgba(0, 0, 0, 0.7);
         color: white;
         bottom: 0;
         left: 0;
         right: 0;
         height: 200px;
         width: 100%;
     }

    .recipe-carousel__item-title {
        font-size: 24px;
        font-weight: 600;
        margin-bottom: 10px;
    }

    .recipe-carousel__item-description {
        font-size: 16px;
        line-height: 1.5;
        margin-bottom: 20px;
    }               

    .recipe-carousel__button {
        background-color: #000;
        color: #fff;
        border: none;
        padding: 10px 20px;
        border-radius: 5px;
        cursor: pointer;
    }

         .recipe-carousel__arrow {
         position: absolute;
         top: 50%;
         transform: translateY(-50%);
         background: rgba(0, 0, 0, 0.5);
         color: #fff;
         border: none;
         padding: 10px;
         border-radius: 50%;
         cursor: pointer;
         z-index: 10;
     }

     .recipe-carousel__arrow--prev {
         left: 10px;
     }

     .recipe-carousel__arrow--next {
         right: 10px;
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
