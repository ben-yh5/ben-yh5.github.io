<script>
	import '../app.css';
	import { onNavigate } from '$app/navigation';
	import { page } from '$app/state';
	import { measureCards, selectedEdge, slideFromUnder } from '$lib/transitions';
	import Sidebar from '$lib/components/Sidebar.svelte';
	import MobileHeader from '$lib/components/MobileHeader.svelte';

	let { children } = $props();

	const standalone = $derived(page.url.pathname.startsWith('/catch'));

	onNavigate((navigation) => {
		if (!document.startViewTransition || matchMedia('(prefers-reduced-motion: reduce)').matches) return;

		// between home and the gallery, the selected list grows into the full one
		const paths = [navigation.from?.url.pathname, navigation.to?.url.pathname];
		const root = document.documentElement;
		const gallery = paths.includes('/') && paths.includes('/projects');
		root.classList.toggle('gallery-transition', gallery);
		// leaving the gallery, the extra cards tuck back under from where they are now
		const leaving = gallery && navigation.to?.url.pathname === '/' ? measureCards() : [];
		// opening a project from its thumbnail: the screenshot expands first, then the page fades in
		const to = navigation.to?.url.pathname;
		root.classList.toggle('shot-transition', !!document.querySelector(`.project a[href="${to}"] img`));

		return new Promise((resolve) => {
			const transition = document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
			transition.finished.finally(() => root.classList.remove('gallery-transition', 'shot-transition'));
			if (!gallery) return;
			transition.ready.then(() => {
				// the edge is where the last selected card lands, so it lines up once the cards settle
				const arriving = measureCards();
				const edge = selectedEdge(arriving);
				if (edge === undefined) return;
				const options = { duration: 300, easing: 'cubic-bezier(0.2, 0, 0, 1)', fill: 'both' };
				for (const { name, keyframes } of slideFromUnder(leaving, edge))
					// mirrored easing, so played in reverse the cards still move fast first and settle last
					root.animate(keyframes, { ...options, duration: 400, easing: 'cubic-bezier(1, 0, 0.8, 1)', direction: 'reverse', pseudoElement: `::view-transition-old(${name})` });
				for (const { name, keyframes } of slideFromUnder(arriving, edge))
					root.animate(keyframes, { ...options, pseudoElement: `::view-transition-new(${name})` });
			});
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
