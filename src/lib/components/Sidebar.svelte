<script lang="ts">
	interface Props {
		activeSection?: string;
	}

	let { activeSection = 'projects' }: Props = $props();
</script>

<aside class="sidebar">
	<div class="sidebar-top">
		<a href="/" class="name">Ben Hu</a>
		<div class="tagline">CV & map applications</div>
		<nav>
			<a href="/#experience" class:active={activeSection === 'experience'}>Experience</a>
			<a href="/#projects" class:active={activeSection === 'projects'}>Projects</a>
			<a href="https://github.com/ben-yh5" target="_blank" rel="noopener noreferrer">GitHub<svg class="external-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="11" height="11" fill="currentColor"><path d="M3.75 2h3.5a.75.75 0 0 1 0 1.5H4.5v8h8V8.75a.75.75 0 0 1 1.5 0v3.5A1.75 1.75 0 0 1 12.25 14h-8.5A1.75 1.75 0 0 1 2 12.25v-8.5C2 2.784 2.784 2 3.75 2Zm6.5 0h2a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0V3.56L7.78 7.28a.75.75 0 0 1-1.06-1.06l3.72-3.72H9.25a.75.75 0 0 1 0-1.5Z"/></svg></a>
		</nav>
	</div>
	<div class="sidebar-bottom">
		<a href="mailto:bhu05@">bhu05@uw.edu</a>
		<div class="coord">[47.6538, -122.3078]</div>
	</div>
</aside>

<style>
	.sidebar {
		width: 200px;
		flex-shrink: 0;
		padding: 120px 0 60px;
		position: sticky;
		top: 0;
		height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.name {
		font-family: Georgia, 'Times New Roman', Times, serif;
		font-size: 18px;
		font-weight: 400;
		color: var(--text);
		margin-bottom: 3px;
		text-decoration: none;
		display: block;
	}

	.tagline {
		font-size: 13px;
		color: var(--secondary);
		font-weight: 300;
		margin-bottom: 40px;
		line-height: 1.5;
	}

	nav {
		display: flex;
		flex-direction: column;
	}

	nav a {
		font-size: 14px;
		font-weight: 400;
		color: var(--secondary);
		text-decoration: none;
		padding: 6px 0 6px 12px;
		border-left: 2px solid transparent;
		transition: color 0.2s, border-color 0.2s;
	}

	nav a:hover {
		color: var(--blue);
		border-left-color: var(--blue);
	}

	nav a.active {
		color: var(--text);
		border-left-color: var(--purple);
	}

	.sidebar-bottom {
		font-size: 12px;
		color: var(--secondary);
		opacity: 0.5;
	}

	.sidebar-bottom a {
		color: var(--blue);
		text-decoration: none;
	}

	.sidebar-bottom .coord {
		margin-top: 6px;
	}

	@media (max-width: 720px) {
		.sidebar { display: none; }
	}
</style>
