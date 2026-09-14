<svelte:head>
	<title>Catch — Privacy Policy</title>
	<meta name="description" content="Privacy policy for the Catch mobile app." />
</svelte:head>

<div class="legal-page">
	<h1 class="title">Catch — Privacy Policy</h1>
	<p class="meta">Effective date: September 14, 2026</p>

	<p>
		Catch is a travel photography app in which users share photos pinned to real-world places and
		"catch" them by re-taking the photo at the same spot. It is developed and operated by Ben Hu
		("I", "me"). This policy describes what data Catch collects, how it is used, and the choices
		you have. Questions: <a href="mailto:bhu05@uw.edu">bhu05@uw.edu</a>.
	</p>

	<h2>Data the app collects</h2>

	<h3>Account information</h3>
	<p>
		When you sign in with Google, Sign in with Apple, or email and password, Firebase
		Authentication (Google LLC) processes your email address and sign-in credentials. You choose a
		username, which is public. You may optionally add a bio and profile photo, which are also
		public.
	</p>

	<h3>Photos</h3>
	<p>
		Photos you post are uploaded to the app's cloud storage, cropped square, and resized copies are
		generated for display. Posts — the photo, your caption, and your username — are visible to
		other users of the app.
	</p>

	<h3>Precise location</h3>
	<p>
		When you share or catch a photo, the app records your device's precise GPS coordinates (and
		compass heading and tilt) to pin the photo on the shared map and to verify that catches happen
		at the real spot. <strong>The location of a photo you share is public content</strong> — its
		map pin is visible to anyone using the app, so don't post photos of places you want to keep
		private (such as your home). Your device's live location — used to validate catches, sort
		nearby content, and center the map — is not shared with other users. Exact post coordinates
		are stored server-side and served only through controlled server functions.
	</p>

	<h3>Derived place and image data</h3>
	<p>
		To power search and the in-app passport, the app derives data from your posts: coordinates are
		reverse-geocoded into place names (country, city, street) using OpenStreetMap's Nominatim
		service, photo content is analyzed by Google's Gemini API to generate descriptive tags and
		search embeddings, and city-level "passport stamps" are derived from where you have posted and
		caught. Your passport is visible to other users unless you set it to private in Settings.
	</p>

	<h3>Social and usage data</h3>
	<p>
		The app stores your follows and followers, saved posts, lists, in-app notifications, block
		list, and any reports you submit, along with plain activity counts (total posts and catches).
		If you enable push notifications, a device push token is stored to deliver them.
	</p>

	<h3>Optional: ML training contributions (off by default)</h3>
	<p>
		Settings includes an optional data-contribution toggle, <strong>disabled by default</strong>.
		If you turn it on, pairs of original and catch photos — together with their coordinates,
		compass heading, and date — are stored separately and used to train the app's on-device visual
		matching model. You can turn this off at any time, and contributed data is deleted when you
		delete your account.
	</p>

	<h2>How data is used</h2>
	<p>
		Data is used solely to provide the app: showing the shared map, verifying catches, semantic
		search, notifications, and moderation. Catch shows no ads, does not sell personal data, and
		does not share it with third parties for marketing.
	</p>

	<h2>Service providers</h2>
	<p>The app relies on these processors:</p>
	<ul>
		<li>
			<strong>Google Firebase</strong> (Google LLC) — authentication, database, file storage,
			server functions, push notification delivery
		</li>
		<li><strong>Google Sign-In</strong> and <strong>Sign in with Apple</strong> — optional sign-in methods</li>
		<li><strong>Mapbox</strong> — map rendering (your map viewport is sent to fetch tiles)</li>
		<li><strong>OpenStreetMap Nominatim</strong> — reverse geocoding of post coordinates</li>
		<li><strong>Google Gemini API</strong> — image tagging and search embeddings</li>
	</ul>

	<h2>Retention and deletion</h2>
	<p>
		Your data is kept while your account is active. You can delete individual posts at any time,
		which removes them for all users. You can delete your entire account in the app (Settings →
		Delete Account) or by request — see
		<a href="/catch/delete-account">Account deletion</a>. Deletion permanently removes your
		profile, credentials, posts and photos, saves, lists, notifications, and any ML training
		contributions. Reports submitted for moderation may be retained where necessary for safety and
		abuse prevention.
	</p>

	<h2>Children</h2>
	<p>Catch is not directed at children under 13, and I do not knowingly collect data from them.</p>

	<h2>Changes</h2>
	<p>
		If this policy changes, the updated version will be posted at this address with a new effective
		date.
	</p>

	<h2>Contact</h2>
	<p>Ben Hu — <a href="mailto:bhu05@uw.edu">bhu05@uw.edu</a></p>
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

	.legal-page h3 {
		font-size: 16px;
		font-weight: 600;
		margin: 24px 0 8px;
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
