import kungPaoChickenImage from '$lib/assets/images/asian_recipes_images/kung-pao-chicken.jpeg';
import thaiGreenCurryImage from '$lib/assets/images/asian_recipes_images/thai-green-curry.jpg';
import padThaiImage from '$lib/assets/images/asian_recipes_images/pad-thai.jpg';
import chickenTeriyakiImage from '$lib/assets/images/asian_recipes_images/chicken-teriyaki.jpeg';
import bibimbapImage from '$lib/assets/images/asian_recipes_images/bibimbap.jpeg';

import asianRecipesObj from '$lib/assets/recipes/asian_recipes';

export const asianRecipes = [
    {
        src: kungPaoChickenImage,
        alt: 'Kung Pao Chicken',
        title: 'Kung Pao Chicken',
        description: 'A spicy Sichuan dish featuring diced chicken stir-fried with peanuts, vegetables, and chili peppers in a sauce combining soy sauce, rice vinegar, and Sichuan peppercorns for that signature numbing heat.',
        recipe: asianRecipesObj.kungPaoChicken
    },
    {
        src: thaiGreenCurryImage,
        alt: 'Thai Green Curry',
        title: 'Thai Green Curry',
        description: 'A fragrant coconut milk-based curry with green chilies, Thai basil, bamboo shoots, and your choice of protein (chicken, beef, or vegetables). The curry paste is made from fresh green chilies, lemongrass, galangal, and kaffir lime leaves.',
        recipe: asianRecipesObj.thaiGreenCurry
    },
    {
        src: padThaiImage,
        alt: 'Pad Thai',
        title: 'Pad Thai',
        description: 'Stir-fried rice noodles with shrimp or chicken, bean sprouts, eggs, and tofu in a sweet and tangy sauce made from tamarind, fish sauce, and palm sugar. Garnished with crushed peanuts, lime wedges, and fresh herbs.',
        recipe: asianRecipesObj.padThai
    },
    {
        src: chickenTeriyakiImage,
        alt: 'Chicken Teriyaki',
        title: 'Chicken Teriyaki',
        description: 'Grilled or pan-seared chicken glazed with a sweet and savory sauce made from soy sauce, mirin, sake, and sugar. The sauce reduces to a glossy coating that caramelizes beautifully on the chicken.',
        recipe: asianRecipesObj.chickenTeriyaki
    },
    {
        src: bibimbapImage,
        alt: 'Bibimbap',
        title: 'Bibimbap',
        description: 'A colorful Korean rice bowl topped with an assortment of seasoned vegetables, marinated beef, a fried egg, and served with gochujang (Korean chili paste). Everything is mixed together before eating.',
        recipe: asianRecipesObj.bibimbap
    }
];