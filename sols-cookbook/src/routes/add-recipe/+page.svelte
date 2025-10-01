<script>
  import { enhance } from '$app/forms';
  import { page } from '$app/stores';

  let { data, form } = $props();

  // Check for success message from URL params
  let showSuccess = $derived($page.url.searchParams.get('success') === 'true');

  let formData = $state({
    title: '',
    subtitle: '',
    prepTime: '',
    cookTime: '',
    totalTime: '',
    servings: '',
    difficulty: 'Easy',
    cuisine: '',

    // Ingredients - support multiple categories
    ingredientCategories: [
      { name: 'Main Ingredients', items: [''] }
    ],

    // Instructions
    instructions: [
      { title: '', content: '' }
    ],

    // Optional sections
    tips: [''],
    variations: [''],
    notes: '',
    nutritionInfo: {
      calories: '',
      protein: '',
      carbs: '',
      fat: '',
      fiber: '',
      sodium: ''
    }
  });

  // Add/remove ingredient categories
  function addIngredientCategory() {
    formData.ingredientCategories.push({ name: '', items: [''] });
  }

  function removeIngredientCategory(index) {
    if (formData.ingredientCategories.length > 1) {
      formData.ingredientCategories.splice(index, 1);
    }
  }

  // Add/remove ingredient items within a category
  function addIngredientItem(categoryIndex) {
    formData.ingredientCategories[categoryIndex].items.push('');
  }

  function removeIngredientItem(categoryIndex, itemIndex) {
    if (formData.ingredientCategories[categoryIndex].items.length > 1) {
      formData.ingredientCategories[categoryIndex].items.splice(itemIndex, 1);
    }
  }

  // Add/remove instruction steps
  function addInstruction() {
    formData.instructions.push({ title: '', content: '' });
  }

  function removeInstruction(index) {
    if (formData.instructions.length > 1) {
      formData.instructions.splice(index, 1);
    }
  }

  // Add/remove tips
  function addTip() {
    formData.tips.push('');
  }

  function removeTip(index) {
    if (formData.tips.length > 1) {
      formData.tips.splice(index, 1);
    }
  }

  // Add/remove variations
  function addVariation() {
    formData.variations.push('');
  }

  function removeVariation(index) {
    if (formData.variations.length > 1) {
      formData.variations.splice(index, 1);
    }
  }

  // Generate HTML content for recipe
  function generateRecipeHTML() {
    let html = `<div class="recipe-content">
    <h1>${formData.title}</h1>

    <p><em>${formData.subtitle}</em></p>

    <div class="recipe-info">
        <span><strong>Prep:</strong> ${formData.prepTime}</span>
        <span><strong>Cook:</strong> ${formData.cookTime}</span>
        <span><strong>Total:</strong> ${formData.totalTime}</span>
        <span><strong>Serves:</strong> ${formData.servings}</span>
        <span><strong>Difficulty:</strong> ${formData.difficulty}</span>
    </div>

    <h2>Ingredients</h2>`;

    // Add ingredient categories
    formData.ingredientCategories.forEach(category => {
      if (category.name) {
        html += `\n    <h3>${category.name}:</h3>`;
      }
      html += `\n    <ul>`;
      category.items.forEach(item => {
        if (item.trim()) {
          html += `\n        <li>${item}</li>`;
        }
      });
      html += `\n    </ul>`;
    });

    html += `\n\n    <h2>Instructions</h2>
    <ol>`;

    // Add instructions
    formData.instructions.forEach((instruction, index) => {
      if (instruction.content.trim()) {
        html += `\n        <li>`;
        if (instruction.title) {
          html += `<strong>${instruction.title}:</strong> `;
        }
        html += `${instruction.content}</li>`;
      }
    });

    html += `\n    </ol>`;

    // Add tips if any
    const validTips = formData.tips.filter(tip => tip.trim());
    if (validTips.length > 0) {
      html += `\n\n    <h2>Tips</h2>
    <ul>`;
      validTips.forEach(tip => {
        html += `\n        <li>${tip}</li>`;
      });
      html += `\n    </ul>`;
    }

    // Add variations if any
    const validVariations = formData.variations.filter(variation => variation.trim());
    if (validVariations.length > 0) {
      html += `\n\n    <h2>Variations</h2>
    <ul>`;
      validVariations.forEach(variation => {
        html += `\n        <li>${variation}</li>`;
      });
      html += `\n    </ul>`;
    }

    // Add nutrition info if provided
    const nutrition = formData.nutritionInfo;
    if (nutrition.calories || nutrition.protein || nutrition.carbs || nutrition.fat) {
      html += `\n\n    <p><strong>Nutrition per serving:</strong>`;
      const nutritionParts = [];
      if (nutrition.calories) nutritionParts.push(`${nutrition.calories} calories`);
      if (nutrition.protein) nutritionParts.push(`${nutrition.protein}g protein`);
      if (nutrition.carbs) nutritionParts.push(`${nutrition.carbs}g carbs`);
      if (nutrition.fat) nutritionParts.push(`${nutrition.fat}g fat`);
      if (nutrition.fiber) nutritionParts.push(`${nutrition.fiber}g fiber`);
      if (nutrition.sodium) nutritionParts.push(`${nutrition.sodium}mg sodium`);
      html += ` ${nutritionParts.join(', ')}</p>`;
    }

    // Add notes if provided
    if (formData.notes.trim()) {
      html += `\n\n    <blockquote>
        <p>${formData.notes}</p>
    </blockquote>`;
    }

    html += `\n</div>`;

    return html;
  }
