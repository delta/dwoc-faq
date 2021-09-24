const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "dwoc guides",
  tagline: "Delta winter of code",
  url: " https://delta.github.io",
  baseUrl: "/delta-faq/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "delta", // Usually your GitHub org/user name.
  projectName: "dwoc-faq", // Usually your repo name.

  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/delta/dwoc-faq",
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "DWoC Guides",
        logo: {
          alt: "dwoc Logo",
          src: "img/logo.png",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Guides",
          },
          {
            href: "https://dwoc.io",
            label: "DWoC",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Guides",
            items: [
              {
                label: "Student",
                to: "/docs/intro",
              },
              {
                label: "Mentor",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "DWoc",
                href: "https://dwoc.io/",
              },
              {
                label: "Discord",
                href: "https://discord.gg/3w4zXww73B",
              },
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/company/delta-winter-of-code/",
              },
            ],
          },
          {
            title: "Delta Force",
            items: [
              {
                label: "delta",
                href: "https://delta.nitt.edu/",
              },
              {
                label: "GitHub",
                href: "https://github.com/delta",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} DWoC. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};
