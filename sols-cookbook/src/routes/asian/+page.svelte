<script>
import { asianRecipes } from '$lib/assets/pages/asian_recipes';
import RecipeCarousel from '$lib/components/RecipeCarousel.svelte';
</script>

<h1>Asian</h1>

<RecipeCarousel recipes={asianRecipes} class="recipe-carousel" />

