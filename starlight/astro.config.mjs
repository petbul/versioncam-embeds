// @ts-check
// A Starlight site with one page per version.cam snippet, to see which of
// them play. Served under /versioncam-embeds/starlight/ on GitHub Pages.
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	site: 'https://petbul.github.io',
	base: process.env.BASE_URL ?? '/',
	integrations: [
		starlight({
			title: 'versioncam embed test',
			// The element's script on every page, the way the README says to
			// load it on Starlight. VC_NO_GLOBAL=1 leaves it out.
			head: process.env.VC_NO_GLOBAL
				? []
				: [{ tag: 'script', attrs: { type: 'module', src: 'https://clips.version.cam/embed.js' } }],
			sidebar: [{ label: 'Snippets', items: [{ autogenerate: { directory: '.' } }] }],
		}),
	],
});
