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
      '@cmp': path.resolve(__dirname, 'src/cmp'),
      '@templates': path.resolve(__dirname, 'src/templates'),
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@cms': path.resolve(__dirname, 'src/cms'),
      '@layout': path.resolve(__dirname, 'src/layout/index.ts'),
      '@store': path.resolve(__dirname, 'src/store'),
    },
    extensions: [`ts`, `tsx`],
  },
}

const gatsbySourceFileSystem = {
  resolve: 'gatsby-source-filesystem',
  options: {
    name: 'assets',
    path: `${__dirname}/static/images`,
  },
}

module.exports = {
  plugins: [
    'gatsby-plugin-react-helmet',
    gatsbyPluginLayout,
    gatsbyPluginAliasImports,
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    gatsbySourceFileSystem,
    'gatsby-plugin-postcss',
    'gatsby-plugin-sass',
  ],
}
