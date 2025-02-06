export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({
    'assets': 'assets',
    'downloads': 'downloads',
    'favicon': 'favicon',
    'font': 'font',
    'images': 'images',
    'img': 'img',
  });
  eleventyConfig.addGlobalData('site_title', 'The Sales Rebellion');
  eleventyConfig.setIncludesDirectory('_includes');
  eleventyConfig.setLayoutsDirectory('_layouts');
};
