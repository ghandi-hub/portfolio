<script lang="ts">
	import { navItems, site } from '$lib/data/site';

	let { open = $bindable(false) }: { open?: boolean } = $props();

	function close() {
		open = false;
	}

	function onKeydown(e: KeyboardEvent) {
		if (e.key === 'Escape' && open) close();
	}
</script>

<svelte:window onkeydown={onKeydown} />

{#if open}
	<!-- Overlay -->
	<div
		id="mobile-menu"
		class="fixed inset-0 z-[60] lg:hidden bg-[var(--color-bg)] flex flex-col"
		role="dialog"
		aria-modal="true"
		aria-label="Site navigation"
	>
		<!-- Header bar -->
		<div class="border-b-2 border-[var(--color-line)]">
			<div class="shell flex items-center justify-between h-[62px]">
				<span class="mono-label text-[var(--color-muted)]">NAV / INDEX</span>
				<button
					type="button"
					class="btn-brutal !min-w-[44px] !px-3"
					onclick={close}
					aria-label="Close menu"
				>
					✕
				</button>
			</div>
		</div>

		<!-- Nav list -->
		<nav class="flex-1 overflow-y-auto" aria-label="Mobile navigation">
			<ul>
				{#each navItems as item (item.href)}
					<li class="border-b-2 border-[var(--color-line)]">
						<a
							href={item.href}
							class="shell flex items-center gap-4 py-5 group"
							onclick={close}
						>
							<span class="mono-label text-[var(--color-accent)] w-8 shrink-0">{item.index}</span>
							<span class="display-project text-3xl group-hover:text-[var(--color-accent)] transition-colors duration-150">
								{item.label}
							</span>
							<span class="ml-auto text-2xl" aria-hidden="true">→</span>
						</a>
					</li>
				{/each}
			</ul>
		</nav>

		<!-- Footer info -->
		<div class="border-t-2 border-[var(--color-line)] bg-[var(--color-fg)] text-[var(--color-bg)]">
			<div class="shell py-5">
				<p class="mono-label text-[var(--color-accent-2)]">{site.location}</p>
				<div class="flex flex-wrap gap-x-5 gap-y-2 mt-3">
					<a class="mono-label underline underline-offset-4" href="mailto:{site.email}">
						EMAIL
					</a>
					<a
						class="mono-label underline underline-offset-4"
						href={site.links.github}
						target="_blank"
						rel="noopener noreferrer"
					>
						GITHUB ↗
					</a>
					<a
						class="mono-label underline underline-offset-4"
						href={site.links.linkedin}
						target="_blank"
						rel="noopener noreferrer"
					>
						LINKEDIN ↗
					</a>
				</div>
			</div>
		</div>
	</div>
{/if}