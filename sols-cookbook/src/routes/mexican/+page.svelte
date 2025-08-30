<script>
    import RecipeCarousel from "$lib/components/RecipeCarousel.svelte";
    import burrtoImage from "../../static/images/rice-and-chorizo-burrito.webp"
    import tacoImage from "../../static/images/Beef-Tacos.webp"

    let recipes = [
        {
            src: burrtoImage,
            title: "Burritos",
            description: "A classic Mexican dish made with a flour tortilla filled with a variety of ingredients.",
            button: {
                text: "View Recipe",
                href: "/mexican/burritos"
            }
        },
        {
            src: tacoImage,
            title: "Tacos",
            description: "A classic Mexican dish made with a corn tortilla filled with a variety of ingredients.",
            button: {
                text: "View Recipe",
                href: "/mexican/tacos"
            }
            
        }
    ]
</script>

<h1>Mexican</h1>

<RecipeCarousel recipes={recipes} />