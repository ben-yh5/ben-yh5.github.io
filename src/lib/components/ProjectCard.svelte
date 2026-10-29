<script lang="ts">
	import type { Project } from '$lib/data/content';
	import { shotName } from '$lib/transitions';

	let { project }: { project: Project } = $props();
</script>

<div class="project" style:--card="card-{project.slug}" data-featured={project.featured || undefined}>
	<a class="thumb" href="/projects/{project.slug}" tabindex="-1" aria-hidden="true">
		{#if project.thumbnail}
			<img src={project.thumbnail} alt="" loading="lazy" style:view-transition-name={shotName(project.thumbnail)} />
		{:else if project.coord}
			<span class="thumb-coord">{project.coord}</span>
		{/if}
	</a>
	<div class="body">
		<a class="project-name" href="/projects/{project.slug}">{project.name}</a>
		{#if project.summary && project.summary !== '#'}
			<div class="project-desc">{project.summary}</div>
		{/if}
		<div class="project-meta">
			{project.tags.join(', ')}
			{#if project.url && project.url !== '#'}<a href={project.url} target="_blank" rel="noopener noreferrer">[demo]</a>{/if}
			{#if project.github}<a href={project.github} target="_blank" rel="noopener noreferrer">[code]</a>{/if}
		</div>
	</div>
</div>

<style>
	.project {
		display: flex;
		gap: 20px;
		padding: 16px 0;
		border-bottom: 1px solid var(--rule);
	}

	.project:first-of-type { border-top: 1px solid var(--rule); }

	:global(.gallery-transition) .project {
		view-transition-name: var(--card);
		view-transition-class: card;
		/* opaque, so cards stacked under each other mid-slide don't show through */
		background: var(--bg);
	}

	.thumb {
		flex-shrink: 0;
		width: 140px;
		aspect-ratio: 4 / 3;
		border: 1px solid var(--rule);
		display: flex;
		align-items: center;
		justify-content: center;
		overflow: hidden;
		text-decoration: none;
		text-align: center;
		padding: 0 8px;
	}

	.thumb:has(img) { padding: 0; }

	.thumb img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		view-transition-class: shot;
	}

	.thumb-coord {
		font-size: 12px;
		color: var(--secondary);
	}

	.project-name {
		font-size: 17px;
		font-weight: 400;
		color: var(--text);
		text-decoration: none;
		transition: color 0.2s;
	}

	.project-name:hover {
		color: var(--blue);
	}

	.project-desc {
		font-size: 14px;
		color: var(--secondary);
		font-weight: 300;
		margin-top: 2px;
	}

	.project-meta {
		margin-top: 6px;
		font-size: 13px;
		color: var(--secondary);
	}

	.project-meta a {
		color: var(--blue);
		text-decoration: none;
	}

	@media (max-width: 720px) {
		.thumb { width: 96px; }
	}
</style>
