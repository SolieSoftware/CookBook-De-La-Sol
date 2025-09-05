<script>
    import RecipeCarousel from "$lib/components/RecipeCarousel.svelte";
    import { mexicanRecipesObj } from "$lib/assets/pages/mexican_recieps"

</script>   

<h1 class="page-title">Mexican</h1>

<RecipeCarousel recipes={mexicanRecipesObj} class="recipe-carousel"/>

<style> 
    .page-title {
        text-align: center;
        font-size: 2rem;
        font-weight: 600;
        margin-bottom: 2rem;
        color: var(--color-quaternary);
    }

    .recipe-carousel {
        height: 800px; 
        width: 100%;
    }
</style>