const jekyllEnvironment = process.env.JEKYLL_ENV || 'development'

module.exports = {
  plugins: [
    require('postcss-custom-properties')({}),
    require('postcss-nested'),
    require('autoprefixer'),
    ...(jekyllEnvironment != 'development'
      ? [
          require('@fullhuman/postcss-purgecss')({
            content: ['!(_site|node_modules)/**/*.+(html|js|md)', '*.html'],
            whitelistPatternsChildren: [/highlight/],
            defaultExtractor: (content) =>
              content.match(/[\w-/:]+(?<!:)/g) || []
          }),
          require('cssnano')({ preset: 'default' })
        ]
      : [])
  ]
}
