// view-transition-name for a screenshot, shared by thumbnails and figures so they morph into each other
export function shotName(src: string): string {
	return 'shot' + src.replace(/[^a-zA-Z0-9]/g, '-');
}
