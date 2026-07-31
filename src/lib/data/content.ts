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

export interface Post {
	title: string;
	slug: string;
	date: string;
	summary?: string;
}
