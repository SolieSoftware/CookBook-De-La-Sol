import beefBourguignonImage from '$lib/assets/images/french_recipes_images/beef-bourguinon.jpg';
import coqAuVinImage from '$lib/assets/images/french_recipes_images/coq-au-vin.jpg';
import bouillabaisseImage from '$lib/assets/images/french_recipes_images/bouillabaisse.jpg';
import duckOrangeImage from '$lib/assets/images/french_recipes_images/duck-orange.jpeg';
import ratatouilleImage from '$lib/assets/images/french_recipes_images/ratatouille.jpg';

import frenchRecipesObj from '$lib/assets/recipes/french_recipes';

export const frenchRecipes = [
  {
    src: beefBourguignonImage,
    alt: 'Beef Bourguignon',
    title: 'Beef Bourguignon',
    description:
      'A hearty beef stew from the Burgundy region where chunks of beef are slowly braised in red wine with carrots, onions, mushrooms, and bacon. The long cooking process creates incredibly tender meat in a rich, wine-infused sauce.',
    recipe: frenchRecipesObj.beefBourguignon
  },
  {
    src: coqAuVinImage,
    alt: 'Coq Au Vin',
    title: 'Coq Au Vin',
    description:
      'A traditional braised chicken dish cooked slowly in red wine (typically Burgundy) with mushrooms, onions, and herbs. The wine reduces into a rich, flavorful sauce that infuses the tender chicken.',
    recipe: frenchRecipesObj.coqAuVin
  },
  {
    src: bouillabaisseImage,
    alt: 'Bouillabaisse',
    title: 'Bouillabaisse',
    description:
      'A famous seafood stew originating from the port city of Marseille. It combines various Mediterranean fish and shellfish in a saffron-scented broth, traditionally served with rouille (a spicy mayonnaise) and crusty bread.',
    recipe: frenchRecipesObj.bouillabaisse
  },
  {
    src: duckOrangeImage,
    alt: "Duck à l'Orange",
    title: "Duck à l'Orange",
    description:
      'A sophisticated dish featuring roasted duck served with a sweet and tangy orange sauce. The duck is typically roasted until the skin is crispy, then paired with a glaze made from orange juice, stock, and Grand Marnier or cognac.',
    recipe: frenchRecipesObj.duckOrange
  },
  {
    src: ratatouilleImage,
    alt: 'Ratatouille',
    title: 'Ratatouille',
    description:
      'A rustic vegetable dish from Provence featuring eggplant, zucchini, bell peppers, tomatoes, onions, and herbs. Each vegetable is typically cooked separately then combined, creating layers of flavor while celebrating summer produce.',
    recipe: frenchRecipesObj.ratatouille
  }
];