</script>

<svelte:head>
  <title>Add Recipe - Sols Cookbook</title>
</svelte:head>

<div class="min-h-screen bg-stone">
  <div class="zen-form zen-fade-in">
    <h1 class="zen-title">Create New Recipe</h1>

    <!-- Success Message -->
    {#if showSuccess}
      <div class="zen-alert-success zen-fade-in">
        <div class="flex items-center">
          <span class="text-sage mr-2 text-lg">✓</span>
          <span class="font-semibold">Recipe created successfully!</span>
        </div>
        <p class="mt-1 text-sm opacity-80">Your recipe has been saved to your cookbook.</p>
      </div>
    {/if}

    <!-- Error Message -->
    {#if form?.message}
      <div class="zen-alert-error zen-fade-in">
        <div class="flex items-center">
          <span class="text-terracotta mr-2 text-lg">⚠</span>
          <span class="font-semibold">Error</span>
        </div>
        <p class="mt-1">{form.message}</p>
      </div>
    {/if}

    <form method="POST" action="?/create" use:enhance>
      <!-- Recipe Essentials -->
      <div class="zen-section">
        <h2 class="zen-section-title">Recipe Essentials</h2>

        <!-- Recipe Title -->
        <div class="mb-6">
          <label for="title" class="zen-label">Recipe Title *</label>
          <input
            type="text"
            id="title"
            name="title"
            bind:value={formData.title}
            required
            maxlength="60"
            class="zen-input text-xl font-medium"
            placeholder="Give your recipe a memorable name..."
          />
        </div>

        <!-- Description -->
        <div class="mb-6">
          <label for="subtitle" class="zen-label">Description</label>
          <textarea
            id="subtitle"
            name="subtitle"
            bind:value={formData.subtitle}
            rows="3"
            maxlength="500"
            class="zen-input resize-none"
            placeholder="Tell us what makes this recipe special..."
          ></textarea>
          <div class="text-xs text-gray-500 mt-1 text-right">
            {formData.subtitle.length}/500 characters
          </div>
        </div>

        <!-- Quick Details Grid -->
        <div class="zen-grid-2 mb-6">
          <div>
            <label for="cuisine" class="zen-label">Cuisine Type</label>
            <select
              id="cuisine"
              name="cuisine"
              bind:value={formData.cuisine}
              class="zen-input"
            >
              <option value="">Select cuisine...</option>
              <option value="Mexican">Mexican</option>
              <option value="Italian">Italian</option>
              <option value="Asian">Asian</option>
              <option value="American">American</option>
              <option value="French">French</option>
              <option value="Mediterranean">Mediterranean</option>
              <option value="Indian">Indian</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label for="difficulty" class="zen-label">Difficulty Level</label>
            <div class="flex gap-2">
              {#each ['Easy', 'Medium', 'Hard', 'Expert'] as level}
                <button
                  type="button"
                  class="flex-1 py-2 px-3 text-sm rounded-md border-2 transition-all duration-200 {formData.difficulty === level
                    ? 'border-sage bg-sage text-white'
                    : 'border-gray-light text-charcoal hover:border-sage'}"
                  onclick={() => formData.difficulty = level}
                >
                  {level}
                </button>
              {/each}
            </div>
          </div>
        </div>

        <!-- Timing Grid -->
        <div class="zen-grid-3">
          <div>
            <label for="prepTime" class="zen-label">Prep Time</label>
            <input
              type="text"
              id="prepTime"
              name="prepTime"
              bind:value={formData.prepTime}
              class="zen-input text-center"
              placeholder="15 min"
            />
          </div>

          <div>
            <label for="cookTime" class="zen-label">Cook Time</label>
            <input
              type="text"
              id="cookTime"
              name="cookTime"
              bind:value={formData.cookTime}
              class="zen-input text-center"
              placeholder="30 min"
            />
          </div>

          <div>
            <label for="servings" class="zen-label">Servings</label>
            <input
              type="text"
              id="servings"
              name="servings"
              bind:value={formData.servings}
              class="zen-input text-center"
              placeholder="4-6"
            />
          </div>
        </div>
      </div>

      <!-- Ingredients -->
      <div class="zen-section">
        <h2 class="zen-section-title">Ingredients</h2>

        {#each formData.ingredientCategories as category, categoryIndex}
          <div class="mb-8 p-6 bg-stone rounded-lg border border-gray-light">
            <!-- Category Header -->
            <div class="flex items-center gap-4 mb-6">
              <div class="flex-1">
                <input
                  type="text"
                  bind:value={category.name}
                  placeholder="Category name (e.g., 'For the sauce', 'Main ingredients')"
                  class="zen-input font-medium"
                />
              </div>
              {#if formData.ingredientCategories.length > 1}
                <button
                  type="button"
                  onclick={() => removeIngredientCategory(categoryIndex)}
                  class="zen-button-remove"
                  title="Remove category"
                >
                  Remove
                </button>
              {/if}
            </div>

            <!-- Ingredient Items -->
            <div class="space-y-3">
              {#each category.items as item, itemIndex}
                <div class="zen-ingredient-item">
                  <span class="text-primary text-lg">•</span>
                  <input
                    type="text"
                    bind:value={category.items[itemIndex]}
                    placeholder="e.g., 2 cups all-purpose flour"
                    class="flex-1 bg-transparent border-none outline-none focus:bg-warm-white rounded px-2 py-1 transition-colors"
                  />
                  {#if category.items.length > 1}
                    <button
                      type="button"
                      onclick={() => removeIngredientItem(categoryIndex, itemIndex)}
                      class="text-terracotta hover:text-red-600 text-lg font-bold opacity-60 hover:opacity-100 transition-opacity"
                      title="Remove ingredient"
                    >
                      ×
                    </button>
                  {/if}
                </div>
              {/each}
            </div>

            <!-- Add Ingredient Button -->
            <div class="mt-4">
              <button
                type="button"
                onclick={() => addIngredientItem(categoryIndex)}
                class="zen-button-secondary"
              >
                <span class="mr-1">+</span> Add Ingredient
              </button>
            </div>
          </div>
        {/each}

        <!-- Add Category Button -->
        <div class="text-center">
          <button
            type="button"
            onclick={addIngredientCategory}
            class="zen-button-primary"
          >
            <span class="mr-2">+</span> Add Ingredient Category
          </button>
        </div>
      </div>

      <!-- Instructions -->
      <div class="zen-section">
        <h2 class="zen-section-title">Instructions</h2>

        <div class="space-y-6">
          {#each formData.instructions as instruction, index}
            <div class="zen-step-item">
              <div class="flex items-center gap-4 mb-4">
                <div class="zen-step-number">{index + 1}</div>
                <input
                  type="text"
                  bind:value={instruction.title}
                  placeholder="Step title (optional, e.g., 'Prepare the sauce')"
                  class="flex-1 zen-input font-medium"
                />
                {#if formData.instructions.length > 1}
                  <button
                    type="button"
                    onclick={() => removeInstruction(index)}
                    class="zen-button-remove"
                    title="Remove step"
                  >
                    Remove
                  </button>
                {/if}
              </div>

              <textarea
                bind:value={instruction.content}
                placeholder="Describe this step in detail. Be clear and specific to help others follow along..."
                rows="4"
                class="zen-input resize-none w-full ml-12"
              ></textarea>
            </div>
          {/each}
        </div>

        <!-- Add Step Button -->
        <div class="text-center mt-8">
          <button
            type="button"
            onclick={addInstruction}
            class="zen-button-primary"
          >
            <span class="mr-2">+</span> Add Step
          </button>
        </div>
      </div>

      <!-- Additional Details -->
      <div class="zen-section">
        <h2 class="zen-section-title">Additional Details</h2>

        <!-- Tips -->
        <div class="mb-8">
          <h3 class="zen-label text-base mb-4">💡 Tips & Tricks</h3>
          <div class="space-y-3">
            {#each formData.tips as tip, index}
              <div class="zen-ingredient-item">
                <span class="text-primary">💡</span>
                <input
                  type="text"
                  bind:value={formData.tips[index]}
                  placeholder="Share a helpful tip for making this recipe..."
                  class="flex-1 bg-transparent border-none outline-none focus:bg-warm-white rounded px-2 py-1 transition-colors"
                />
                {#if formData.tips.length > 1}
                  <button
                    type="button"
                    onclick={() => removeTip(index)}
                    class="text-terracotta hover:text-red-600 text-lg font-bold opacity-60 hover:opacity-100 transition-opacity"
                    title="Remove tip"
                  >
                    ×
                  </button>
                {/if}
              </div>
            {/each}
          </div>
          <div class="mt-4">
            <button
              type="button"
              onclick={addTip}
              class="zen-button-secondary"
            >
              <span class="mr-1">+</span> Add Tip
            </button>
          </div>
        </div>

        <!-- Variations -->
        <div class="mb-8">
          <h3 class="zen-label text-base mb-4">🔄 Recipe Variations</h3>
          <div class="space-y-3">
            {#each formData.variations as variation, index}
              <div class="zen-ingredient-item">
                <span class="text-primary">🔄</span>
                <input
                  type="text"
                  bind:value={formData.variations[index]}
                  placeholder="Suggest an alternative or variation..."
                  class="flex-1 bg-transparent border-none outline-none focus:bg-warm-white rounded px-2 py-1 transition-colors"
                />
                {#if formData.variations.length > 1}
                  <button
                    type="button"
                    onclick={() => removeVariation(index)}
                    class="text-terracotta hover:text-red-600 text-lg font-bold opacity-60 hover:opacity-100 transition-opacity"
                    title="Remove variation"
                  >
                    ×
                  </button>
                {/if}
              </div>
            {/each}
          </div>
          <div class="mt-4">
            <button
              type="button"
              onclick={addVariation}
              class="zen-button-secondary"
            >
              <span class="mr-1">+</span> Add Variation
            </button>
          </div>
        </div>

        <!-- Nutrition Information -->
        <div class="mb-8">
          <h3 class="zen-label text-base mb-4">📊 Nutrition (per serving)</h3>
          <div class="zen-grid-3 mb-4">
            <div>
              <label class="zen-label">Calories</label>
              <input
                type="text"
                bind:value={formData.nutritionInfo.calories}
                placeholder="485"
                class="zen-input text-center"
              />
            </div>
            <div>
              <label class="zen-label">Protein (g)</label>
              <input
                type="text"
                bind:value={formData.nutritionInfo.protein}
                placeholder="28"
                class="zen-input text-center"
              />
            </div>
            <div>
              <label class="zen-label">Carbs (g)</label>
              <input
                type="text"
                bind:value={formData.nutritionInfo.carbs}
                placeholder="32"
                class="zen-input text-center"
              />
            </div>
          </div>
          <div class="zen-grid-3">
            <div>
              <label class="zen-label">Fat (g)</label>
              <input
                type="text"
                bind:value={formData.nutritionInfo.fat}
                placeholder="26"
                class="zen-input text-center"
              />
            </div>
            <div>
              <label class="zen-label">Fiber (g)</label>
              <input
                type="text"
                bind:value={formData.nutritionInfo.fiber}
                placeholder="4"
                class="zen-input text-center"
              />
            </div>
            <div>
              <label class="zen-label">Sodium (mg)</label>
              <input
                type="text"
                bind:value={formData.nutritionInfo.sodium}
                placeholder="890"
                class="zen-input text-center"
              />
            </div>
          </div>
        </div>

        <!-- Chef's Notes -->
        <div>
          <h3 class="zen-label text-base mb-4">📝 Chef's Notes</h3>
          <textarea
            bind:value={formData.notes}
            placeholder="Share any special notes, memories, or wisdom about this recipe..."
            rows="4"
            class="zen-input resize-none"
          ></textarea>
        </div>
      </div>

      <!-- Hidden field with generated HTML -->
      <input type="hidden" name="description" value={generateRecipeHTML()} />

      <!-- Submit Section -->
      <div class="text-center pt-8 pb-4">
        <button
          type="submit"
          class="zen-button-primary text-lg px-12 py-4 font-semibold"
        >
          Save Recipe to Cookbook
        </button>
        <p class="text-sm text-gray-500 mt-3">
          Your recipe will be saved and can be edited later
        </p>
      </div>
    </form>
  </div>
</div>

<style>
  /* Custom enhancements for zen aesthetic */
  .zen-ingredient-item:hover {
    background-color: var(--color-warm-white);
    transform: translateY(-1px);
    box-shadow: var(--shadow-soft);
  }

  .zen-step-item:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-medium);
  }

  /* Smooth animations for dynamic content */
  .zen-fade-in {
    animation: fadeInUp 0.4s ease-out forwards;
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* Focus states */
  .zen-input:focus-within {
    transform: translateY(-1px);
  }

  /* Character counter styling */
  .character-counter {
    color: var(--color-gray-soft);
    font-size: var(--font-size-xs);
  }
</style>