<script lang="ts">
	import { site } from '$lib/data/site';

	const metrics = [
		{ label: 'ROLE', value: 'BACK END DEVELOPER' },
		{ label: 'ORG', value: 'PT. BANK NEGARA INDONESIA' },
		{ label: 'STACK', value: 'JAVA · SPRING BOOT · SVELTE · TS' },
		{ label: 'BASE', value: 'INDONESIA' }
	];
</script>

<section id="hero" class="border-b-2 border-[var(--color-line)]" aria-labelledby="hero-heading">
	<div class="shell py-12 md:py-20">
		<!-- Mobile: stacked editorial. Desktop: asymmetric split -->
		<div class="grid gap-10 lg:grid-cols-12 lg:gap-12 items-start">
			<!-- Left / main -->
			<div class="lg:col-span-7 xl:col-span-8">
				<p class="mono-label text-[var(--color-accent)]">01 / INTRO</p>

				<h1 id="hero-heading" class="display-hero mt-5">
					SOFTWARE<br />ENGINEER<br />&amp; BUILDER
				</h1>

				<div class="rule mt-8 pt-6">
					<p
						class="text-2xl md:text-3xl font-bold uppercase tracking-tight leading-none"
						style="font-family: var(--font-display);"
					>
						{site.statement}
					</p>
					<p class="mt-4 text-base md:text-lg text-[var(--color-muted)] max-w-xl">
						I build web applications, APIs and integration layers — the parts that make
						separate systems behave like one product.
					</p>
				</div>

				<div class="flex flex-wrap gap-3 mt-8">
					<a href="#work" class="btn-brutal btn-brutal-accent">
						VIEW MY WORK <span aria-hidden="true">→</span>
					</a>
					<a href="#contact" class="btn-brutal">GET IN TOUCH</a>
				</div>
			</div>

			<!-- Right / status rail (desktop emphasis, still useful on mobile) -->
			<aside class="lg:col-span-5 xl:col-span-4">
				<div class="brutal-box-strong shadow-brutal">
					<div
						class="border-b-2 border-[var(--color-line)] bg-[var(--color-fg)] text-[var(--color-bg)] px-4 py-2.5 flex items-center justify-between"
					>
						<span class="mono-label">SPEC SHEET</span>
						<span class="mono-label text-[var(--color-accent-2)]">v2026.1</span>
					</div>

					<dl class="divide-y-2 divide-[var(--color-line)]">
						{#each metrics as m (m.label)}
							<div class="px-4 py-3 flex items-start justify-between gap-4">
								<dt class="mono-label text-[var(--color-muted)] shrink-0">{m.label}</dt>
								<dd class="mono-label text-right">{m.value}</dd>
							</div>
						{/each}
					</dl>

					<div class="border-t-2 border-[var(--color-line)] px-4 py-3 flex flex-wrap gap-2">
						<span class="tag-brutal tag-brutal-accent">OPEN TO WORK</span>
						<span class="tag-brutal">REMOTE / HYBRID</span>
					</div>
				</div>
			</aside>
		</div>
	</div>
</section>