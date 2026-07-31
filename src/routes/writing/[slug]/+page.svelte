<script lang="ts">
	import { formatDate } from '$lib/data/dates';

	let { data } = $props();

	let Component = $derived(data.component);
	let metadata = $derived(data.metadata);
</script>

<svelte:head>
	<title>{metadata.title} — Ben Hu</title>
</svelte:head>

<div class="post-page">
	<a class="back" href="/#writing">&larr; Back</a>

	<h1 class="title">{metadata.title}</h1>
	<div class="date coord">{formatDate(metadata.date)}</div>

	<div class="content">
		<Component />
	</div>
</div>

<style>
	.back {
		display: inline-block;
		color: var(--secondary);
		font-size: 14px;
		text-decoration: none;
		margin-bottom: 24px;
		transition: color 0.2s;
	}

	.back:hover {
		color: var(--blue);
	}

	.title {
		font-family: Georgia, 'Times New Roman', Times, serif;
		font-size: 24px;
		font-weight: 400;
		margin-bottom: 6px;
	}

	.date {
		margin-bottom: 24px;
	}

	.content {
		font-size: 16px;
		font-weight: 300;
		line-height: 1.8;
		color: var(--text);
	}

	.content :global(h2) {
		font-family: Georgia, 'Times New Roman', Times, serif;
		font-size: 20px;
		font-weight: 400;
		margin-top: 32px;
		margin-bottom: 12px;
	}

	.content :global(p) {
		margin-bottom: 16px;
	}

	.content :global(ul),
	.content :global(ol) {
		margin-bottom: 16px;
		padding-left: 24px;
	}

	.content :global(code) {
		font-family: ui-monospace, SFMono-Regular, 'SF Mono', Menlo, Consolas, 'Liberation Mono', monospace;
		font-size: 14px;
		background: rgba(0, 0, 0, 0.04);
		padding: 2px 6px;
		border-radius: 3px;
	}

	.content :global(pre) {
		background: rgba(0, 0, 0, 0.04);
		padding: 16px;
		border-radius: 6px;
		overflow-x: auto;
		margin-bottom: 16px;
	}

	.content :global(pre code) {
		background: none;
		padding: 0;
	}

	.content :global(a) {
		color: var(--blue);
		text-decoration: none;
		border-bottom: 1px solid var(--rule);
		transition: border-color 0.2s;
	}

	.content :global(a:hover) {
		border-color: var(--blue);
	}
</style>
