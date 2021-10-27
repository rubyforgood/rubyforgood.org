module.exports = function (api) {
  api.cache(true)

  const presets = [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
          browsers: 'last 2 versions'
        },
        bugfixes: true,
        useBuiltIns: 'entry',
        corejs: '3.17.2'
      }
    ]
  ]

  return {presets}
}
