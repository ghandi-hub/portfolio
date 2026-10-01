<script lang="ts">
	import { onMount } from 'svelte';

	let {
		items,
		speed = 28
	}: {
		items: string[];
		speed?: number;
	} = $props();

	let trackEl: HTMLDivElement;

	onMount(() => {
		trackEl?.style.setProperty('animation-duration', `${speed}s`);
	});

	// Duplikasi untuk loop mulus
	const doubled = $derived([...items, ...items]);
</script>

<div
	class="border-y-2 border-[var(--color-line)] bg-[var(--color-fg)] text-[var(--color-bg)] overflow-hidden py-2.5"
	aria-hidden="true"
>
	<div class="marquee-track" bind:this={trackEl}>
		{#each doubled as item, i (i)}
			<span
				class="mono-label px-4 whitespace-nowrap"
				style="font-size:12px; letter-spacing:0.16em;"
			>
				{item}
				<span class="text-[var(--color-accent)] px-2">/</span>
			</span>
		{/each}
	</div>
</div>

<style>
	@media (prefers-reduced-motion: reduce) {
		.marquee-track {
			animation: none;
			transform: none;
		}
	}
</style>