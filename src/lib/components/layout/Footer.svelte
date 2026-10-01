<script lang="ts">
	import { site } from '$lib/data/site';

	const year = new Date().getFullYear();
</script>

<footer class="border-t-2 border-[var(--color-line)] mt-0">
	<div class="shell py-10 md:py-14">
		<div class="grid gap-8 md:grid-cols-3">
			<div>
				<p class="mono-label text-[var(--color-muted)]">// SITE</p>
				<p class="display-project text-2xl mt-2">GHANDI.DEV</p>
				<p class="mt-3 text-sm max-w-xs text-[var(--color-muted)]">
					{site.role}. {site.location}.
				</p>
			</div>

			<div>
				<p class="mono-label text-[var(--color-muted)]">// ELSEWHERE</p>
				<ul class="mt-3 space-y-2">
					<li>
						<a class="link-arrow" href="mailto:{site.email}">EMAIL →</a>
					</li>
					<li>
						<a class="link-arrow" href={site.links.github} target="_blank" rel="noopener noreferrer">
							GITHUB ↗
						</a>
					</li>
					<li>
						<a class="link-arrow" href={site.links.linkedin} target="_blank" rel="noopener noreferrer">
							LINKEDIN ↗
						</a>
					</li>
				</ul>
			</div>

			<div class="md:text-right">
				<p class="mono-label text-[var(--color-muted)]">// SITE</p>
				<ul class="mt-3 space-y-1 mono-label">
					<li class="text-[var(--color-muted)]">RENDER: SVELTEKIT / SSR</li>
					<li class="text-[var(--color-muted)]">STACK: SVELTE · BUN</li>
					<li class="text-[var(--color-muted)]">TRACKING: NONE</li>
				</ul>
			</div>
		</div>

		<div
			class="rule mt-10 pt-5 flex flex-col sm:flex-row justify-between gap-3 mono-label text-[var(--color-muted)]"
		>
			<span>© {year} SONNYA GHANDI</span>
			<span>BUILD SYSTEMS. CONNECT THINGS. SHIP SOFTWARE.</span>
		</div>
	</div>
</footer>