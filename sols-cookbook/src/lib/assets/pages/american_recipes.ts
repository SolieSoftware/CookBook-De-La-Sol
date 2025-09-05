import bbqRibsImage from '$lib/assets/images/american_recipes_images/bbq-ribs.jpg';
import macAndCheeseImage from '$lib/assets/images/american_recipes_images/mac-and-cheese.webp';
import applePieImage from '$lib/assets/images/american_recipes_images/apple-pie.jpg';
import friedChickenImage from '$lib/assets/images/american_recipes_images/mamas-fried-chicken.jpg';
import cheeseburgerImage from '$lib/assets/images/american_recipes_images/cheeseburger.jpg';

import { americanRecipes } from '$lib/assets/recipes/american_recipes';

export const americanRecipesObj = [
  {
    src: bbqRibsImage,
    alt: 'BBQ Ribs',
    title: 'BBQ Ribs',
    description: 'Classic American BBQ ribs with a sweet and smoky barbecue sauce.',
    recipe: americanRecipes.bbqRibs
  },
  {
    src: macAndCheeseImage,
    alt: 'Mac and Cheese',
    title: 'Mac and Cheese',
    description: 'Creamy, cheesy macaroni and cheese - the ultimate comfort food.',
    recipe: americanRecipes.macAndCheese
  },
  {
    src: applePieImage,
    alt: 'Apple Pie',
    title: 'Apple Pie',
    description: 'Traditional American apple pie with a flaky crust and sweet filling.',
    recipe: americanRecipes.applePie
  },
  {
    src: friedChickenImage,
    alt: "Mama's Fried Chicken",
    title: "Mama's Fried Chicken",
    description: 'Southern-style fried chicken with a crispy, golden crust.',
    recipe: americanRecipes.friedChicken
  },
  {
    src: cheeseburgerImage,
    alt: 'Classic Cheeseburger',
    title: 'Classic Cheeseburger',
    description: 'All-American cheeseburger with all the classic toppings.',
    recipe: americanRecipes.cheeseburger
  }
];
