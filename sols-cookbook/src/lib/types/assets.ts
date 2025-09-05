export interface RecipeAsset {
    src: string;
    alt: string;
    title: string;
    description: string;
    recipe: string;
}

export interface RecipeGalleryAsset {
    [key: string]: RecipeAsset[];
}