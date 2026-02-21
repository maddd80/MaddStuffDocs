import { defineConfig } from 'vitepress'
import tabsPlugin from "@red-asuka/vitepress-plugin-tabs";
import MarkdownIt from 'markdown-it';
// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/",
  title: "Madd's Stuff",
  description: "Official documentation for MaddStuff RedM resources, including installation guides, configuration references, and API documentation.",
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "/logo.svg",
      },
    ],
  ],
  themeConfig: {
    logo: '/logo.svg',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Docs', link: '/getting-started' },
      { text: 'Changelog', link: '/changelog' },
      {
        text: "Store",
        link: "https://maddstuff.tebex.io",
        target: "_target",
        rel: "external",
      },
    ],
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: "Search documentation...",
          },
        },
      },
    },
    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Introduction', link: '/getting-started' },
          { text: 'Release Notes', link: '/changelog' }
        ]
      },
      {
        text: 'Scripts',
        collapsed: true,

        items: [
          {
            text: 'Interaction System',
            collapsed: true,
            items: [
              { text: 'Overview', link: '/scripts/interaction/' },
              { text: 'Installation', link: '/scripts/interaction/installation' },
              { text: 'Configuration', link: '/scripts/interaction/configuration' },
              { text: 'API', link: '/scripts/interaction/api' },
              { text: 'Changelog', link: '/scripts/interaction/changelog' }
            ]
          },
          // Repeat for other scripts
        ]
      }
    ],

    socialLinks: [
      { icon: 'discord', link: 'https://discord.gg/BPB42dufXE' },
      { icon: 'github', link: 'https://github.com/maddd80' }
    ],
    lastUpdated: {
      text: 'Last Updated',
      formatOptions: {
        dateStyle: 'medium',
        timeStyle: 'short'
      }
    },

  },
  markdown: {
    config: (md) => {
      tabsPlugin(md as unknown as MarkdownIt)
    }
  }
})
