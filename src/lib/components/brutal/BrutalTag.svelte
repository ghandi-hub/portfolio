<script lang="ts">
	let {
		label,
		accent = false
	}: {
		label: string;
		accent?: boolean;
	} = $props();
</script>

<span class="tag-brutal" class:tag-brutal-accent={accent}>{label}</span>