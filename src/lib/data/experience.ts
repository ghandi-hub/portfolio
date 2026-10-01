import type { Experience } from './types';

export const experiences: Experience[] = [
	{
		period: '2025 — NOW',
		title: 'Back End Developer',
		company: 'PT. Bank Negara Indonesia (Persero) Tbk.',
		description:
			'Engineering enterprise-grade backend services, API integrations, and middleware systems using Software AG webMethods. Responsible for robust message transformation, request validation, and high-reliability data exchange across core banking platforms.',
		stack: ['Software AG', 'webMethods', 'Java', 'Spring Boot', 'REST', 'SOAP', 'Oracle']
	},
	{
		period: '2023',
		title: 'Fullstack Development Trainee',
		company: 'Metrodata Academy',
		description:
			'Intensive enterprise software engineering program covering OOP, MVC, Spring Boot, JPA/Hibernate, unit testing, and web security. Developed a fullstack Overtime Management web application with responsive UI and RESTful APIs.',
		stack: ['Java', 'Spring Boot', 'React', 'REST API', 'SQL']
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
		items: ['Software AG webMethods', 'REST / SOAP Services', 'Message Transformation', 'Flow Services']
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