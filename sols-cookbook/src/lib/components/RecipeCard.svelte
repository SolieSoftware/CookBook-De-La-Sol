<script>
  let { recipe } = $props();

  // State using runes
  let isFlipped = $state(false);
  let isHovering = $state(false);

  // Methods
  function flipCard() {
    isFlipped = !isFlipped;
  }

  function handleMouseEnter() {
    isHovering = true;
  }

  function handleMouseLeave() {
    isHovering = false;
  }

  // Derived values using runes
  let containerTransform = $derived(
    isHovering && !isFlipped
      ? 'translateY(-10px) rotateX(5deg) rotateY(-5deg)'
      : 'translateY(0) rotateX(0) rotateY(0)'
  );

  let cardTransform = $derived(
    isFlipped
      ? 'rotateY(180deg) scale(1.02)'
      : 'rotateY(0deg) scale(1)'
  );

  let frontBoxShadow = $derived(
    isHovering && !isFlipped
      ? '0 15px 30px rgba(0, 0, 0, 0.3)'
      : '0 4px 8px rgba(0, 0, 0, 0.1)'
  );

  let imageFilter = $derived(
    isHovering && !isFlipped
      ? 'brightness(1.1) contrast(1.1)'
      : 'brightness(1) contrast(1)'
  );

  let contentTransform = $derived(
    isHovering && !isFlipped
      ? 'translateY(-5px)'
      : 'translateY(0)'
  );

  let titleScale = $derived(
    isHovering && !isFlipped
      ? 'scale(1.05)'
      : 'scale(1)'
  );

  let clickHintOpacity = $derived(
    isHovering && !isFlipped ? 0.9 : 0
  );
</script>

{#if recipe}
<div
  class="recipe-card-container"
  style="perspective: 2000px; width: 100%; height: 100%;"
  onmouseenter={handleMouseEnter}
  onmouseleave={handleMouseLeave}
  role="presentation"
>
  <button
    class="recipe-card-button"
    onclick={flipCard}
    style="transform: {containerTransform};"
  >
    <div
      class="recipe-card-inner"
      style="
        transform-style: preserve-3d;
        transition: all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
        transform: {cardTransform};
      "
    >
      <!-- Front side -->
      <div
        class="recipe-card-front"
        style="
          backface-visibility: hidden;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          transform: rotateY(0deg);
          transition: all 0.6s ease;
          box-shadow: {frontBoxShadow};
        "
      >
        <div class="recipe-image-container">
          <img
            src={recipe.src}
            alt={recipe.title}
            class="recipe-image"
            style="filter: {imageFilter};"
          />
          <div class="recipe-image-overlay"></div>
        </div>
        
        <div
          class="recipe-content"
          style="transform: {contentTransform};"
        >
          <h3
            class="recipe-title"
            style="transform: {titleScale};"
          >
            {recipe.title}
          </h3>
          <p class="recipe-description">
            {recipe.description}
          </p>
          <div
            class="recipe-hint"
            style="opacity: {clickHintOpacity};"
          >
            Click to see recipe
          </div>
        </div>
      </div>

      <!-- Back side -->
      <div
        class="recipe-card-back"
        style="
          backface-visibility: hidden;
          background: linear-gradient(135deg, #1a1a1a 0%, #000000 100%);
          color: #ffd700;
          transform: rotateY(180deg);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
        "
      >
        <div class="recipe-back-hint">
          Click to flip back
        </div>
        
        <div class="recipe-content-back">
          {@html recipe.recipe}
        </div>
        
        <div class="recipe-back-gradient"></div>
      </div>
    </div>
  </button>
</div>
{:else}
<div class="recipe-card-container">
  <div class="no-recipe-message">
    <p>No recipe data available</p>
  </div>
</div>
{/if}

<style>
  .recipe-card-container {
    width: 90%;
    height: 90%;
    max-width: 600px;
    max-height: 700px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    box-sizing: border-box;
  }

  .recipe-card-button {
    width: 100%;
    height: 100%;
    border: none;
    padding: 0;
    cursor: pointer;
    border-radius: 12px;
    transition: transform 0.3s ease;
    outline: none;
    user-select: none;
    background: transparent;
  }
  
  .recipe-card-button:focus {
    outline: 2px solid #667eea;
    outline-offset: 2px;
  }

  .recipe-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 12px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    background: #f0f0f0;
  }

  .recipe-card-front,
  .recipe-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 12px;
    overflow: hidden;
  }

  .recipe-image-container {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .recipe-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.5s ease;
  }

  .recipe-image-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.6), transparent);
  }

  .recipe-content {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: white;
    height: 200px;
    width: 100%;
    padding: 24px 32px;
    background: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(5px);
    transition: transform 0.3s ease;
  }

  .recipe-title {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 12px;
    transition: all 0.3s ease;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  }

  .recipe-description {
    font-size: 1rem;
    line-height: 1.5;
    margin-bottom: 20px;
    opacity: 0.9;
  }

  .recipe-hint {
    margin-top: 8px;
    font-size: 0.875rem;
    font-weight: 500;
    color: white;
    background: #7c3aed;
    padding: 4px 16px;
    border-radius: 9999px;
    transition: opacity 0.3s ease;
  }

  .recipe-back-hint {
    position: absolute;
    top: 16px;
    right: 16px;
    font-size: 0.75rem;
    color: #ffd700;
    font-style: italic;
    margin-bottom: 16px;
    opacity: 0.8;
  }

  .recipe-content-back {
    font-size: 1rem;
    line-height: 1.6;
    margin-bottom: 20px;
    padding: 16px;
    background: rgba(255, 215, 0, 0.1);
    border-radius: 8px;
    box-shadow: inset 0 2px 4px rgba(255, 215, 0, 0.2);
    max-height: calc(100% - 60px);
    overflow-y: auto;
    margin-top: 40px;
    color: #ffd700;
    border: 1px solid rgba(255, 215, 0, 0.3);
  }

  .recipe-back-gradient {
    position: absolute;
    inset: 0;
    pointer-events: none;
    background: linear-gradient(to bottom, transparent 90%, rgba(0, 0, 0, 0.0) 100%);
  }

  .no-recipe-message {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    border: 2px dashed rgba(255, 255, 255, 0.3);
  }

  .no-recipe-message p {
    color: rgba(255, 255, 255, 0.7);
    font-size: 1.2rem;
    font-weight: 500;
  }
</style>
