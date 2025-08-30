<script>
	import kibbleImage from '../static/images/kibble.webp';
	import italianImage from '../static/images/italian_food_homepage.jpeg';
	import mexicanImage from '../static/images/mexican_food_homepage.jpg';
	import asianImage from '../static/images/asian_food_homepage.jpg';
	import americanImage from '../static/images/american_food_homepage.webp';
	import frenchImage from '../static/images/french_food_homepage.jpg';

	let cusines = {
		italian: {
			name: "Italian",
			description: "Pasta, pizza, and more",
			image: italianImage,
			href: "/italian"
		},
		mexican: {
			name: "Mexican",
			description: "Tacos, enchiladas, and spices",
			image: mexicanImage,
			href: "/mexican"
		},
		asian: {
			name: "Asian",
			description: "Stir-fries, curries, and noodles",
			image: asianImage,
			href: "/asian"
		},
		american: {
			name: "American",
			description: "Burgers, fries, and more",
			image: americanImage,
			href: "/american"
		},
		french: {
			name: "French",
			description: "Croissants, baguettes, and more",
			image: frenchImage,
			href: "/french"
		}
	}
</script>

<svelte:head>
	<title>Home - Sols Cookbook</title>
	<meta name="description" content="Sol's Cookbook - the art of kibble." />
</svelte:head>

<section class="hero">
	<h1>Hello Kibbler!</h1>
	<p>Welcome to the world of Stuart Kibble!</p>
	<div class="image-placeholder">
		<img src={kibbleImage} alt="Kibble" class="kibble-image" />
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
			<div class="meal-card">
			</div>
		</div>
	</div>
</section>

<style>
	.hero {
		text-align: center;
		padding: 3rem 1rem;
		background: linear-gradient(135deg, #ff3e00, #ff8a80);
		color: white;
		border-radius: 12px;
		margin-bottom: 3rem;
	}

	.hero h1 {
		font-size: 3rem;
		margin-bottom: 1rem;
		font-weight: 300;
	}

	.hero p {
		font-size: 1.2rem;
		margin: 0.5rem 0;
	}

	.image-placeholder {
		background: rgba(255, 255, 255, 0.2);
		padding: 2rem;
		border-radius: 12px;
		margin: 1rem auto;
		font-size: 1.2rem;
		border: 2px dashed rgba(255, 255, 255, 0.3);
		max-width: 300px;
		max-height: 300px;
	}
	
	.kibble-image {
		max-width: 100%;
		max-height: 100%;
	}

	.cuisines {
		margin-top: 3rem;
	}

	.cuisines-container {
		text-align: center;
	}

	.cuisines-titles {
		font-size: 2rem;
		margin-bottom: 2rem;
		color: #333;
	}

	.cuisines-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 2rem;
	}

	.cuisine-card {
		background: white;
		padding: 2rem;
		border-radius: 8px;
		text-align: center;
		box-shadow: 0 2px 10px rgba(0,0,0,0.1);
		transition: transform 0.2s;
	}

	.cuisine-card:hover {
		transform: translateY(-4px);
	}

	.cuisine-card h3 {
		margin-top: 0;
		font-size: 1.5rem;
		margin-bottom: 1rem;
	}

	.cuisine-card p {
		color: #666;
		line-height: 1.5;
	}

	.cuisine-link {
		text-decoration: none;
		color: inherit;
		display: block;
		transition: background-color 0.2s;
	}

	.cuisine-image {
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: 8px;
	}
</style>