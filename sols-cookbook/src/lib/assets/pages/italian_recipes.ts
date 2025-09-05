import pizzaImage from "$lib/assets/images/italian_recipes_images/margherrita-pizza.webp";
import spaghettiCarbonaraImage from "$lib/assets/images/italian_recipes_images/spaghetti-carbonara.jpg";
import lasagneImage from "$lib/assets/images/italian_recipes_images/lasagne.jpg";
import pestoPastaImage from "$lib/assets/images/italian_recipes_images/pesto-pasta-chicken.jpg";
import melanzaneParmigianaImage from "$lib/assets/images/italian_recipes_images/parmigiana-di-melanzane.jpg";

import italianRecipes from "$lib/assets/recipes/italian_recipes";

export const italianRecipesObj = [{
    src: pizzaImage,
    alt: 'Pizza',
    title: 'Pizza',
    description: 'Classic Italian pizza with a thin crust and tomato sauce.',
    recipe: italianRecipes.pizza
},
{
    src: spaghettiCarbonaraImage,
    alt: 'Spaghetti Carbonara',
    title: 'Spaghetti Carbonara',
    description: 'Classic Italian spaghetti carbonara with a creamy sauce and bacon.',
    recipe: italianRecipes.spaghettiCarbonara
},
{
    src: lasagneImage,
    alt: 'Lasagne',
    title: 'Lasagne',
    description: 'Classic Italian lasagne with a rich sauce and cheese.',
    recipe: italianRecipes.lasagne
},
{
    src: pestoPastaImage,
    alt: 'Pesto Pasta',
    title: 'Pesto Pasta',
    description: 'Classic Italian pesto pasta with a creamy sauce and cheese.',
    recipe: italianRecipes.pestoPasta
},
{
    src: melanzaneParmigianaImage,
    alt: 'Melanzane Parmigiana',
    title: 'Melanzane Parmigiana',
    description: 'Classic Italian melanzane parmigiana with a rich sauce and cheese.',
    recipe: italianRecipes.melanzaneParmigiana
}]