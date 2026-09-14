<nav class="mobile-header">
	<a href="/" class="name">Ben Hu</a>
	<div class="links">
		<a href="/#about">About</a>
		<a href="/#projects">Projects</a>
		<a href="/#writing">Writing</a>
	</div>
</nav>

<style>
	.mobile-header {
		display: none;
		padding: 24px 20px;
	}

	.name {
		font-family: Georgia, 'Times New Roman', Times, serif;
		font-size: 18px;
		font-weight: 400;
		color: var(--text);
		text-decoration: none;
		display: inline-block;
	}

	.links {
		margin-top: 10px;
		display: flex;
		gap: 16px;
	}

	.links a {
		font-size: 14px;
		color: var(--secondary);
		text-decoration: none;
	}

	.links a:hover { color: var(--blue); }

	@media (max-width: 720px) {
		.mobile-header { display: block; }
	}
</style>
