import type { Experience } from './types';

export const experiences: Experience[] = [
	{
		period: '2023 — NOW',
		title: 'Middleware Developer',
		company: 'Enterprise Banking Integration',
		description:
			'Building and maintaining API and system integration layers between internal services and third-party platforms. Work spans request validation, message transformation and reliable delivery across mixed REST and SOAP interfaces.',
		stack: ['Java', 'Node.js', 'REST', 'SOAP', 'Oracle']
	},
	{
		period: '2022 — 2023',
		title: 'Backend Developer',
		company: 'Application Development',
		description:
			'Developed service endpoints and data access layers for internal applications, focusing on query correctness, structured validation and predictable API contracts.',
		stack: ['Node.js', 'MongoDB', 'SQL', 'Docker']
	},
	{
		period: '2021 — 2022',
		title: 'Frontend Developer',
		company: 'Web Application Delivery',
		description:
			'Implemented responsive interfaces against existing API contracts, with attention to component structure, layout stability and cross-device behaviour.',
		stack: ['JavaScript', 'Vue', 'CSS']
	}
];

export const engineeringAreas = [
	{
		label: 'API',
		items: ['REST', 'SOAP', 'Request Validation', 'Transformation']
	},
	{
		label: 'BACKEND',
		items: ['Node.js', 'Java', 'Spring Boot', 'Service Design']
	},
	{
		label: 'FRONTEND',
		items: ['SvelteKit', 'TypeScript', 'Nuxt', 'Responsive Layout']
	},
	{
		label: 'INTEGRATION',
		items: ['Third-party APIs', 'Message Mapping', 'Error Handling', 'Auth Flow']
	},
	{
		label: 'DATA',
		items: ['MongoDB', 'Oracle', 'SQL', 'Redis']
	},
	{
		label: 'INFRASTRUCTURE',
		items: ['Docker', 'Linux', 'CI/CD', 'Cloudflare Tunnel']
	}
];