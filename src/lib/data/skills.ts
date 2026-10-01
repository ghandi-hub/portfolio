import type { Skill, SkillGroup } from './types';

export const skills: Skill[] = [
	{ name: 'Svelte', category: 'frontend' },
	{ name: 'SvelteKit', category: 'frontend' },
	{ name: 'React', category: 'frontend' },
	{ name: 'TypeScript', category: 'frontend' },
	{ name: 'Nuxt', category: 'frontend' },
	{ name: 'Tailwind CSS', category: 'frontend' },
	{ name: 'Java', category: 'backend' },
	{ name: 'Spring Boot', category: 'backend' },
	{ name: 'Node.js', category: 'backend' },
	{ name: 'Bun', category: 'backend' },
	{ name: 'REST', category: 'integration' },
	{ name: 'SOAP', category: 'integration' },
	{ name: 'Third-party API', category: 'integration' },
	{ name: 'MongoDB', category: 'database' },
	{ name: 'Oracle', category: 'database' },
	{ name: 'SQL', category: 'database' },
	{ name: 'Redis', category: 'database' },
	{ name: 'Docker', category: 'devops' },
	{ name: 'Linux', category: 'devops' },
	{ name: 'CI/CD', category: 'devops' },
	{ name: 'Git', category: 'devops' }
];

export const stackGroups: SkillGroup[] = [
	{
		label: 'FRONTEND',
		items: ['Svelte', 'SvelteKit', 'React', 'TypeScript', 'Tailwind CSS']
	},
	{
		label: 'BACKEND',
		items: ['Java', 'Spring Boot', 'Node.js', 'Bun']
	},
	{
		label: 'INTEGRATION',
		items: ['REST', 'SOAP', 'Third-party API']
	},
	{
		label: 'DATA',
		items: ['MongoDB', 'Oracle', 'SQL', 'Redis']
	},
	{
		label: 'INFRASTRUCTURE',
		items: ['Docker', 'Linux', 'CI/CD', 'Git']
	}
];

export const stackMarquee = [
	'SVELTE',
	'TYPESCRIPT',
	'JAVA',
	'NODE',
	'SPRING',
	'BUN',
	'MONGODB',
	'ORACLE',
	'DOCKER',
	'LINUX',
	'REST',
	'SOAP',
	'REDIS',
	'TAILWIND'
];