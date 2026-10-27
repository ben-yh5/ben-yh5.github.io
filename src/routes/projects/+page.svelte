<script lang="ts">
	import ProjectCard from '$lib/components/ProjectCard.svelte';

	let { data } = $props();
</script>

<svelte:head>
	<title>Projects — Ben Hu</title>
</svelte:head>

<div class="page-header">
	<h1>Projects</h1>
	<p>Things I've built, on my own and at hackathons.</p>
</div>

<section>
	{#each data.projects as project}
		<ProjectCard {project} />
	{/each}
</section>
