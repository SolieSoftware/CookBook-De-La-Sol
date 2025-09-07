<script>
import { frenchRecipes } from '$lib/assets/pages/french_recipes';
import RecipeCarousel from '$lib/components/RecipeCarousel.svelte';
</script>

<h1>French</h1>

<RecipeCarousel recipes={frenchRecipes} class="recipe-carousel" />
