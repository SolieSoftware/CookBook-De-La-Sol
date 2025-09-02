<script>
    import RecipeCarousel from "$lib/components/RecipeCarousel.svelte";
    import burrtoImage from "../../static/images/rice-and-chorizo-burrito.webp"
    import tacoImage from "../../static/images/Beef-Tacos.webp"
    import enchiladaImage from "../../static/images/enchiladas.jpg"
    import chilesRilenosImage from "../../static/images/Chiles-Rellenos.jpg"
    import molePoblanoImage from "../../static/images/Mole-poblano-con-arroz.webp"
    import { burritoRecipe } from "../../static/html/recipes/burrito_recipe"
    

    let recipes = [
        {
            src: burrtoImage,
            title: "Burritos",
            description: "A classic Mexican dish made with a flour tortilla filled with a variety of ingredients.",
            recipe: burritoRecipe
        },
        {
            src: tacoImage,
            title: "Tacos",
            description: "A classic Mexican dish made with a corn tortilla filled with a variety of ingredients.",
            recipe: "taco_recipe.html"
        },

        {
            src: enchiladaImage,
            title: "Enchiladas",
            description: "A classic Mexican dish made with a corn tortilla filled with a variety of ingredients.",
            recipe: "enchilada_recipe.html"
        },

        {
            src: chilesRilenosImage,
            title: "Chiles Rellenos",
            description: "A classic Mexican dish made with a corn tortilla filled with a variety of ingredients.",
            recipe: "chiles_rellenos_recipe.html"
        },

        {
            src: molePoblanoImage,
            title: "Mole Poblano",
            description: "A classic Mexican dish made with a corn tortilla filled with a variety of ingredients.",
            recipe: "mole_poblano_recipe.html"
        }
    ]
</script>

<h1 class="text-4xl font-bold text-gray-800 mb-8 text-center text-quaternary">Mexican</h1>

<RecipeCarousel recipes={recipes} />

<style>
</style>