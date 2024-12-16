import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "EventBus for Unity",
  tagline: "EventBus for unity",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://kiwistudios.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/EventBusForUnity-docs/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "KiwiStudios",
  projectName: "EventBusForUnity-docs",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "throw",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          routeBasePath: "/",
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
        sitemap: {
          changefreq: "weekly", // Defines the sitemap update frequency
          priority: 0.5, // Default priority for all pages
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: "img/docusaurus-social-card.jpg",
    metadata: [
      {
        name: "description",
        content:
          "EventBus for Unity - Simple and efficient event handling system for Unity developers.",
      },
      {
        name: "keywords",
        content:
          "Unity, EventBus, Unity EventBus, Unity Programming, Unity Development",
      },
    ],
    navbar: {
      title: "EventBus for Unity",
      logo: {
        alt: "My Site Logo",
        src: "img/favicon.ico",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "documentationSidebar",
          position: "left",
          label: "Documentation",
        },
        {
          href: "https://discord.gg/dqN3csvysQ",
          label: "Discord",
          position: "right",
        },
        {
          href: "https://github.com/KiwiStudios/EventBusForUnity-docs",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [],
      copyright: `Built with Docusaurus`,
    },
    prism: {
      theme: prismThemes.oneDark,
      darkTheme: prismThemes.oneDark,
      additionalLanguages: ["csharp"],
    },
    colorMode: {
      defaultMode: "dark",
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
  } satisfies Preset.ThemeConfig,

  headTags: [
    {
      tagName: "meta",
      attributes: {
        name: "description",
        content:
          "EventBus for Unity - A simple and efficient event handling system for Unity developers.",
      },
    },
    {
      tagName: "meta",
      attributes: {
        name: "keywords",
        content:
          "Unity, EventBus, Unity EventBus, Unity Programming, Unity Development",
      },
    },

    {
      tagName: "meta",
      attributes: {
        property: "og:title",
        content: "EventBus for Unity - Simple and Efficient",
      },
    },
    {
      tagName: "meta",
      attributes: {
        property: "og:description",
        content:
          "EventBus for Unity - A simple and efficient event handling system for Unity developers.",
      },
    },
    {
      tagName: "meta",
      attributes: {
        property: "og:url",
        content: "https://kiwistudios.github.io/EventBusForUnity-docs/",
      },
    },

    // Robots meta tag for SEO crawling
    {
      tagName: "meta",
      attributes: {
        name: "robots",
        content: "index,follow",
      },
    },
  ],
};

export default config;
