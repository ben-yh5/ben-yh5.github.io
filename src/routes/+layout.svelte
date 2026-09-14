<script>
	import '../app.css';
	import { onNavigate } from '$app/navigation';
	import { page } from '$app/state';
	import Sidebar from '$lib/components/Sidebar.svelte';
	import MobileHeader from '$lib/components/MobileHeader.svelte';

	let { children } = $props();

	const standalone = $derived(page.url.pathname.startsWith('/catch'));

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
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
