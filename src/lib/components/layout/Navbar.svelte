<script lang="ts">
	import MobileMenu from './MobileMenu.svelte';
	import { navItems, site } from '$lib/data/site';
	import { X } from 'lucide-svelte';

	let open = $state(false);
	let scrolled = $state(false);

	function onScroll() {
		scrolled = window.scrollY > 12;
	}
</script>

<svelte:window onscroll={onScroll} />

<a
	href="#work"
	class="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:bg-[var(--color-paper)] focus:border-2 focus:border-[var(--color-line)] focus:px-4 focus:py-3 mono-label"
>
	Skip to content
</a>

<header
	class="sticky top-0 z-50 border-b-2 border-[var(--color-line)] bg-[var(--color-bg)] transition-shadow duration-200"
	class:shadow-[0_4px_0_0_var(--color-line)]={scrolled}
>
	<div class="shell">
		<div class="flex items-center justify-between gap-4 h-[62px] md:h-[70px]">
			<!-- Wordmark -->
			<a
				href="/"
				class="flex items-center gap-2.5 shrink-0"
				aria-label="{site.name} — home"
			>
				<span
					class="grid place-items-center w-8 h-8 md:w-9 md:h-9 bg-[var(--color-fg)] text-[var(--color-bg)] border-2 border-[var(--color-line)] mono-label shadow-brutal-sm"
					aria-hidden="true"
				>
					GD
				</span>
				<span class="display-project text-xl md:text-2xl">GHANDI.DEV</span>
			</a>

			<!-- Desktop nav -->
			<nav class="hidden lg:block" aria-label="Primary">
				<ul class="flex items-center gap-1">
					{#each navItems as item (item.href)}
						<li>
							<a
								href={item.href}
								class="block px-3 py-2 mono-label border-2 border-transparent hover:border-[var(--color-line)] hover:bg-[var(--color-paper)] transition-colors duration-150"
							>
								{item.label}
							</a>
						</li>
					{/each}
				</ul>
			</nav>

			<!-- Mobile menu trigger -->
			<button
				type="button"
				class="lg:hidden btn-brutal !min-w-[44px] !px-3"
				aria-expanded={open}
				aria-controls="mobile-menu"
				onclick={() => (open = !open)}
			>
				{#if open}
					<X size={18} aria-hidden="true" />
					<span class="sr-only">Close menu</span>
				{:else}
					<span class="grid grid-rows-3 gap-[3px] w-5" aria-hidden="true">
						<span class="h-[2px] bg-current block"></span>
						<span class="h-[2px] bg-current block"></span>
						<span class="h-[2px] bg-current block"></span>
					</span>
					<span class="sr-only">Open menu</span>
				{/if}
			</button>
		</div>
	</div>
</header>

<MobileMenu bind:open />