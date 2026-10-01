<script lang="ts">
	import { site } from '$lib/data/site';
</script>

<section id="about" aria-labelledby="about-heading">
	<div class="shell py-14 md:py-20">
		<header class="rule pt-4 pb-6">
			<p class="mono-label text-[var(--color-muted)]">05 / ABOUT</p>
			<h2 id="about-heading" class="display-section mt-3">ABOUT ME</h2>
		</header>

		<div class="grid gap-8 lg:grid-cols-12 lg:gap-12">
			<div class="lg:col-span-7">
				<p class="text-xl md:text-2xl leading-snug font-medium">
					I enjoy building software that connects people, services and systems.
				</p>
				<p class="mt-5 text-base md:text-lg text-[var(--color-muted)] max-w-2xl">
					My interests sit between frontend, backend and integration engineering. Most of my
					work involves making distinct systems exchange data reliably — validating,
					transforming and routing messages between APIs that were never designed to talk to
					each other.
				</p>
				<p class="mt-5 text-base md:text-lg text-[var(--color-muted)] max-w-2xl">
					Outside of client work I run a self-hosted lab to experiment with containerization,
					storage and deployment — a sandbox where the ideas in my projects get tested before
					they ship.
				</p>
			</div>

			<aside class="lg:col-span-5">
				<div class="brutal-box-strong shadow-brutal">
					<div
						class="border-b-2 border-[var(--color-line)] bg-[var(--color-fg)] text-[var(--color-bg)] px-4 py-2.5"
					>
						<h3 class="mono-label">PROFILE</h3>
					</div>
					<dl class="divide-y-2 divide-[var(--color-line)]">
						<div class="px-4 py-3">
							<dt class="mono-label text-[var(--color-muted)]">ROLE</dt>
							<dd class="mt-1 font-medium">{site.role}</dd>
						</div>
						<div class="px-4 py-3">
							<dt class="mono-label text-[var(--color-muted)]">CURRENT</dt>
							<dd class="mt-1 font-medium">Back End Developer @ PT. Bank Negara Indonesia (Persero) Tbk.</dd>
						</div>
						<div class="px-4 py-3">
							<dt class="mono-label text-[var(--color-muted)]">EDUCATION</dt>
							<dd class="mt-1 font-medium">S.Kom in Informatics, STT Wastukancana (GPA 3.94 / 4.00)</dd>
						</div>
						<div class="px-4 py-3">
							<dt class="mono-label text-[var(--color-muted)]">BASE</dt>
							<dd class="mt-1 font-medium">Purwakarta / Jakarta, Indonesia</dd>
						</div>
						<div class="px-4 py-3">
							<dt class="mono-label text-[var(--color-muted)]">FOCUS</dt>
							<dd class="mt-1 font-medium">Backend Engineering · API & System Integration</dd>
						</div>
					</dl>
				</div>
			</aside>
		</div>
	</div>
</section>