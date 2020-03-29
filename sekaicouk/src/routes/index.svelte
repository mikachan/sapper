<script context="module">
	import { apiEndpoint, linkResolver } from '../../prismic-configuration';
	import Prismic from 'prismic-javascript';
	import { Date, RichText } from 'prismic-dom';

	export const posts = [];

	export async function preload() {
		await Prismic.api(apiEndpoint)
			.then(api => {
				return api.query(
					Prismic.Predicates.at('document.type', 'post'),
					{
						orderings: '[my.post.date desc]',
					}
				);
			})
			.then(
				response => {
					response.results.forEach(result => {
						posts.push(result);
					});
				},
				err => {
					console.warn('Error: ', err);
				}
			);

		return { posts };
	}
</script>

<script>
	export let posts;
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
	<img alt="Borat" src="" />
	<figcaption>HIGH FIVE!</figcaption>
</figure>

<div class="container mx-auto">
	{#each posts as post}
		{console.log(post)}
		<div>
			<h2>{RichText.asText(post.data.title, linkResolver)}</h2>

			<p class="bg-gray-600">
				Date: {Intl.DateTimeFormat('en-GB', {
					year: 'numeric',
					month: 'short',
					day: '2-digit',
				}).format(Date(post.first_publication_date))}
			</p>

			<div>{RichText.asText(post.data.content, linkResolver)}</div>
		</div>
	{/each}
</div>
