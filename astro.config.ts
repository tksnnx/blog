import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import remarkLinkCard from "remark-link-card";
import remarkMath from "remark-math";
import rehypeRaw from "rehype-raw";
import rehypeExternalLinks from "rehype-external-links";
import rehypeKatex from "rehype-katex";
import { pluginLineNumbers } from "@expressive-code/plugin-line-numbers";
import rehypeExpressiveCode from "rehype-expressive-code";

export default defineConfig({
  integrations: [tailwind()],
  markdown: {
    remarkPlugins: [[remarkLinkCard, { shortenUrl: true }], remarkMath],
    rehypePlugins: [
      rehypeKatex,
      [
        rehypeExpressiveCode,
        {
          themes: ["laserwave"],
          plugins: [pluginLineNumbers()],
          defaultLocale: "ja-JP",
        },
      ],
      rehypeRaw,
      [
        rehypeExternalLinks,
        { target: "_blank", rel: ["noopener", "noreferrer"] },
      ],
    ],
    remarkRehype: {
      footnoteLabel: "脚注",
    },
    syntaxHighlight: false,
  },
});