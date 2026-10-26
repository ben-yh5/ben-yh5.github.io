<script lang="ts">
	import type { Project } from '$lib/data/content';

	let { project }: { project: Project } = $props();
</script>

<div class="row">
	<a class="name" href="/projects/{project.slug}">{project.name}</a>
	{#if project.summary && project.summary !== '#'}
		<span class="desc">{project.summary}</span>
	{/if}
	{#if project.url && project.url !== '#'}<a href={project.url} target="_blank" rel="noopener noreferrer">[demo]</a>{/if}
	{#if project.github}<a href={project.github} target="_blank" rel="noopener noreferrer">[code]</a>{/if}
</div>

<style>
	.row {
		padding: 6px 0;
		font-size: 15px;
	}

	.name {
		font-size: 15px;
		color: var(--text);
		margin-right: 6px;
		transition: color 0.2s;
	}

	.name:hover {
		color: var(--blue);
	}

	.desc {
		color: var(--secondary);
		font-weight: 300;
		margin-right: 6px;
	}

	a {
		font-size: 13px;
		color: var(--blue);
		text-decoration: none;
	}
</style>
