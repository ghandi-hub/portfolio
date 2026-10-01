<script lang="ts">
	import BrutalTag from '$lib/components/brutal/BrutalTag.svelte';
	import { site } from '$lib/data/site';

	let { data }: { data: any } = $props();

	const project = $derived(data.project);
</script>

<svelte:head>
	<title>{project.title} — {site.name}</title>
	<meta name="description" content={project.description} />
	<link rel="canonical" href="{site.url}/projects/{project.slug}" />
	<meta property="og:type" content="article" />
	<meta property="og:title" content="{project.title} — {site.name}" />
	<meta property="og:description" content={project.description} />
</svelte:head>

<!-- Breadcrumb -->
<div class="border-b-2 border-[var(--color-line)] bg-[var(--color-paper)]">
	<div class="shell py-3">
		<nav aria-label="Breadcrumb" class="mono-label">
			<a href="/" class="underline underline-offset-4">HOME</a>
			<span class="text-[var(--color-muted)] px-2">/</span>
			<a href="/#work" class="underline underline-offset-4">WORK</a>
			<span class="text-[var(--color-muted)] px-2">/</span>
			<span class="text-[var(--color-accent)]">{project.slug.toUpperCase()}</span>
		</nav>
	</div>
</div>

<!-- Header -->
<header class="shell py-12 md:py-16">
	<p class="mono-label text-[var(--color-accent)]">
		PROJECT / {project.year} / {project.category}
	</p>
	<h1 class="display-hero mt-5 text-[clamp(2.5rem,9vw,7rem)]">{project.title}</h1>
	<p class="mt-6 text-lg md:text-xl max-w-3xl text-[var(--color-muted)]">
		{project.description}
	</p>

	{#if project.role}
		<p class="mono-label text-[var(--color-muted)] mt-6">ROLE: {project.role}</p>
	{/if}

	<div class="flex flex-wrap gap-1.5 mt-6">
		{#each project.stack as tech (tech)}
			<BrutalTag label={tech} />
		{/each}
	</div>

	{#if project.links.demo || project.links.github}
		<div class="flex flex-wrap gap-3 mt-8">
			{#if project.links.demo}
				<a
					href={project.links.demo}
					class="btn-brutal btn-brutal-accent"
					target="_blank"
					rel="noopener noreferrer"
				>
					LIVE DEMO <span aria-hidden="true">↗</span>
				</a>
			{/if}
			{#if project.links.github}
				<a
					href={project.links.github}
					class="btn-brutal"
					target="_blank"
					rel="noopener noreferrer"
				>
					SOURCE <span aria-hidden="true">↗</span>
				</a>
			{/if}
		</div>
	{/if}
</header>

<!-- Problem / Solution -->
{#if project.problem || project.solution}
	<section class="border-y-2 border-[var(--color-line)]">
		<div class="shell py-12 md:py-16">
			<div class="grid gap-px bg-[var(--color-line)] border-2 border-[var(--color-line)] md:grid-cols-2">
				{#if project.problem}
					<div class="bg-[var(--color-bg)] p-6 md:p-8">
						<h2 class="mono-label text-[var(--color-accent)]">PROBLEM</h2>
						<p class="mt-4 text-lg">{project.problem}</p>
					</div>
				{/if}
				{#if project.solution}
					<div class="bg-[var(--color-paper)] p-6 md:p-8">
						<h2 class="mono-label text-[var(--color-accent)]">SOLUTION</h2>
						<p class="mt-4 text-lg">{project.solution}</p>
					</div>
				{/if}
			</div>
		</div>
	</section>
{/if}

<!-- Architecture flow -->
{#if project.architecture?.length}
	<section class="border-b-2 border-[var(--color-line)]">
		<div class="shell py-12 md:py-16">
			<h2 class="mono-label text-[var(--color-muted)]">// ARCHITECTURE</h2>
			<ol class="mt-6 space-y-0">
				{#each project.architecture as layer, i (layer)}
					<li class="flex items-center gap-4">
						<span class="mono-label text-[var(--color-muted)] w-8 shrink-0">
							{String(i + 1).padStart(2, '0')}
						</span>
						<span
							class="flex-1 border-2 border-[var(--color-line)] bg-[var(--color-paper)] px-4 py-3 mono-label shadow-brutal-sm"
						>
							{layer}
						</span>
					</li>
					{#if i < project.architecture.length - 1}
						<li class="flex pl-12" aria-hidden="true">
							<span class="mono-label text-[var(--color-accent)] py-1">↓</span>
						</li>
					{/if}
				{/each}
			</ol>
		</div>
	</section>
{/if}

<!-- Key features -->
{#if project.keyFeatures?.length}
	<section class="border-b-2 border-[var(--color-line)]">
		<div class="shell py-12 md:py-16">
			<h2 class="mono-label text-[var(--color-muted)]">// KEY FEATURES</h2>
			<ul class="mt-6 grid gap-3 md:grid-cols-2">
				{#each project.keyFeatures as feature (feature)}
					<li class="flex gap-3">
						<span class="text-[var(--color-accent)] mono-label shrink-0">▸</span>
						<span>{feature}</span>
					</li>
				{/each}
			</ul>
		</div>
	</section>
{/if}

<!-- Challenges -->
{#if project.challenges?.length}
	<section class="border-b-2 border-[var(--color-line)]">
		<div class="shell py-12 md:py-16">
			<h2 class="mono-label text-[var(--color-muted)]">// CHALLENGES</h2>
			<ol class="mt-6 space-y-5">
				{#each project.challenges as challenge, i (challenge)}
					<li class="grid gap-3 md:grid-cols-12">
						<span class="mono-label text-[var(--color-accent)] md:col-span-1">
							{String(i + 1).padStart(2, '0')}
						</span>
						<p class="md:col-span-11 text-lg max-w-3xl">{challenge}</p>
					</li>
				{/each}
			</ol>
		</div>
	</section>
{/if}

<!-- Back -->
<section>
	<div class="shell py-12 md:py-16">
		<a href="/#work" class="btn-brutal">
			<span aria-hidden="true">←</span> BACK TO SELECTED WORK
		</a>
	</div>
</section>