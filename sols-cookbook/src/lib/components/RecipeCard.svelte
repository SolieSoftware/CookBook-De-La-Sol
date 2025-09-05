<script>
    let { recipe } = $props();
    import { spring } from 'svelte/motion';

    let isFlipped = $state(false);

    const rotation = spring(0,
        {
            stiffness: 0.05,
            damping: 0.8
        }
    );

    $effect(() => {
        rotation.set(isFlipped ? 180 : 0);
    });


    function flipCard() {
        isFlipped = !isFlipped;
    }
</script>



<button class='recipe-card-button' onclick={flipCard}>
    <div class='recipe-card' style={`transform: rotateY(${$rotation}deg)`}>    
    <div class='recipe-card-front card-face'>
        <div class="recipe-carousel__image-container">  
            <img src={recipe.src} alt={recipe.title} class="recipe-carousel__image" />
        </div>

        <div class="recipe-carousel__item-content">
            <h3 class="recipe-carousel__item-title">{recipe.title}</h3>
            <p class="recipe-carousel__item-description">{recipe.description}</p>
        </div>
    </div>
    <div class='recipe-card-back card-face'>
        <h3 class="recipe-carousel__item-title">{recipe.title}</h3>
        {@html recipe.recipe}
    </div>
    </div>
</button>

<style>
    .recipe-card-button {
        width: 100%;
        height: 100%;
        cursor: pointer;
        border: none;
        padding: 0;
        perspective: 1000px;
        border-radius: 10px;
    }

    .recipe-card {
        position: relative;
        width: 100%;
        height: 100%;
        transform-style: preserve-3d;
    }

    .card-face {
        position: absolute;
        width: 100%;
        height: 100%;
        backface-visibility: hidden;
        border-radius: 10px;
        overflow: hidden;
    }

    .recipe-card-front {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
    }

    .recipe-card-back  {
        background: linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%);
        color: #333;
        transform: rotateY(180deg);
        overflow-y: auto;
        padding: 20px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }

    .recipe-carousel__image {
         width: 100%;
         height: 100%;
         object-fit: cover;
     }

    .recipe-carousel__item-content {
         position: absolute;
         display: flex;
         flex-direction: column;
         justify-content: center;
         align-items: center;
         background: rgba(0, 0, 0, 0.7);
         color: white;
         bottom: 0;
         left: 0;
         right: 0;
         height: 200px;
         width: 100%;
     }

    .recipe-carousel__item-title {
        font-size: 24px;
        font-weight: 600;
        margin-bottom: 10px;
    }

    .recipe-carousel__item-description {
        font-size: 16px;
        line-height: 1.5;
        margin-bottom: 20px;
    }               

</style>