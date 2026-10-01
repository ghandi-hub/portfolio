<script lang="ts">
	import { experiences } from '$lib/data/experience';
	import BrutalTag from '$lib/components/brutal/BrutalTag.svelte';
</script>

<section id="experience" aria-labelledby="exp-heading">
	<div class="shell py-14 md:py-20">
		<header class="rule pt-4 pb-6">
			<p class="mono-label text-[var(--color-muted)]">03 / EXPERIENCE</p>
			<h2 id="exp-heading" class="display-section mt-3">WHERE I HAVE WORKED</h2>
		</header>

		<ol class="space-y-0">
			{#each experiences as exp, i (exp.period + exp.title)}
				<li class="reveal border-t-2 border-[var(--color-line)] py-7 md:py-9">
					<div class="grid gap-5 lg:grid-cols-12 lg:gap-10">
						<!-- Period -->
						<div class="lg:col-span-3">
							<p class="mono-label text-[var(--color-accent)]">{exp.period}</p>
							<p class="mono-label text-[var(--color-muted)] mt-2">0{i + 1}</p>
						</div>

						<!-- Content -->
						<div class="lg:col-span-9">
							<h3 class="display-project text-2xl md:text-3xl">{exp.title}</h3>
							<p class="mono-label text-[var(--color-muted)] mt-2">{exp.company}</p>
							<p class="mt-4 max-w-3xl text-[var(--color-muted)]">{exp.description}</p>

							<div class="flex flex-wrap gap-1.5 mt-5">
								{#each exp.stack as tech (tech)}
									<BrutalTag label={tech} />
								{/each}
							</div>
						</div>
					</div>
				</li>
			{/each}
		</ol>
	</div>
</section>