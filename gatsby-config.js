const path = require('path')

const gatsbyPluginLayout = {
  resolve: 'gatsby-plugin-layout',
  options: {
    component: require.resolve('./src/layout/index.ts'),
  },
}

const gatsbyPluginAliasImports = {
  resolve: `gatsby-plugin-alias-imports`,
  options: {
    alias: {
      '@src': path.resolve(__dirname, 'src'),
      '@cmp': path.resolve(__dirname, 'src/components'),
      '@templates': path.resolve(__dirname, 'src/templates'),
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@cms': path.resolve(__dirname, 'src/cms'),
      '@layout': path.resolve(__dirname, 'src/layout/index.ts'),
      '@store': path.resolve(__dirname, 'src/store'),
      '@types': path.resolve(__dirname, 'src/types.ts'),
    },
    extensions: [`ts`, `tsx`],
  },
}

const imageAssets = {
  resolve: 'gatsby-source-filesystem',
  options: {
    name: 'images',
    path: `${__dirname}/static/images`,
  },
}

const soundAssets = {
  resolve: 'gatsby-source-filesystem',
  options: {
    name: 'sounds',
    path: `${__dirname}/static/sounds`,
  },
}

const gatsbySourceFileSystem = {
  imageAssets,
  soundAssets,
}

module.exports = {
  plugins: [
    'gatsby-plugin-react-helmet',
    gatsbyPluginLayout,
    gatsbyPluginAliasImports,
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    gatsbySourceFileSystem.imageAssets,
    gatsbySourceFileSystem.soundAssets,
    'gatsby-plugin-postcss',
    'gatsby-plugin-sass',
  ],
}
