<script lang="ts">
	import type { Project } from '$lib/data/content';

	let { project }: { project: Project } = $props();
</script>

<a class="project" href="/projects/{project.slug}">
	<div class="project-header">
		<div class="project-name">{project.name} {#if project.coord}<span class="coord">{project.coord}</span>{/if}</div>
		{#if project.url && project.url !== '#'}
			<span class="project-url" onclick={(e) => e.stopPropagation()}><a href={project.url} target="_blank" rel="noopener noreferrer">Link<svg class="external-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="11" height="11" fill="currentColor"><path d="M3.75 2h3.5a.75.75 0 0 1 0 1.5H4.5v8h8V8.75a.75.75 0 0 1 1.5 0v3.5A1.75 1.75 0 0 1 12.25 14h-8.5A1.75 1.75 0 0 1 2 12.25v-8.5C2 2.784 2.784 2 3.75 2Zm6.5 0h2a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0V3.56L7.78 7.28a.75.75 0 0 1-1.06-1.06l3.72-3.72H9.25a.75.75 0 0 1 0-1.5Z"/></svg></a></span>
		{/if}
	</div>
	{#if project.summary && project.summary !== '#'}
		<div class="project-desc">{project.summary}</div>
	{/if}
	<div class="project-tags">
		{#if project.type}
			<span class="type-tag">{project.type}</span>
		{/if}
		{#each project.tags as tag}
			<span class="tag">{tag}</span>
		{/each}
	</div>
</a>

<style>
	.project {
		display: block;
		text-decoration: none;
		color: inherit;
		padding: 16px 0;
		border-bottom: 1px solid var(--rule);
		cursor: pointer;
	}

	.project:first-of-type { border-top: 1px solid var(--rule); }

	.project:hover .project-name {
		color: var(--blue);
	}

	.project-header {
		display: flex;
		align-items: baseline;
		justify-content: space-between;
		gap: 12px;
	}

	.project-name {
		font-size: 17px;
		font-weight: 400;
		color: var(--text);
		transition: color 0.2s;
	}

	.project-url {
		font-size: 13px;
		flex-shrink: 0;
	}

	.project-url a {
		color: var(--secondary);
		text-decoration: none;
		transition: color 0.2s;
	}

	.project-url a:hover {
		color: var(--blue);
	}

	.project-desc {
		font-size: 14px;
		color: var(--secondary);
		font-weight: 300;
		margin-top: 2px;
	}

	.project-tags {
		margin-top: 6px;
		display: flex;
		gap: 6px;
		flex-wrap: wrap;
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
</style>
