import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

const modules = import.meta.glob('/src/content/writing/*.svx');

export const load: PageLoad = async ({ params }) => {
	const path = `/src/content/writing/${params.slug}.svx`;
	const resolver = modules[path];

	if (!resolver) {
		throw error(404, `Post not found: ${params.slug}`);
	}

	const module = (await resolver()) as {
		default: any;
		metadata: Record<string, any>;
	};

	return {
		component: module.default,
		metadata: module.metadata
	};
};

export function entries() {
	return Object.keys(modules).map((path) => ({
		slug: path.split('/').pop()!.replace('.svx', '')
	}));
}
