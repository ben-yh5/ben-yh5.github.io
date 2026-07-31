<script lang="ts">
	import MiniMap from '$lib/components/MiniMap.svelte';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import { formatDate } from '$lib/data/dates';

	let { data } = $props();
</script>

<svelte:head>
	<title>Ben Hu</title>
</svelte:head>

<div class="page-header" id="about">
	<h1>Hello, I'm Ben</h1>
	<p>Currently based in Seattle studying CS and Math at the University of Washington.</p>
	<p>I'm doing research with the <a href="https://makeabilitylab.cs.washington.edu/" target="_blank" rel="noopener noreferrer">Makeability Lab</a>, creating remote sensing systems with computer vision to detect traffic lanes and audit OpenStreetMap.</p>
	<p>Find me on <a href="https://github.com/ben-yh5" target="_blank" rel="noopener noreferrer">GitHub<svg class="external-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="14" height="14" fill="currentColor"><path d="M3.75 2h3.5a.75.75 0 0 1 0 1.5H4.5v8h8V8.75a.75.75 0 0 1 1.5 0v3.5A1.75 1.75 0 0 1 12.25 14h-8.5A1.75 1.75 0 0 1 2 12.25v-8.5C2 2.784 2.784 2 3.75 2Zm6.5 0h2a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0V3.56L7.78 7.28a.75.75 0 0 1-1.06-1.06l3.72-3.72H9.25a.75.75 0 0 1 0-1.5Z"/></svg></a> and <a href="https://www.linkedin.com/in/bhu05/" target="_blank" rel="noopener noreferrer">LinkedIn<svg class="external-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="14" height="14" fill="currentColor"><path d="M3.75 2h3.5a.75.75 0 0 1 0 1.5H4.5v8h8V8.75a.75.75 0 0 1 1.5 0v3.5A1.75 1.75 0 0 1 12.25 14h-8.5A1.75 1.75 0 0 1 2 12.25v-8.5C2 2.784 2.784 2 3.75 2Zm6.5 0h2a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0V3.56L7.78 7.28a.75.75 0 0 1-1.06-1.06l3.72-3.72H9.25a.75.75 0 0 1 0-1.5Z"/></svg></a>, or reach out at <a href="mailto:bhu05@uw.edu">bhu05@uw.edu</a>.</p>
</div>

<section id="projects">
	<h2>Projects</h2>
	{#each data.projects as project}
		<ProjectCard {project} />
	{/each}
</section>

<section id="writing">
	<h2>Writing</h2>
	{#each data.posts as post}
		<a class="post" href="/writing/{post.slug}">
			<div class="post-header">
				<span class="post-title">{post.title}</span>
				<span class="post-date coord">{formatDate(post.date)}</span>
			</div>
			{#if post.summary}
				<div class="post-summary">{post.summary}</div>
			{/if}
		</a>
	{/each}
</section>

<section id="map">
	<h2>Map</h2>
	<MiniMap projects={data.projects} />
	<p class="map-caption">Where each project was built.</p>
</section>

<style>
	.post {
		display: block;
		text-decoration: none;
		color: inherit;
		padding: 14px 0;
		border-bottom: 1px solid var(--rule);
	}

	.post:first-of-type {
		border-top: 1px solid var(--rule);
	}

	.post:hover .post-title {
		color: var(--blue);
	}

	.post-header {
		display: flex;
		align-items: baseline;
		justify-content: space-between;
		gap: 12px;
	}

	.post-title {
		font-size: 16px;
		font-weight: 400;
		color: var(--text);
		transition: color 0.2s;
	}

	.post-date {
		flex-shrink: 0;
	}

	.post-summary {
		font-size: 14px;
		color: var(--secondary);
		font-weight: 300;
		margin-top: 2px;
	}

	.map-caption {
		font-size: 13px;
		color: var(--secondary);
		font-weight: 300;
		margin-top: 10px;
	}
</style>
