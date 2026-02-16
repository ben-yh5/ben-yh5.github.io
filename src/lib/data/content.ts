export interface Project {
	name: string;
	slug: string;
	order: number;
	type: string;
	url: string;
	github: string;
	summary: string;
	tags: string[];
	coord?: string;
}
