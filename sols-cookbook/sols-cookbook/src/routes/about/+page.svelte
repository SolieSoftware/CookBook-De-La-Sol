<script>
	let technologies = [
		{ name: 'SvelteKit', description: 'The web framework' },
		{ name: 'Node.js v20.18.0', description: 'JavaScript runtime' },
		{ name: 'Vite', description: 'Build tool' },
		{ name: 'Static Generation', description: 'Fast deployment' }
	];
</script>

<svelte:head>
	<title>About - My Svelte Site</title>
</svelte:head>

<h1>About This Site</h1>

<div class="content">
	<p>
		This is a static website built with SvelteKit, demonstrating how to create 
		fast, modern web applications that compile to static files.
	</p>

	<h2>Technologies Used</h2>
	
	<div class="tech-grid">
		{#each technologies as tech}
			<div class="tech-card">
				<h3>{tech.name}</h3>
				<p>{tech.description}</p>
			</div>
		{/each}
	</div>

	<h2>Features</h2>
	<ul>
		<li>Static site generation</li>
		<li>Component-based architecture</li>
		<li>Built-in routing</li>
		<li>Reactive state management</li>
		<li>Optimized production builds</li>
	</ul>
</div>

<style>
	.content {
		max-width: 800px;
		line-height: 1.6;
	}

	.tech-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: 1rem;
		margin: 2rem 0;
	}

	.tech-card {
		background: #f8f9fa;
		padding: 1.5rem;
		border-radius: 8px;
		border-left: 4px solid #ff3e00;
	}

	.tech-card h3 {
		margin-top: 0;
		color: #ff3e00;
	}

	ul {
		background: white;
		padding: 2rem;
		border-radius: 8px;
		box-shadow: 0 2px 10px rgba(0,0,0,0.1);
	}

	li {
		margin: 0.5rem 0;
	}
</style>