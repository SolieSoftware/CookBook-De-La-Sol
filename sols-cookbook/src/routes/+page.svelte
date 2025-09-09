<script>
  import { homepageObj } from '$lib/assets/pages/homepage';
  import kibbleHandPic from '$lib/assets/images/kibble-pics/kibble-hand-pic.jpg';
  import zoomedInKibble from '$lib/assets/images/kibble-pics/zoomed-in-kibble.webp';

  let cusines = {
    italian: {
      name: 'Italian',
      description: 'Pasta, pizza, and more',
      image: homepageObj.italianImage,
      href: '/italian'
    },
    mexican: {
      name: 'Mexican',
      description: 'Tacos, enchiladas, and spices',
      image: homepageObj.mexicanImage,
      href: '/mexican'
    },
    asian: {
      name: 'Asian',
      description: 'Stir-fries, curries, and noodles',
      image: homepageObj.asianImage,
      href: '/asian'
    },
    american: {
      name: 'American',
      description: 'Burgers, fries, and more',
      image: homepageObj.americanImage,
      href: '/american'
    },
    french: {
      name: 'French',
      description: 'Croissants, baguettes, and more',
      image: homepageObj.frenchImage,
      href: '/french'
    }
  };
</script>

<svelte:head>
  <title>Home - Sols Cookbook</title>
  <meta name="description" content="Sol's Cookbook - the art of kibble." />
</svelte:head>

<section class="hero">
  <div class="hero-content">
    <h1 class="hero-title">Hello Kibbler!</h1>
    <p class="hero-subtitle">Welcome to the world of Stuart Kibble!</p>
    <div class="hero-buttons">
      <button class="cta-button primary">Explore Recipes</button>
      <button class="cta-button secondary">Learn More</button>
    </div>
  </div>
  <div class="image-placeholder">
    <img src={homepageObj.kibbleImage} alt="Kibble" class="kibble-image" />
    <div class="floating-elements">
      <div class="floating-element element-1"></div>
      <div class="floating-element element-2"></div>
      <div class="floating-element element-3"></div>
    </div>
  </div>
  <div class="hero-background">
    <div class="gradient-orb orb-1"></div>
    <div class="gradient-orb orb-2"></div>
    <div class="gradient-orb orb-3"></div>
  </div>
</section>

