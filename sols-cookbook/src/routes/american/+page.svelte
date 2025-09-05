<script>

    import RecipeCarousel from "$lib/components/RecipeCarousel.svelte";
    import { americanRecipesObj } from "$lib/assets/pages/american_recipes";

    let recipes = americanRecipesObj;
</script>

<h1 class="page-title">American</h1>

<RecipeCarousel recipes={recipes} class="recipe-carousel"/>

<style>
    .page-title {
        text-align: center;
        font-size: 2.5rem;
        font-weight: bold;
        margin: 2rem 0;
        color: #333;
    }

    .recipe-carousel {
        height: 800px;
        width: 90vw;
        max-width: 1400px;
        margin: 0 auto;
    }
</style>