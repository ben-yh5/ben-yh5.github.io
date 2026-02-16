<script lang="ts">
	let { data } = $props();

	let Component = $derived(data.component);
	let metadata = $derived(data.metadata);
</script>

<svelte:head>
	<title>{metadata.name} — Ben Hu</title>
</svelte:head>

<div class="project-page">
	<a class="back" href="/#projects">&larr; Back</a>

	<h1 class="title">{metadata.name}</h1>

	<div class="tags">
		{#if metadata.type}
			<span class="type-tag">{metadata.type}</span>
		{/if}
		{#if metadata.tags}
			{#each metadata.tags as tag}
				<span class="tag">{tag}</span>
			{/each}
		{/if}
	</div>

	<div class="content">
		<Component />
	</div>

	<div class="links">
		{#if metadata.url && metadata.url !== '#'}
			<a class="link" href={metadata.url} target="_blank" rel="noopener">View project<svg class="external-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="11" height="11" fill="currentColor"><path d="M3.75 2h3.5a.75.75 0 0 1 0 1.5H4.5v8h8V8.75a.75.75 0 0 1 1.5 0v3.5A1.75 1.75 0 0 1 12.25 14h-8.5A1.75 1.75 0 0 1 2 12.25v-8.5C2 2.784 2.784 2 3.75 2Zm6.5 0h2a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0V3.56L7.78 7.28a.75.75 0 0 1-1.06-1.06l3.72-3.72H9.25a.75.75 0 0 1 0-1.5Z"/></svg></a>
		{/if}
		{#if metadata.github}
			<a class="link" href={metadata.github} target="_blank" rel="noopener">GitHub<svg class="external-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="11" height="11" fill="currentColor"><path d="M3.75 2h3.5a.75.75 0 0 1 0 1.5H4.5v8h8V8.75a.75.75 0 0 1 1.5 0v3.5A1.75 1.75 0 0 1 12.25 14h-8.5A1.75 1.75 0 0 1 2 12.25v-8.5C2 2.784 2.784 2 3.75 2Zm6.5 0h2a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0V3.56L7.78 7.28a.75.75 0 0 1-1.06-1.06l3.72-3.72H9.25a.75.75 0 0 1 0-1.5Z"/></svg></a>
		{/if}
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
		margin-bottom: 10px;
	}

	.tags {
		display: flex;
		gap: 6px;
		flex-wrap: wrap;
		margin-bottom: 20px;
	}

	.type-tag {
		font-family: ui-monospace, SFMono-Regular, 'SF Mono', Menlo, Consolas, 'Liberation Mono', monospace;
		font-size: 11px;
		color: var(--blue);
		background: rgba(0, 122, 255, 0.07);
		padding: 2px 8px;
		border-radius: 3px;
	}

	.tag {
		font-family: ui-monospace, SFMono-Regular, 'SF Mono', Menlo, Consolas, 'Liberation Mono', monospace;
		font-size: 11px;
		color: var(--purple);
		background: rgba(124, 92, 191, 0.07);
		padding: 2px 8px;
		border-radius: 3px;
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

	.content :global(h3) {
		font-family: Georgia, 'Times New Roman', Times, serif;
		font-size: 17px;
		font-weight: 400;
		margin-top: 24px;
		margin-bottom: 8px;
	}

	.content :global(p) {
		margin-bottom: 16px;
	}

	.content :global(ul),
	.content :global(ol) {
		margin-bottom: 16px;
		padding-left: 24px;
	}

	.content :global(li) {
		margin-bottom: 4px;
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

	.content :global(img) {
		max-width: 100%;
		border-radius: 6px;
		margin: 16px 0;
	}

	.links {
		display: flex;
		gap: 20px;
		margin-top: 20px;
		padding-top: 20px;
		border-top: 1px solid var(--rule);
	}

	.link {
		font-size: 14px;
		color: var(--secondary);
		text-decoration: none;
		transition: color 0.2s;
	}

	.link:hover {
		color: var(--blue);
	}
</style>
