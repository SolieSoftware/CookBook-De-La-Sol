<script>
    import { italianRecipes } from "$lib/assets/pages/italian_recipes";
    import RecipeCarousel from "$lib/components/RecipeCarousel.svelte";
</script>

<h1>Italian</h1>

<RecipeCarousel recipes={italianRecipes} class="recipe-carousel" />

