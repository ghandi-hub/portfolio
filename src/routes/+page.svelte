<script lang="ts">
	import Hero from '$lib/components/home/Hero.svelte';
	import SelectedWork from '$lib/components/home/SelectedWork.svelte';
	import Engineering from '$lib/components/home/Engineering.svelte';
	import Stack from '$lib/components/home/Stack.svelte';
	import Experience from '$lib/components/home/Experience.svelte';
	import About from '$lib/components/home/About.svelte';
	import Contact from '$lib/components/home/Contact.svelte';
	import Marquee from '$lib/components/effects/Marquee.svelte';
	import { onMount } from 'svelte';
	import { stackMarquee } from '$lib/data/skills';

	onMount(() => {
		const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		if (reduced) return;

		const els = Array.from(document.querySelectorAll<HTMLElement>('.reveal'));
		if (!('IntersectionObserver' in window)) {
			els.forEach((el) => el.classList.add('is-visible'));
			return;
		}

		const io = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) {
						entry.target.classList.add('is-visible');
						io.unobserve(entry.target);
					}
				}
			},
			{ rootMargin: '0px 0px -8% 0px', threshold: 0.05 }
		);

		els.forEach((el) => io.observe(el));
		return () => io.disconnect();
	});
</script>

<svelte:head>
	<script type="application/ld+json">
		{JSON.stringify({
			'@context': 'https://schema.org',
			'@type': 'Person',
			name: 'Sonnya Ghandi',
			jobTitle: 'Software Engineer',
			description:
				'Software engineer building web applications, APIs and integrated systems.',
			address: { '@type': 'PostalAddress', addressCountry: 'ID' },
			knowsAbout: stackMarquee
		})}
	</script>
</svelte:head>

<Hero />

<SelectedWork />

<Marquee items={stackMarquee} />

<Engineering />

<Stack />

<Experience />

<About />

<Marquee items={stackMarquee} />

<Contact />