<script lang="ts">
	import { onMount } from 'svelte';

	/**
	 * HoverPreview — desktop-only enhancement (wrapper).
	 * Menampilkan panel label yang mengikuti kursor saat konten di-hover.
	 * Tidak aktif pada perangkat sentuh atau saat prefers-reduced-motion.
	 */
	let {
		label = '',
		meta = '',
		enabled = true,
		children
	}: {
		label?: string;
		meta?: string;
		enabled?: boolean;
		children?: import('svelte').Snippet;
	} = $props();

	let el: HTMLDivElement;
	let x = $state(0);
	let y = $state(0);
	let active = $state(false);
	let canHover = $state(false);

	onMount(() => {
		const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
		const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		canHover = fine && !reduced && enabled;
	});

	function onMove(e: MouseEvent) {
		if (!canHover) return;
		const rect = el.getBoundingClientRect();
		x = e.clientX - rect.left;
		y = e.clientY - rect.top;
	}
</script>

<div
	class="relative"
	bind:this={el}
	role="presentation"
	onmousemove={onMove}
	onmouseenter={() => canHover && (active = true)}
	onmouseleave={() => (active = false)}
>
	{@render children?.()}

	{#if canHover}
		<div
			class="pointer-events-none absolute z-30 hidden lg:block"
			class:opacity-0={!active}
			class:opacity-100={active}
			style="left:{x}px; top:{y}px; transform:translate(-50%,-115%); transition:opacity 160ms ease;"
			aria-hidden="true"
		>
			<div class="brutal-paper shadow-brutal px-3 py-2 whitespace-nowrap">
				<span class="mono-label">{label}</span>
				{#if meta}
					<span class="mono-label text-[var(--color-accent)] ml-2">{meta}</span>
				{/if}
			</div>
		</div>
	{/if}
</div>