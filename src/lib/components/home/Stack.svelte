<script lang="ts">
	import { stackGroups } from '$lib/data/skills';
</script>

<section id="stack" aria-labelledby="stack-heading">
	<div class="shell py-14 md:py-20">
		<header class="rule pt-4 pb-6">
			<p class="mono-label text-[var(--color-muted)]">04 / STACK</p>
			<h2 id="stack-heading" class="display-section mt-3">TECH STACK</h2>
		</header>

		<!-- Mobile: horizontal scroll. Desktop: matrix -->
		<div class="lg:hidden">
			<p class="mono-label text-[var(--color-muted)] mb-3">← SWIPE →</p>
			<div
			class="flex gap-2 overflow-x-auto pb-2 snap-x"
			aria-label="Technology stack"
			role="group"
		>
			{#each stackGroups as group (group.label)}
				{#each group.items as item (item)}
					<span class="snap-start shrink-0 tag-brutal">{item}</span>
				{/each}
			{/each}
		</div>
		</div>

		<!-- Desktop matrix -->
		<div class="hidden lg:block">
			<div
				class="grid gap-px bg-[var(--color-line)] border-2 border-[var(--color-line)]"
				style="grid-template-columns: repeat(5, minmax(0, 1fr));"
			>
				{#each stackGroups as group (group.label)}
					<div class="bg-[var(--color-paper)]">
						<div
							class="border-b-2 border-[var(--color-line)] bg-[var(--color-fg)] text-[var(--color-bg)] px-4 py-2.5"
						>
							<h3 class="mono-label">{group.label}</h3>
						</div>
						<ul class="p-4 space-y-2">
							{#each group.items as item (item)}
								<li class="font-medium">{item}</li>
							{/each}
						</ul>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>