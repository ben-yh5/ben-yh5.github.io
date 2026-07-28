<script lang="ts">
	let { src, alt, caption }: { src: string; alt: string; caption?: string } = $props();
</script>

<figure>
	<img {src} {alt} loading="lazy" />
	{#if caption}
		<figcaption>{caption}</figcaption>
	{/if}
</figure>

<style>
	figure {
		margin: 16px 0;
		text-align: center;
	}

	img {
		display: inline-block;
		max-width: 100%;
		max-height: 560px;
		width: auto;
		border-radius: 6px;
	}

	figcaption {
		margin-top: 8px;
		font-size: 13px;
		color: var(--secondary);
		text-align: center;
	}
</style>
