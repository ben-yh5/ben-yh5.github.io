<script lang="ts">
	import ProjectCard from '$lib/components/ProjectCard.svelte';

	let { data } = $props();
</script>

<div class="page-header">
	<h1>Hello, I'm Ben.</h1>
	<p>Currently based in Seattle studying CS at the University of Washington. I'm interested in computer vision, working with spatial data, and map-based applications.</p>
	<p>Find me on <a href="https://github.com/ben-yh5" target="_blank" rel="noopener noreferrer">GitHub<svg class="external-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="14" height="14" fill="currentColor"><path d="M3.75 2h3.5a.75.75 0 0 1 0 1.5H4.5v8h8V8.75a.75.75 0 0 1 1.5 0v3.5A1.75 1.75 0 0 1 12.25 14h-8.5A1.75 1.75 0 0 1 2 12.25v-8.5C2 2.784 2.784 2 3.75 2Zm6.5 0h2a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0V3.56L7.78 7.28a.75.75 0 0 1-1.06-1.06l3.72-3.72H9.25a.75.75 0 0 1 0-1.5Z"/></svg></a> and <a href="https://www.linkedin.com/in/bhu05/" target="_blank" rel="noopener noreferrer">LinkedIn<svg class="external-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="14" height="14" fill="currentColor"><path d="M3.75 2h3.5a.75.75 0 0 1 0 1.5H4.5v8h8V8.75a.75.75 0 0 1 1.5 0v3.5A1.75 1.75 0 0 1 12.25 14h-8.5A1.75 1.75 0 0 1 2 12.25v-8.5C2 2.784 2.784 2 3.75 2Zm6.5 0h2a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0V3.56L7.78 7.28a.75.75 0 0 1-1.06-1.06l3.72-3.72H9.25a.75.75 0 0 1 0-1.5Z"/></svg></a>, or reach out at <a href="mailto:bhu05@uw.edu">bhu05@uw.edu</a>.</p>
</div>

<section id="experience">
	<h2>Experience</h2>
	<div class="experience-item">
		<div class="experience-header">
			<span class="experience-role">Research Intern <span class="coord">[47.6533, -122.3056]</span></span>
			<span class="experience-date">Oct 2025 - Present</span>
		</div>
		<div class="experience-company">Makeability Lab</div>
		<p class="experience-desc">Developing vision-language framework leveraging OpenStreetMap semantic labels to enhance deep learning-based segmentation of street infrastructure in satellite and streetscape imagery.</p>
	</div>
</section>

<section id="projects">
	<h2>Projects</h2>
	{#each data.projects as project}
		<ProjectCard {project} />
	{/each}
</section>
