<script lang="ts">
	let { children }: { children: import('svelte').Snippet } = $props();
</script>

<div class="figure-row">
	{@render children()}
</div>

<style>
	.figure-row {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		gap: 16px;
		margin: 16px 0;
	}

	.figure-row :global(figure) {
		flex: 1 1 0;
		min-width: 160px;
		max-width: 260px;
		margin: 0;
	}

	.figure-row :global(img) {
		max-height: 420px;
	}
</style>
