<script>
	import '../app.css';
	import { onNavigate } from '$app/navigation';
	import { page } from '$app/state';
	import Sidebar from '$lib/components/Sidebar.svelte';
	import MobileHeader from '$lib/components/MobileHeader.svelte';

	let { children } = $props();

	const standalone = $derived(page.url.pathname.startsWith('/catch'));

	onNavigate((navigation) => {
		if (!document.startViewTransition || matchMedia('(prefers-reduced-motion: reduce)').matches) return;

		// between home and the gallery, the selected list grows into the full one
		const paths = [navigation.from?.url.pathname, navigation.to?.url.pathname];
		const root = document.documentElement;
		root.classList.toggle('gallery-transition', paths.includes('/') && paths.includes('/projects'));
		// opening a project from its thumbnail: the screenshot expands first, then the page fades in
		const to = navigation.to?.url.pathname;
		root.classList.toggle('shot-transition', !!document.querySelector(`.project a[href="${to}"] img`));

		return new Promise((resolve) => {
			const transition = document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
			transition.finished.finally(() => root.classList.remove('gallery-transition', 'shot-transition'));
		});
	});
</script>

<svelte:head>
	{#if !standalone}
		<title>Ben Hu</title>
	{/if}
</svelte:head>

{#if standalone}
	<main class="standalone">
		{@render children()}
	</main>
{:else}
	<div class="layout">
		<Sidebar />
		<MobileHeader />

		<main class="main">
			{@render children()}
		</main>
	</div>
{/if}

<style>
	.standalone {
		max-width: 660px;
		margin: 0 auto;
		padding: 72px 24px 80px;
	}
</style>
