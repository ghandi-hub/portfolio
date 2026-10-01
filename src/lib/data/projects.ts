import type { Project } from './types';

export const projects: Project[] = [
	{
		slug: 'cvforge',
		title: 'CVForge',
		description: 'ATS-oriented CV builder with deterministic keyword scanner and cover letter generator.',
		category: 'Web Application',
		year: 2026,
		role: 'Design & Full-stack Development',
		stack: ['SvelteKit', 'TypeScript', 'Bun', 'MongoDB', 'Tailwind CSS', 'Zod'],
		featured: true,
		problem:
			'Job seekers cannot tell whether their CV survives an applicant tracking system, and rewriting one for every posting is slow and inconsistent.',
		solution:
			'A structured CV data model rendered into ATS-safe templates, paired with a deterministic keyword scanner that compares a job description against the CV and a generator that drafts a matching cover letter.',
		architecture: ['BROWSER', 'SVELTEKIT SSR', 'REST API', 'MONGODB'],
		keyFeatures: [
			'Structured CV data model with reusable sections',
			'Three ATS-safe templates rendered at exact A4 geometry',
			'Deterministic keyword scanner (no LLM scoring)',
			'Cover letter generator with three tone profiles',
			'Isolated print engine producing 1:1 A4 PDF export',
			'Google OAuth with HMAC-signed session cookies'
		],
		challenges: [
			'Keeping the on-screen A4 preview, the mobile preview and the PDF export geometrically identical while all three scale differently.',
			'Isolating print output from a tabbed editor so export never depends on which tab is active.'
		],
		links: {
			github: 'https://github.com/ghandi-hub/cvforge'
		}
	},
	{
		slug: 'invitation-web-app',
		title: 'Invitation Web App',
		description: 'Digital invitation platform with guestbook, RSVP tracking and server-side rendering.',
		category: 'Web Application',
		year: 2026,
		role: 'Backend & Deployment',
		stack: ['SvelteKit', 'TypeScript', 'MongoDB', 'Docker', 'Cloudinary'],
		featured: true,
		problem:
			'Printed invitations carry no attendance signal, and guests have no channel to confirm attendance or leave a message.',
		solution:
			'A server-rendered invitation page backed by MongoDB, with a guestbook and RSVP endpoint, media storage on Cloudinary and containerized delivery behind a reverse proxy.',
		architecture: ['CLIENT', 'REVERSE PROXY', 'SVELTEKIT', 'MONGODB'],
		keyFeatures: [
			'Guestbook and RSVP endpoints',
			'Server-side invitation rendering',
			'Cloudinary-backed media handling',
			'Containerized deployment with restart policy'
		],
		challenges: [
			'Hardening public write endpoints against NoSQL injection through strict ObjectId validation.',
			'Recovering a broken database connection caused by an unescaped reserved character in the connection string.'
		],
		links: {}
	},
	{
		slug: 'ghandi-lab',
		title: 'Ghandi Lab',
		description: 'Self-hosted home server running containerized services, storage and monitoring automations.',
		category: 'Infrastructure',
		year: 2026,
		role: 'System Design & Operations',
		stack: ['Linux', 'Docker', 'MongoDB', 'MinIO', 'Tailscale', 'Cloudflare Tunnel', 'Python'],
		featured: true,
		problem:
			'Running personal workloads and side projects requires hosting that stays reachable, monitored and cheap enough to leave running all day.',
		solution:
			'A laptop converted into a self-hosted node: containerized services on an isolated Docker network, bulk storage on a mounted HDD, remote access through a tailnet and a tunnel, plus scheduled health checks.',
		architecture: ['TAILNET', 'CLOUDFLARE TUNNEL', 'TRAEFIK-FREE ROUTING', 'DOCKER NETWORK', 'MONGODB + MINIO'],
		keyFeatures: [
			'Multi-service Docker host with restart policies',
			'Scheduled temperature and battery thresholds with alerting',
			'Bulk storage exposed through a self-hosted file browser',
			'Tailnet-only administrative access',
			'Automated Google Workspace reporting jobs'
		],
		challenges: [
			'Keeping system services alive across reboots without manual intervention.',
			'Reducing exposure of database and object-storage ports that container orchestration binds to all interfaces by default.'
		],
		links: {}
	},
	{
		slug: '9router-model-gateway',
		title: 'Local Model Gateway',
		description: 'Self-hosted OpenAI-compatible proxy routing requests across multiple upstream model providers.',
		category: 'Tooling',
		year: 2026,
		role: 'Infrastructure & Integration',
		stack: ['Node.js', 'Docker', 'OpenAI API', 'Linux'],
		featured: false,
		problem:
			'Switching between model providers per tool means maintaining separate base URLs, keys and client configurations everywhere.',
		solution:
			'A single local gateway that registers each provider as an upstream connection and exposes one OpenAI-compatible endpoint, so clients point at a stable local base URL and select a model by prefix.',
		architecture: ['CLIENT TOOL', 'LOCAL GATEWAY :20128', 'PROVIDER A', 'PROVIDER B'],
		keyFeatures: [
			'Single OpenAI-compatible endpoint for multiple providers',
			'Prefix-based model namespacing',
			'Provider failover capability',
			'Zero client-side key sprawl'
		],
		challenges: [
			'Diagnosing a provider mismatch where the upstream expected a chat-completions payload but received a different API shape.'
		],
		links: {}
	}
];

export function getProject(slug: string): Project | undefined {
	return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
	return projects.filter((p) => p.featured);
}