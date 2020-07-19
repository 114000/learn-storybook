module.exports = {
  stories: ['../packages/**/*.stories.(js|mdx)'],
  addons: [
    '@storybook/addon-actions',        // get action data
    '@storybook/addon-links',          // link to other story

    '@storybook/addon-notes/register', // markdown 
    '@storybook/addon-knobs/register', // UI props
    '@storybook/addon-docs',           // mdx NOTE: stories option
  ],
};
