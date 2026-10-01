<script lang="ts">
	import { site } from '$lib/data/site';
</script>

<section id="contact" aria-labelledby="contact-heading">
	<div class="shell py-16 md:py-24">
		<header class="rule pt-4 pb-8">
			<p class="mono-label text-[var(--color-muted)]">06 / CONTACT</p>
		</header>

		<!-- Desktop: poster-like. Mobile: vertical, tap-first -->
		<div class="grid gap-10 lg:grid-cols-12 lg:gap-12 items-end">
			<div class="lg:col-span-8">
				<h2 id="contact-heading" class="display-hero">
					LET&rsquo;S BUILD<br />SOMETHING.
				</h2>
				<p class="mt-6 text-lg md:text-xl text-[var(--color-muted)] max-w-xl">
					Have an idea, project, or opportunity?
				</p>

				<div class="flex flex-wrap gap-3 mt-8">
					<a href="mailto:{site.email}" class="btn-brutal btn-brutal-accent">
						EMAIL ME <span aria-hidden="true">→</span>
					</a>
					<a
						href={site.links.github}
						class="btn-brutal"
						target="_blank"
						rel="noopener noreferrer"
					>
						GITHUB <span aria-hidden="true">↗</span>
					</a>
					<a
						href={site.links.linkedin}
						class="btn-brutal"
						target="_blank"
						rel="noopener noreferrer"
					>
						LINKEDIN <span aria-hidden="true">↗</span>
					</a>
				</div>
			</div>

			<div class="lg:col-span-4">
				<div class="brutal-box-strong shadow-brutal p-5">
					<p class="mono-label text-[var(--color-muted)]">// DIRECT</p>
					<dl class="mt-4 space-y-4">
						<div>
							<dt class="mono-label text-[var(--color-muted)]">EMAIL</dt>
							<dd class="mt-1">
								<a class="link-arrow break-all" href="mailto:{site.email}">
									{site.email}
								</a>
							</dd>
						</div>
						<div>
							<dt class="mono-label text-[var(--color-muted)]">LOCATION</dt>
							<dd class="mt-1 font-medium">{site.location}</dd>
						</div>
						<div>
							<dt class="mono-label text-[var(--color-muted)]">RESPONSE</dt>
							<dd class="mt-1 font-medium">Within 1–2 business days</dd>
						</div>
					</dl>
				</div>
			</div>
		</div>
	</div>
</section>