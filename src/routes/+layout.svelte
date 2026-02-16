<script>
	import '../app.css';
	import { onNavigate } from '$app/navigation';
	import Sidebar from '$lib/components/Sidebar.svelte';
	import MobileHeader from '$lib/components/MobileHeader.svelte';

	let { children } = $props();

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
	<title>Ben Hu</title>
</svelte:head>

<div class="layout">
	<Sidebar />
	<MobileHeader />

	<main class="main">
		{@render children()}
	</main>
</div>
