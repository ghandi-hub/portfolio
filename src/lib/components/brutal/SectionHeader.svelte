<script lang="ts">
	let {
		index,
		title,
		note
	}: {
		index: string;
		title: string;
		note?: string;
	} = $props();
</script>

<header class="rule pt-4 pb-5 md:pt-5 md:pb-6">
	<div class="flex items-baseline justify-between gap-4">
		<span class="mono-label text-[var(--color-muted)]">
			{index} / {title}
		</span>
		{#if note}
			<span class="mono-label text-[var(--color-muted)] hidden sm:inline">{note}</span>
		{/if}
	</div>
	<h2 class="display-section mt-3">{title}</h2>
</header>