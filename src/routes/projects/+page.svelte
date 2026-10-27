<script lang="ts">
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import ProjectMap from '$lib/components/ProjectMap.svelte';

	let { data } = $props();

	// selected first, so they stay on top when this page grows out of the homepage list
	const projects = $derived([...data.projects.filter((p) => p.featured), ...data.projects.filter((p) => !p.featured)]);
</script>

<svelte:head>
	<title>Projects — Ben Hu</title>
</svelte:head>

<div class="page-header">
	<h1 class="projects-title">Projects</h1>
	<p>Things I've built, on my own and at hackathons.</p>
</div>

<section>
	{#each projects as project}
		<ProjectCard {project} />
	{/each}
	<ProjectMap {projects} />
</section>
