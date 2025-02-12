import { EleventyRenderPlugin } from "@11ty/eleventy";
import eleventyNavigationPlugin from "@11ty/eleventy-navigation";
import { default as MarkDownIt } from 'markdown-it';

export default function (eleventyConfig) {
  const md = new MarkDownIt({ html: true });

  eleventyConfig.addPassthroughCopy({
    'assets': 'assets',
    'downloads': 'downloads',
    'favicon': 'favicon',
    'font': 'font',
    'img': 'img',
  });
  eleventyConfig.addGlobalData('site_title', 'The Sales Rebellion');
  eleventyConfig.setIncludesDirectory('_includes');
  eleventyConfig.setLayoutsDirectory('_layouts');
  eleventyConfig.addPlugin(EleventyRenderPlugin);
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addFilter('markdownify', (content) => md.render(content));
};
