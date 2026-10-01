<script lang="ts">
	import { getFeaturedProjects } from '$lib/data/projects';
	import ProjectCard from './ProjectCard.svelte';

	const featured = getFeaturedProjects();
</script>

<section id="work" aria-labelledby="work-heading">
	<div class="shell pt-14 md:pt-20">
		<header class="rule pt-4 pb-4">
			<div class="flex items-baseline justify-between gap-4">
				<p class="mono-label text-[var(--color-muted)]">01 / SELECTED WORK</p>
				<p class="mono-label text-[var(--color-muted)]">{featured.length} PROJECTS</p>
			</div>
			<h2 id="work-heading" class="display-section mt-3">SELECTED WORK</h2>
		</header>
	</div>

	<div>
		{#each featured as project, i (project.slug)}
			<ProjectCard {project} index={i} flip={i % 2 === 1} />
		{/each}
	</div>
</section>