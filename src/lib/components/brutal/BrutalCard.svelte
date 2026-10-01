<script lang="ts">
	let {
		tone = 'default',
		strong = false,
		hoverLift = false,
		children
	}: {
		tone?: 'default' | 'paper' | 'fg';
		strong?: boolean;
		hoverLift?: boolean;
		children?: import('svelte').Snippet;
	} = $props();

	const toneClass = $derived(
		{
			default: 'brutal-box',
			paper: 'brutal-paper',
			fg: 'brutal-box bg-[#111] text-[#F5F1E8]'
		}[tone]
	);
</script>

<div
	class="{toneClass} {strong ? 'shadow-brutal' : ''} {hoverLift ? 'card-lift' : ''}"
>
	{@render children?.()}
</div>

<style>
	.card-lift {
		transition:
			transform 160ms ease,
			box-shadow 160ms ease;
	}

	@media (prefers-reduced-motion: no-preference) {
		.card-lift:hover {
			transform: translate(-2px, -2px);
			box-shadow: 8px 8px 0 #111;
		}
	}
</style>