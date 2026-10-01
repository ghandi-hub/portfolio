export type SkillCategory =
	| 'frontend'
	| 'backend'
	| 'database'
	| 'devops'
	| 'integration';

export type Project = {
	slug: string;
	title: string;
	description: string;
	category: string;
	year: number;
	role?: string;
	stack: string[];
	image?: string;
	featured: boolean;
	problem?: string;
	solution?: string;
	architecture?: string[];
	keyFeatures?: string[];
	challenges?: string[];
	links: {
		demo?: string;
		github?: string;
	};
};

export type Experience = {
	period: string;
	title: string;
	company: string;
	description: string;
	stack: string[];
};

export type Skill = {
	name: string;
	category: SkillCategory;
};

export type SkillGroup = {
	label: string;
	items: string[];
};