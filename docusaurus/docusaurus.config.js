// A Docusaurus 3 site with one page per version.cam snippet, to see which
// of them play. Served under /versioncam-embeds/docusaurus/ on GitHub Pages.

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'versioncam embed test',
  url: 'https://petbul.github.io',
  baseUrl: process.env.BASE_URL ?? '/',
  onBrokenLinks: 'throw',
  i18n: { defaultLocale: 'en', locales: ['en'] },
  // The element's script on every page, the way the README says to load
  // it on Docusaurus. VC_NO_GLOBAL=1 leaves it out, to test the inline
  // script on its own.
  scripts: process.env.VC_NO_GLOBAL
    ? []
    : [{ src: 'https://clips.version.cam/embed.js', type: 'module' }],
  presets: [
    [
      'classic',
      ({
        docs: { routeBasePath: '/', sidebarPath: './sidebars.js' },
        blog: false,
        theme: {},
      }),
    ],
  ],
  themeConfig: ({
    navbar: { title: 'versioncam embed test' },
  }),
};

export default config;
