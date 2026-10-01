<script lang="ts">
	import { engineeringAreas } from '$lib/data/experience';
</script>

<section id="engineering" aria-labelledby="eng-heading">
	<div class="shell py-14 md:py-20">
		<header class="rule pt-4 pb-6">
			<p class="mono-label text-[var(--color-muted)]">02 / ENGINEERING</p>
			<h2 id="eng-heading" class="display-section mt-3">I WORK ACROSS</h2>
		</header>

		<!-- Capability chips: mobile-friendly horizontal wrap -->
		<ul class="flex flex-wrap gap-2 mb-10" aria-label="Engineering disciplines">
			{#each engineeringAreas as area (area.label)}
				<li>
					<span
						class="inline-block border-2 border-[var(--color-line)] bg-[var(--color-paper)] px-3 py-2 mono-label shadow-brutal-sm"
					>
						{area.label}
					</span>
				</li>
			{/each}
		</ul>

		<!-- Detail grid -->
		<div class="grid gap-px bg-[var(--color-line)] border-2 border-[var(--color-line)] sm:grid-cols-2 lg:grid-cols-3">
			{#each engineeringAreas as area (area.label)}
				<div class="bg-[var(--color-bg)] p-5">
					<h3 class="mono-label text-[var(--color-accent)]">{area.label}</h3>
					<ul class="mt-3 space-y-1.5">
						{#each area.items as item (item)}
							<li class="font-medium">{item}</li>
						{/each}
					</ul>
				</div>
			{/each}
		</div>
	</div>
</section>