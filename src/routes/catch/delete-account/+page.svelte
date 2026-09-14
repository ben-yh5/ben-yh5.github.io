<svelte:head>
	<title>Catch — Delete Your Account</title>
	<meta name="description" content="How to delete your Catch account and data." />
</svelte:head>

<div class="legal-page">
	<h1 class="title">Catch — Delete Your Account</h1>
	<p class="meta">
		For the Catch mobile app, developed by Ben Hu. See also the
		<a href="/catch/privacy">privacy policy</a>.
	</p>

	<h2>Option 1: In the app (immediate)</h2>
	<p>
		Open Catch and go to <strong>Settings → Delete Account</strong>. After you confirm, your
		account and its data are permanently deleted right away.
	</p>

	<h2>Option 2: By email</h2>
	<p>
		If you can no longer access the app, send a deletion request to
		<a href="mailto:bhu05@uw.edu?subject=Catch%20account%20deletion">bhu05@uw.edu</a> with the
		subject "Catch account deletion", sent from the email address associated with your Catch
		account (so I can verify it's you). Requests are processed within 30 days.
	</p>

	<h2>What gets deleted</h2>
	<ul>
		<li>Your profile (username, email, bio, photo) and sign-in credentials</li>
		<li>All your posts and photos, including generated thumbnails</li>
		<li>Your saves, lists, notifications, and follow relationships</li>
		<li>Any ML training data you opted in to contributing</li>
	</ul>
	<p>Deletion is permanent and cannot be undone.</p>

	<h2>What may be retained</h2>
	<p>
		Moderation records (reports submitted about content or users) may be retained where necessary
		for safety and abuse prevention. Aggregated, non-identifying data (such as overall map
		coverage statistics) is not tied to your account.
	</p>

	<h2>Deleting some data without deleting your account</h2>
	<p>
		You can delete any individual post from within the app, which removes it for all users. You
		can also turn off the optional ML data-contribution toggle in Settings at any time.
	</p>
</div>

<style>
	.title {
		font-family: Georgia, 'Times New Roman', Times, serif;
		font-size: 28px;
		font-weight: 400;
		margin-bottom: 6px;
	}

	.meta {
		color: var(--secondary);
		font-size: 14px;
		margin-bottom: 32px;
	}

	.legal-page h2 {
		font-family: Georgia, 'Times New Roman', Times, serif;
		font-size: 20px;
		font-weight: 400;
		margin: 36px 0 12px;
	}

	.legal-page p {
		margin-bottom: 14px;
	}

	.legal-page ul {
		padding-left: 22px;
		margin-bottom: 14px;
	}

	.legal-page li {
		margin-bottom: 6px;
	}

	.legal-page a {
		color: var(--blue);
	}
</style>
