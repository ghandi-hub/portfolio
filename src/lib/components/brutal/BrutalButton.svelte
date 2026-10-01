<script lang="ts">
	let {
		href = '#',
		variant = 'default',
		type = 'link',
		onclick,
		external = false,
		ariaLabel,
		children
	}: {
		href?: string;
		variant?: 'default' | 'accent' | 'ghost';
		type?: 'link' | 'button';
		onclick?: () => void;
		external?: boolean;
		ariaLabel?: string;
		children?: import('svelte').Snippet;
	} = $props();

	const variantClass = $derived(
		{
			default: '',
			accent: 'btn-brutal-accent',
			ghost: 'btn-brutal-ghost'
		}[variant]
	);
</script>

{#if type === 'button'}
	<button
		type="button"
		class="btn-brutal {variantClass}"
		onclick={onclick}
		aria-label={ariaLabel}
	>
		{@render children?.()}
	</button>
{:else}
	<a
		{href}
		class="btn-brutal {variantClass}"
		class:external-link={external}
		aria-label={ariaLabel}
		target={external ? '_blank' : undefined}
		rel={external ? 'noopener noreferrer' : undefined}
		onclick={onclick}
	>
		{@render children?.()}
		{#if external}
			<span aria-hidden="true">↗</span>
		{/if}
	</a>
{/if}