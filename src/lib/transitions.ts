// view-transition-name for a screenshot, shared by thumbnails and figures so they morph into each other
export function shotName(src: string): string {
	return 'shot' + src.replace(/[^a-zA-Z0-9]/g, '-');
}

export interface CardBox {
	name: string;
	featured: boolean;
	top: number;
	height: number;
}

export function measureCards(): CardBox[] {
	return [...document.querySelectorAll<HTMLElement>('.project')].map((card) => {
		const { top, height } = card.getBoundingClientRect();
		return { name: card.style.getPropertyValue('--card'), featured: card.dataset.featured !== undefined, top, height };
	});
}

// bottom edge of the last selected card, which the other cards slide out from under
export function selectedEdge(cards: CardBox[]): number | undefined {
	const last = cards.filter((c) => c.featured).at(-1);
	return last && last.top + last.height;
}

// keyframes that slide each unselected card out from under the edge,
// clipping whatever part of it is still above the edge
export function slideFromUnder(cards: CardBox[], edge: number): { name: string; keyframes: Keyframe[] }[] {
	return cards
		.filter((c) => !c.featured)
		.map(({ name, top, height }) => {
			const shift = edge - top - height;
			// progress at which the card's top clears the edge and it no longer needs clipping
			const clear = Math.min(1, Math.max(0, 1 - (edge - top) / shift));
			return {
				name,
				keyframes: [
					{ transform: `translateY(${shift}px)`, clipPath: `inset(${height}px 0 0 0)` },
					{ offset: clear, transform: `translateY(${(1 - clear) * shift}px)`, clipPath: 'inset(0 0 0 0)' },
					{ transform: 'translateY(0)', clipPath: 'inset(0 0 0 0)' }
				]
			};
		});
}
