<script>
	let name = 'World';
	let count = 0;
	let nodeVersion = '20.18.0'; // Your Node version

	function increment() {
		count += 1;
	}

	function reset() {
		count = 0;
	}
</script>

<svelte:head>
	<title>Home - My Svelte Site</title>
	<meta name="description" content="My awesome Svelte website" />
</svelte:head>

<section class="hero">
	<h1>Hello {name}!</h1>
	<p>Welcome to your Svelte static website</p>
	<p class="version">Running on Node.js v{nodeVersion} 🚀</p>
</section>

<section class="demo">
	<h2>Interactive Demo</h2>
	<div class="counter">
		<p>Button clicked: <strong>{count}</strong> {count === 1 ? 'time' : 'times'}</p>
		<div class="buttons">
			<button on:click={increment} class="primary">
				Click me!
			</button>
			<button on:click={reset} class="secondary">
				Reset
			</button>
		</div>
	</div>
</section>

<section class="features">
	<h2>Why Svelte?</h2>
	<div class="grid">
		<div class="card">
			<h3>🚀 Fast</h3>
			<p>No virtual DOM overhead</p>
		</div>
		<div class="card">
			<h3>📦 Small</h3>
			<p>Tiny bundle sizes</p>
		</div>
		<div class="card">
			<h3>✨ Simple</h3>
			<p>Easy to learn syntax</p>
		</div>
		<div class="card">
			<h3>⚡ Reactive</h3>
			<p>Built-in reactivity</p>
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

	.version {
		background: rgba(255, 255, 255, 0.2);
		padding: 0.5rem 1rem;
		border-radius: 20px;
		display: inline-block;
		margin-top: 1rem !important;
	}

	.demo {
		text-align: center;
		margin-bottom: 3rem;
		padding: 2rem;
		background: white;
		border-radius: 8px;
		box-shadow: 0 2px 10px rgba(0,0,0,0.1);
	}

	.counter p {
		font-size: 1.2rem;
		margin-bottom: 1rem;
	}

	.buttons {
		display: flex;
		gap: 1rem;
		justify-content: center;
		flex-wrap: wrap;
	}

	button {
		padding: 1rem 2rem;
		border: none;
		border-radius: 6px;
		font-size: 1rem;
		cursor: pointer;
		transition: all 0.2s;
		font-weight: 500;
	}

	.primary {
		background: #ff3e00;
		color: white;
	}

	.primary:hover {
		background: #e33100;
		transform: translateY(-2px);
	}

	.secondary {
		background: #f0f0f0;
		color: #333;
	}

	.secondary:hover {
		background: #e0e0e0;
	}

	.features h2 {
		text-align: center;
		margin-bottom: 2rem;
		font-size: 2rem;
		color: #333;
	}

	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 2rem;
	}

	.card {
		background: white;
		padding: 2rem;
		border-radius: 8px;
		text-align: center;
		box-shadow: 0 2px 10px rgba(0,0,0,0.1);
		transition: transform 0.2s;
	}

	.card:hover {
		transform: translateY(-4px);
	}

	.card h3 {
		margin-top: 0;
		font-size: 1.5rem;
		margin-bottom: 1rem;
	}

	.card p {
		color: #666;
		line-height: 1.5;
	}
</style>