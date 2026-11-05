import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import netlify from '@astrojs/netlify';

const OWN_HOSTS = new Set(['mmardan.com', 'www.mmardan.com']);

// Markdown/MDX links to other sites open in a new tab, safely (target + rel noopener noreferrer)
function rehypeExternalLinks() {
  const visit = (node) => {
    if (node.type === 'element' && node.tagName === 'a') {
      const href = String(node.properties?.href ?? '');
      if (/^https?:\/\//i.test(href) && !OWN_HOSTS.has(new URL(href).hostname)) {
        node.properties.target = '_blank';
        node.properties.rel = ['noopener', 'noreferrer'];
      }
    }
    node.children?.forEach(visit);
  };
  return (tree) => visit(tree);
}

export default defineConfig({
  site: 'https://your-domain.netlify.app',
  output: 'static',
  adapter: netlify(),
  integrations: [
    tailwind({ applyBaseStyles: false }),
    mdx(),
  ],
  markdown: {
    rehypePlugins: [rehypeExternalLinks],
    shikiConfig: {
      theme: 'github-dark',
      wrap: true,
    },
  },
});
