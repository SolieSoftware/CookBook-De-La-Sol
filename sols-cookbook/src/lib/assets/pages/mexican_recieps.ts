import burritoImage from "$lib/assets/images/mexican_recipes_images/rice-and-chorizo-burrito.webp";
import tacoImage from "$lib/assets/images/mexican_recipes_images/Beef-Tacos.webp";
import enchiladaImage from "$lib/assets/images/mexican_recipes_images/enchiladas.jpg";
import chilesRilenosImage from "$lib/assets/images/mexican_recipes_images/Chiles-Rellenos.jpg";
import molePoblanoImage from "$lib/assets/images/mexican_recipes_images/Mole-poblano-con-arroz.webp";

import mexicanRecipes from "$lib/assets/recipes/mexican_recipes";

export const mexicanRecipesObj = [{
    src: burritoImage,
    alt: 'Burrito',
    title: 'Burrito',
    description: 'Classic Mexican burrito with rice and chorizo.',
    recipe: mexicanRecipes.burrito
},
{
    src: tacoImage,
    alt: 'Taco',
    title: 'Taco',
    description: 'Classic Mexican taco with beef and cheese.',
    recipe: mexicanRecipes.taco
},
{
    src: enchiladaImage,
    alt: 'Enchilada',
    title: 'Enchilada',
    description: 'Classic Mexican enchilada with cheese and sauce.',
    recipe: mexicanRecipes.enchilada
},
{
    src: chilesRilenosImage,
    alt: 'Chiles Rellenos',
    title: 'Chiles Rellenos',
    description: 'Classic Mexican chiles rellenos with cheese and sauce.',
    recipe: mexicanRecipes.chilesRilenos
},
{
    src: molePoblanoImage,
    alt: 'Mole Poblano',
    title: 'Mole Poblano',
    description: 'Classic Mexican mole poblano with cheese and sauce.',
    recipe: mexicanRecipes.molePoblano
}
]       