<section class="cuisines">
  <div class="cuisines-container">
    <h2 class="cuisines-titles">Recipe Book</h2>
    <div class="cuisines-grid">
      {#each Object.values(cusines) as cuisine}
        <div class="cuisine-card">
          <a href={cuisine.href} class="cuisine-link">
            <h3>{cuisine.name}</h3>
            <p>{cuisine.description}</p>
            <img src={cuisine.image} alt={cuisine.name} class="cuisine-image" />
          </a>
        </div>
      {/each}
    </div>
  </div>
</section>

<section>
  <div class="meal-container">
    <h2 class="meal-title">Meal of the Day</h2>
    <div class="meal-grid">
      <div class="meal-card"></div>
    </div>
  </div>
</section>

<style>
  :global(body) {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    min-height: 100vh;
    font-family:
      'Inter',
      -apple-system,
      BlinkMacSystemFont,
      'Segoe UI',
      Roboto,
      sans-serif;
  }

  .hero {
    position: relative;
    min-height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 30px;
    margin: 2rem auto;
    max-width: 1400px;
    overflow: hidden;
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.2);
  }

  .hero-content {
    text-align: center;
    z-index: 10;
    position: relative;
    animation: fadeInUp 1s ease-out;
  }

  .hero-title {
    font-size: 5rem;
    margin-bottom: 1.5rem;
    font-weight: 800;
    background: linear-gradient(45deg, #ff6b6b, #ffa726, #4ecdc4);
    background-size: 200% 200%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation:
      gradientShift 3s ease-in-out infinite,
      slideInFromLeft 1s ease-out;
    text-shadow: 0 0 30px rgba(255, 107, 107, 0.3);
    letter-spacing: -0.02em;
  }

  .hero-subtitle {
    font-size: 1.6rem;
    margin: 1rem 0 3rem;
    color: rgba(255, 255, 255, 0.9);
    font-weight: 300;
    animation: fadeInUp 1s ease-out 0.3s both;
    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  }

  .hero-buttons {
    display: flex;
    gap: 1.5rem;
    justify-content: center;
    flex-wrap: wrap;
    animation: fadeInUp 1s ease-out 0.6s both;
  }

  .cta-button {
    padding: 1rem 2.5rem;
    border: none;
    border-radius: 50px;
    font-size: 1.1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .cta-button.primary {
    background: linear-gradient(45deg, #ff6b6b, #ffa726);
    color: white;
    box-shadow: 0 10px 30px rgba(255, 107, 107, 0.4);
  }

  .cta-button.primary:hover {
    transform: translateY(-3px) scale(1.05);
    box-shadow: 0 15px 40px rgba(255, 107, 107, 0.6);
  }

  .cta-button.secondary {
    background: rgba(255, 255, 255, 0.1);
    color: white;
    border: 2px solid rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(10px);
  }

  .cta-button.secondary:hover {
    background: rgba(255, 255, 255, 0.2);
    border-color: rgba(255, 255, 255, 0.5);
    transform: translateY(-3px) scale(1.05);
  }

  .image-placeholder {
    position: absolute;
    right: 5%;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(255, 255, 255, 0.1);
    padding: 2rem;
    border-radius: 25px;
    backdrop-filter: blur(20px);
    border: 2px solid rgba(255, 255, 255, 0.2);
    max-width: 350px;
    max-height: 350px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
    animation: slideInFromRight 1s ease-out 0.4s both;
  }

  .kibble-image {
    max-width: 100%;
    max-height: 100%;
    border-radius: 15px;
    transition: transform 0.3s ease;
  }

  .kibble-image:hover {
    transform: scale(1.05) rotate(2deg);
  }

  .floating-elements {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
  }

  .floating-element {
    position: absolute;
    background: linear-gradient(45deg, rgba(255, 107, 107, 0.3), rgba(255, 167, 38, 0.3));
    border-radius: 50%;
    animation: float 6s ease-in-out infinite;
  }

  .element-1 {
    width: 20px;
    height: 20px;
    top: 10%;
    left: 10%;
    animation-delay: 0s;
  }

  .element-2 {
    width: 15px;
    height: 15px;
    top: 70%;
    right: 15%;
    animation-delay: 2s;
  }

  .element-3 {
    width: 25px;
    height: 25px;
    bottom: 20%;
    left: 20%;
    animation-delay: 4s;
  }

  .hero-background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
    z-index: 1;
  }

  .gradient-orb {
    position: absolute;
    border-radius: 50%;
    filter: blur(40px);
    opacity: 0.7;
    animation: orbFloat 8s ease-in-out infinite;
  }

  .orb-1 {
    width: 300px;
    height: 300px;
    background: radial-gradient(circle, rgba(255, 107, 107, 0.4) 0%, transparent 70%);
    top: -150px;
    left: -150px;
    animation-delay: 0s;
  }

  .orb-2 {
    width: 200px;
    height: 200px;
    background: radial-gradient(circle, rgba(255, 167, 38, 0.4) 0%, transparent 70%);
    bottom: -100px;
    right: -100px;
    animation-delay: 3s;
  }

  .orb-3 {
    width: 150px;
    height: 150px;
    background: radial-gradient(circle, rgba(78, 205, 196, 0.4) 0%, transparent 70%);
    top: 50%;
    left: 10%;
    animation-delay: 6s;
  }

  /* Keyframe Animations */
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slideInFromLeft {
    from {
      opacity: 0;
      transform: translateX(-50px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes slideInFromRight {
    from {
      opacity: 0;
      transform: translateX(50px) translateY(-50%);
    }
    to {
      opacity: 1;
      transform: translateX(0) translateY(-50%);
    }
  }

  @keyframes gradientShift {
    0%,
    100% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
  }

  @keyframes float {
    0%,
    100% {
      transform: translateY(0px) rotate(0deg);
    }
    50% {
      transform: translateY(-20px) rotate(180deg);
    }
  }

  @keyframes orbFloat {
    0%,
    100% {
      transform: translate(0, 0) scale(1);
    }
    33% {
      transform: translate(30px, -30px) scale(1.1);
    }
    66% {
      transform: translate(-20px, 20px) scale(0.9);
    }
  }

  .cuisines {
    margin: 4rem auto;
    max-width: 1200px;
    padding: 0 2rem;
  }

  .cuisines-container {
    text-align: center;
  }

  .cuisines-titles {
    font-size: 3rem;
    margin-bottom: 3rem;
    color: white;
    font-weight: 700;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    letter-spacing: -0.02em;
  }

  .cuisines-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2.5rem;
  }

  .cuisine-card {
    background: rgba(255, 255, 255, 0.95);
    padding: 0;
    border-radius: 20px;
    text-align: center;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    overflow: hidden;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
  }

  .cuisine-card:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  }

  .cuisine-card h3 {
    margin: 0;
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
    color: #2d3748;
    font-weight: 600;
    padding: 1.5rem 1.5rem 0.5rem;
  }

  .cuisine-card p {
    color: #718096;
    line-height: 1.6;
    margin-bottom: 1.5rem;
    padding: 0 1.5rem;
    font-size: 1rem;
  }

  .cuisine-link {
    text-decoration: none;
    color: inherit;
    display: block;
    transition: all 0.3s ease;
  }

  .cuisine-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 0 0 20px 20px;
    transition: transform 0.3s ease;
  }

  .cuisine-card:hover .cuisine-image {
    transform: scale(1.05);
  }

  .meal-container {
    max-width: 1200px;
    margin: 4rem auto;
    padding: 0 2rem;
    text-align: center;
  }

  .meal-title {
    font-size: 3rem;
    margin-bottom: 3rem;
    color: white;
    font-weight: 700;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    letter-spacing: -0.02em;
  }

  .meal-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
  }

  .meal-card {
    background: rgba(255, 255, 255, 0.95);
    padding: 2rem;
    border-radius: 20px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    min-height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #718096;
    font-size: 1.2rem;
    font-weight: 500;
  }

  /* Responsive design */
  @media (max-width: 1024px) {
    .image-placeholder {
      position: relative;
      right: auto;
      top: auto;
      transform: none;
      margin: 2rem auto;
      max-width: 280px;
      max-height: 280px;
    }

    .hero {
      flex-direction: column;
      text-align: center;
      padding: 3rem 2rem;
    }
  }

  @media (max-width: 768px) {
    .hero {
      min-height: 70vh;
      padding: 2rem 1rem;
      margin: 1rem;
    }

    .hero-title {
      font-size: 3rem;
    }

    .hero-subtitle {
      font-size: 1.3rem;
    }

    .hero-buttons {
      flex-direction: column;
      align-items: center;
      gap: 1rem;
    }

    .cta-button {
      width: 100%;
      max-width: 250px;
    }

    .image-placeholder {
      max-width: 250px;
      max-height: 250px;
      padding: 1.5rem;
    }

    .cuisines-titles,
    .meal-title {
      font-size: 2rem;
    }

    .cuisines-grid {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }

    .cuisines,
    .meal-container {
      padding: 0 1rem;
    }

    .orb-1,
    .orb-2,
    .orb-3 {
      display: none;
    }
  }

  @media (max-width: 480px) {
    .hero-title {
      font-size: 2.5rem;
    }

    .hero-subtitle {
      font-size: 1.1rem;
    }

    .image-placeholder {
      max-width: 200px;
      max-height: 200px;
      padding: 1rem;
    }
  }
</style>
