<script lang="ts">
	import type { Project } from '$lib/data/types';
	import BrutalTag from '$lib/components/brutal/BrutalTag.svelte';

	let {
		project,
		index,
		flip = false
	}: {
		project: Project;
		index: number;
		flip?: boolean;
	} = $props();

	const num = $derived(String(index + 1).padStart(2, '0'));
</script>

<article
	id={project.slug}
	class="reveal border-b-2 border-[var(--color-line)]"
	aria-labelledby="proj-{project.slug}-title"
>
	<a
		href="/projects/{project.slug}"
		class="shell block py-8 md:py-12 project-link"
		aria-label="View project {project.title}"
	>
		<div class="grid gap-6 lg:grid-cols-12 lg:gap-10 items-start">
			<!-- Index + meta -->
			<div class="lg:col-span-3 {flip ? 'lg:order-3 lg:text-right' : ''}">
				<div class="flex items-center gap-3 {flip ? 'lg:justify-end' : ''}">
					<span
						class="grid place-items-center w-9 h-9 border-2 border-[var(--color-line)] bg-[var(--color-fg)] text-[var(--color-bg)] mono-label"
						aria-hidden="true"
					>
						{num}
					</span>
					<span class="mono-label text-[var(--color-muted)]">{project.year}</span>
				</div>
				<p class="mono-label text-[var(--color-muted)] mt-3">{project.category}</p>
			</div>

			<!-- Title + description -->
			<div class="lg:col-span-6 {flip ? 'lg:order-1' : ''}">
				<h3 id="proj-{project.slug}-title" class="display-project">
					{project.title}
				</h3>
				<p class="mt-3 text-base md:text-lg max-w-2xl text-[var(--color-muted)]">
					{project.description}
				</p>

				<div class="flex flex-wrap gap-1.5 mt-5">
					{#each project.stack.slice(0, 6) as tech (tech)}
						<BrutalTag label={tech} />
					{/each}
				</div>
			</div>

			<!-- Action -->
			<div class="lg:col-span-3 {flip ? 'lg:order-2' : ''} lg:pt-2">
				<span class="link-arrow">
					VIEW PROJECT <span aria-hidden="true">→</span>
				</span>
			</div>
		</div>
	</a>
</article>

<style>
	@media (prefers-reduced-motion: no-preference) {
		.project-link {
			transition: background-color 160ms ease;
		}
		.project-link:hover {
			background: var(--color-paper);
		}
		.project-link:hover .display-project {
			color: var(--color-accent);
		}
		.project-link :global(.display-project) {
			transition: color 140ms ease;
		}
	}
</style>