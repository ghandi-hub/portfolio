const site = 'https://ghandi.dev';

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function GET({ url }) {
	const pages = ['', '#work', '#engineering', '#experience', '#stack', '#about', '#contact'];
	const projects = ['cvforge', 'invitation-web-app', 'ghandi-lab', '9router-model-gateway'];

	const urls = [
		...pages.map(
			(p) => `  <url>
    <loc>${site}/${p}</loc>
    <changefreq>monthly</changefreq>
    <priority>${p === '' ? '1.0' : '0.8'}</priority>
  </url>`
		),
		...projects.map(
			(slug) => `  <url>
    <loc>${site}/projects/${slug}</loc>
    <changefreq>yearly</changefreq>
    <priority>0.6</priority>
  </url>`
		)
	];

	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>`;

	return new Response(xml, {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': 'max-age=0, s-maxage=3600'
		}
	});
}