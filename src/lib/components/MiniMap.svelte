<script lang="ts">
	import type { Project } from '$lib/data/content';

	let { projects }: { projects: Project[] } = $props();

	const W = 640;
	const H = 400;
	const PAD = 56;
	const STEPS = [0.01, 0.02, 0.05, 0.1, 0.2, 0.5, 1, 2, 5, 10, 15, 20, 30, 45];

	interface Point {
		name: string;
		slug: string;
		lat: number;
		lon: number;
		x: number;
		y: number;
	}

	function parseCoord(coord: string | undefined): [number, number] | null {
		const m = coord?.match(/-?\d+(?:\.\d+)?/g);
		return m && m.length >= 2 ? [parseFloat(m[0]), parseFloat(m[1])] : null;
	}

	function formatDeg(value: number, step: number): string {
		return step >= 1 ? `${Math.round(value)}°` : `${value.toFixed(2)}°`;
	}

	const map = $derived.by(() => {
		const raw = projects
			.map((p) => ({ p, c: parseCoord(p.coord) }))
			.filter((e): e is { p: Project; c: [number, number] } => e.c !== null)
			.map((e) => ({ name: e.p.name, slug: e.p.slug, lat: e.c[0], lon: e.c[1] }));

		if (raw.length === 0) return null;

		const lats = raw.map((r) => r.lat);
		const lons = raw.map((r) => r.lon);
		const spanLat = Math.max(Math.max(...lats) - Math.min(...lats), 0.02);
		const spanLon = Math.max(Math.max(...lons) - Math.min(...lons), 0.02);
		const cy = (Math.max(...lats) + Math.min(...lats)) / 2;
		const cx = (Math.max(...lons) + Math.min(...lons)) / 2;
		const scale = Math.min((W - 2 * PAD) / spanLon, (H - 2 * PAD) / spanLat);

		const points: Point[] = raw.map((r) => ({
			...r,
			x: W / 2 + (r.lon - cx) * scale,
			y: H / 2 - (r.lat - cy) * scale
		}));

		// spread dots that share the exact same coordinate
		const groups = new Map<string, Point[]>();
		for (const pt of points) {
			const key = `${pt.lat},${pt.lon}`;
			groups.set(key, [...(groups.get(key) ?? []), pt]);
		}
		for (const group of groups.values()) {
			if (group.length < 2) continue;
			group.forEach((pt, i) => {
				const angle = (2 * Math.PI * i) / group.length;
				pt.x += 7 * Math.cos(angle);
				pt.y += 7 * Math.sin(angle);
			});
		}

		// graticule
		const visLon = W / scale;
		const visLat = H / scale;
		const target = Math.max(visLon, visLat) / 7;
		const step = STEPS.find((s) => s >= target) ?? 45;

		const lonLeft = cx - visLon / 2;
		const lonRight = cx + visLon / 2;
		const latBottom = cy - visLat / 2;
		const latTop = cy + visLat / 2;

		const lonLines: { x: number; label: string }[] = [];
		for (let lon = Math.ceil(lonLeft / step) * step; lon <= lonRight; lon += step) {
			lonLines.push({ x: W / 2 + (lon - cx) * scale, label: formatDeg(lon, step) });
		}
		const latLines: { y: number; label: string }[] = [];
		for (let lat = Math.ceil(latBottom / step) * step; lat <= latTop; lat += step) {
			latLines.push({ y: H / 2 - (lat - cy) * scale, label: formatDeg(lat, step) });
		}

		return { points, lonLines, latLines, scale, cx, cy };
	});

	let svgEl: SVGSVGElement | undefined = $state();
	let hovered: Point | null = $state(null);
	let cursor: [number, number] | null = $state(null);

	function onMove(event: MouseEvent) {
		if (!map || !svgEl) return;
		const ctm = svgEl.getScreenCTM();
		if (!ctm) return;
		const pt = new DOMPoint(event.clientX, event.clientY).matrixTransform(ctm.inverse());
		cursor = [map.cy + (H / 2 - pt.y) / map.scale, map.cx + (pt.x - W / 2) / map.scale];
	}

	const readout = $derived(
		hovered
			? `${hovered.name} [${hovered.lat.toFixed(4)}, ${hovered.lon.toFixed(4)}]`
			: cursor
				? `[${cursor[0].toFixed(4)}, ${cursor[1].toFixed(4)}]`
				: ''
	);
</script>

{#if map}
	<div class="minimap">
		<svg
			bind:this={svgEl}
			viewBox="0 0 {W} {H}"
			role="img"
			aria-label="Map of where each project was built"
			onmousemove={onMove}
			onmouseleave={() => (cursor = null)}
		>
			{#each map.lonLines as line}
				<line class="grat" x1={line.x} y1="0" x2={line.x} y2={H} />
				<text class="grat-label" x={line.x + 4} y={H - 8}>{line.label}</text>
			{/each}
			{#each map.latLines as line}
				<line class="grat" x1="0" y1={line.y} x2={W} y2={line.y} />
				<text class="grat-label" x="8" y={line.y - 5}>{line.label}</text>
			{/each}

			{#each map.points as pt}
				<a
					href="/projects/{pt.slug}"
					aria-label={pt.name}
					onmouseenter={() => (hovered = pt)}
					onmouseleave={() => (hovered = null)}
					onfocus={() => (hovered = pt)}
					onblur={() => (hovered = null)}
				>
					<circle class="hit" cx={pt.x} cy={pt.y} r="12" />
					<circle class="dot" class:active={hovered === pt} cx={pt.x} cy={pt.y} r={hovered === pt ? 5.5 : 4} />
				</a>
			{/each}

			{#if hovered}
				<text
					class="dot-label"
					x={hovered.x > W - 130 ? hovered.x - 12 : hovered.x + 12}
					y={hovered.y + 4}
					text-anchor={hovered.x > W - 130 ? 'end' : 'start'}
				>
					{hovered.name}
				</text>
			{/if}
		</svg>
		<div class="readout coord">{readout}</div>
	</div>
{/if}

<style>
	.minimap {
		position: relative;
	}

	svg {
		display: block;
		width: 100%;
		height: auto;
		border: 1px solid var(--rule);
		border-radius: 6px;
		cursor: crosshair;
	}

	.grat {
		stroke: var(--rule);
		stroke-width: 0.75;
	}

	.grat-label {
		font-family: ui-monospace, SFMono-Regular, 'SF Mono', Menlo, Consolas, 'Liberation Mono', monospace;
		font-size: 10px;
		fill: var(--secondary);
		opacity: 0.5;
		user-select: none;
	}

	.hit {
		fill: transparent;
	}

	.dot {
		fill: var(--purple);
		transition: r 0.15s, fill 0.15s;
	}

	.dot.active {
		fill: var(--blue);
	}

	.dot-label {
		font-family: ui-monospace, SFMono-Regular, 'SF Mono', Menlo, Consolas, 'Liberation Mono', monospace;
		font-size: 11px;
		fill: var(--text);
		user-select: none;
		pointer-events: none;
	}

	.readout {
		position: absolute;
		top: 10px;
		right: 12px;
		min-height: 1em;
		pointer-events: none;
	}
</style>
