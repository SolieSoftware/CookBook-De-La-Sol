<script>
    import RecipeCarousel from "$lib/components/RecipeCarousel.svelte";
    import { mexicanRecipesObj } from "$lib/assets/pages/mexican_recipes";
    import mexicanKitchenImage from "$lib/assets/images/backgrounds/mexican_kitchen.webp";
</script>   

<svelte:head>
    <title>Mexican - Sols Cookbook</title>
    <meta name="description" content="Mexican recipes for Sols Cookbook">
</svelte:head>
<div class="recipe-carousel-container" style="background-image: url({mexicanKitchenImage})">
    <h1 class="page-title">Mexican</h1>
    <RecipeCarousel recipes={mexicanRecipesObj} class="recipe-carousel"/>
</div>
<style> 
    .recipe-carousel-container {
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        background-attachment: fixed;
        min-height: 100vh; 
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
</style>