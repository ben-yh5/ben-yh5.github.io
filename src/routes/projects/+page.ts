import type { Project } from '$lib/data/content';
import type { PageLoad } from './$types';

const projectModules = import.meta.glob('/src/content/projects/*.svx', { eager: true });

export const load: PageLoad = () => {
	const projects: Project[] = Object.entries(projectModules).map(([path, module]: [string, any]) => {
		const slug = path.split('/').pop()!.replace('.svx', '');
		return { slug, ...module.metadata };
	});

	projects.sort((a, b) => a.order - b.order);

	return { projects };
};
