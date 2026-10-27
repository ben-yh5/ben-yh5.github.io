<script lang="ts">
	import type { Project } from '$lib/data/content';

	let { projects }: { projects: Project[] } = $props();

	const W = 600;
	const H = 300;
	const PAD = { top: 12, right: 12, bottom: 28, left: 64 };
	const STEPS = [0.001, 0.002, 0.005, 0.01, 0.02, 0.05, 0.1, 0.2, 0.5, 1, 2, 5, 10, 20, 50];

	// group projects sharing a spot, e.g. hackathons in the same building
	const spots = $derived.by(() => {
		const byCoord = new Map<string, { lat: number; lon: number; projects: Project[] }>();
		for (const p of projects) {
			const [lat, lon] = (p.coord ?? '[0, 0]').replace(/[[\]]/g, '').split(',').map(Number);
			const key = `${lat},${lon}`;
			if (!byCoord.has(key)) byCoord.set(key, { lat, lon, projects: [] });
			byCoord.get(key)!.projects.push(p);
		}
		return [...byCoord.values()];
	});

	const placed = $derived(spots.filter((s) => s.lat !== 0 || s.lon !== 0));
	const nullIsland = $derived(spots.find((s) => s.lat === 0 && s.lon === 0)?.projects ?? []);

	// equirectangular, with longitude shrunk by cos(lat) so distances look right
	const view = $derived.by(() => {
		const lats = placed.map((s) => s.lat);
		const lons = placed.map((s) => s.lon);
		const midLat = (Math.min(...lats) + Math.max(...lats)) / 2;
		const k = Math.cos((midLat * Math.PI) / 180);
		const midLon = (Math.min(...lons) + Math.max(...lons)) / 2;
		const plotW = W - PAD.left - PAD.right;
		const plotH = H - PAD.top - PAD.bottom;
		let latSpan = Math.max((Math.max(...lats) - Math.min(...lats)) * 1.6, 0.01);
		let lonSpan = Math.max((Math.max(...lons) - Math.min(...lons)) * 1.6, 0.01);
		if ((lonSpan * k) / latSpan < plotW / plotH) lonSpan = (latSpan * plotW) / plotH / k;
		else latSpan = (lonSpan * k * plotH) / plotW;
		const lat0 = midLat - latSpan / 2;
		const lon0 = midLon - lonSpan / 2;
		const x = (lon: number) => PAD.left + ((lon - lon0) / lonSpan) * plotW;
		const y = (lat: number) => PAD.top + (1 - (lat - lat0) / latSpan) * plotH;
		const ticks = (lo: number, span: number) => {
			const step = STEPS.find((s) => span / s <= 6) ?? 100;
			const out = [];
			for (let v = Math.ceil(lo / step) * step; v <= lo + span; v += step) out.push(v);
			return { values: out, digits: Math.max(0, -Math.floor(Math.log10(step) + 1e-9)) };
		};
		return { x, y, latTicks: ticks(lat0, latSpan), lonTicks: ticks(lon0, lonSpan) };
	});
</script>

<figure class="map">
	<svg viewBox="0 0 {W} {H}" role="img" aria-label="Map of where each project was made">
		{#if placed.length}
			{#each view.latTicks.values as lat}
				<line class="grid" x1={PAD.left} x2={W - PAD.right} y1={view.y(lat)} y2={view.y(lat)} />
				<text class="tick" x={PAD.left - 8} y={view.y(lat)} text-anchor="end" dominant-baseline="middle">{lat.toFixed(view.latTicks.digits)}°</text>
			{/each}
			{#each view.lonTicks.values as lon}
				<line class="grid" x1={view.x(lon)} x2={view.x(lon)} y1={PAD.top} y2={H - PAD.bottom} />
				<text class="tick" x={view.x(lon)} y={H - PAD.bottom + 16} text-anchor="middle">{lon.toFixed(view.lonTicks.digits)}°</text>
			{/each}
			<rect class="frame" x={PAD.left} y={PAD.top} width={W - PAD.left - PAD.right} height={H - PAD.top - PAD.bottom} />

			{#each placed as spot}
				<g class="spot" transform="translate({view.x(spot.lon)}, {view.y(spot.lat)})">
					<circle r="4" />
					{#each spot.projects as p, i}
						<a href="/projects/{p.slug}">
							<text x="9" y={4 + (i - (spot.projects.length - 1) / 2) * 14}>{p.name}</text>
						</a>
					{/each}
				</g>
			{/each}
		{/if}

		{#if nullIsland.length}
			<g class="null-island" transform="translate({W - PAD.right - 132}, {PAD.top + 10})">
				<rect width="122" height={30 + nullIsland.length * 13} />
				<text class="tick" x="8" y="15">Null Island [0, 0]</text>
				{#each nullIsland as p, i}
					<a href="/projects/{p.slug}">
						<circle cx="12" cy={29 + i * 13} r="2.5" />
						<text x="20" y={32 + i * 13}>{p.name}</text>
					</a>
				{/each}
			</g>
		{/if}
	</svg>
	<figcaption>
		<span class="label">Fig. 1.</span> Where each project was made. Projects still waiting on a location sit on Null Island, the point in the Gulf of Guinea where latitude and longitude are both zero.
	</figcaption>
</figure>

<style>
	.map {
		margin: 40px 0 0;
	}

	svg {
		display: block;
		width: 100%;
		height: auto;
		overflow: visible;
	}

	.grid {
		stroke: var(--rule);
		stroke-width: 1;
		stroke-dasharray: 2 3;
	}

	.frame {
		fill: none;
		stroke: var(--rule);
	}

	.tick {
		font-size: 10px;
		fill: var(--secondary);
	}

	.spot circle,
	.null-island circle {
		fill: var(--purple);
		transition: r 0.2s;
	}

	.spot:hover circle { r: 6; }

	a text {
		font-size: 12px;
		fill: var(--text);
		transition: fill 0.2s;
	}

	a:hover text { fill: var(--blue); }

	.null-island rect {
		fill: var(--bg);
		stroke: var(--rule);
	}

	.null-island circle { opacity: 0.5; }

	.null-island a text {
		font-size: 11px;
		fill: var(--secondary);
	}

	figcaption {
		margin-top: 12px;
		font-size: 13px;
		color: var(--secondary);
		font-weight: 300;
	}

	.label {
		font-family: Georgia, 'Times New Roman', Times, serif;
		font-weight: 400;
		color: var(--text);
	}
</style>
