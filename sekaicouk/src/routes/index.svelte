<script context="module">
	export async function preload() {
		const res = await this.fetch(
			`https://dev.to/api/articles?username=jpblancodb`
		);
		return { articles: await res.json() };
	}
</script>

<script>
	export let articles;
</script>

<style>
	h1,
	figure,
	p {
		text-align: center;
		margin: 0 auto;
	}

	h1 {
		font-size: 2.8em;
		text-transform: uppercase;
		font-weight: 700;
		margin: 0 0 0.5em 0;
	}

	figure {
		margin: 0 0 1em 0;
	}

	img {
		width: 100%;
		max-width: 400px;
		margin: 0 0 1em 0;
	}

	p {
		margin: 1em auto;
	}

	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}
</style>

<svelte:head>
	<title>sekai.co.uk</title>
</svelte:head>

<h1>Great success!</h1>

<figure>
	<img alt="Borat" src="great-success.png" />
	<figcaption>HIGH FIVE!</figcaption>
</figure>

<a href="/">
	<div class="card">
		Nov 24
		<h1>Create a blog with Svelte and DEV.to API</h1>

		<div class="tags">
			<span class="tag">#svelte</span>
			<span class="tag">#javascript</span>
			<span class="tag">#tutorial</span>
			<span class="tag">#blog</span>
		</div>

		<p>How to create a blog using dev.to API and svelte</p>

		<div class="flex-container">
			<div class="article-engagement">
				<img
					alt="Reactions"
					src="https://practicaldev-herokuapp-com.freetls.fastly.net/assets/reactions-stack-ee166e138ca182a567f74c986b6f810f670f4d199aca9c550cc7e6f49f34bd33.png" />
				<span>10</span>
			</div>

			<div class="article-engagement">
				<img
					alt="Comments"
					src="https://practicaldev-herokuapp-com.freetls.fastly.net/assets/comments-bubble-9958d41b969a1620c614347d5ad3f270ab49582c1d9f82b617a6b4156d05dda0.png" />
				<span>3</span>
			</div>

		</div>
	</div>
</a>
