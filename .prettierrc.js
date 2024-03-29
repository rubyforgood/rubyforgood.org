module.exports = {
  tabWidth: 2,
  useTabs: false,
  semi: false,
  bracketSpacing: true,
  proseWrap: 'always',
  htmlWhitespaceSensitivity: 'css',
  overrides: [
    {
      files: '**/*.js',
      excludeFiles: '**/*.min.js',
      options: {
        singleQuote: true,
        trailingComma: 'none',
        semi: false
      }
    }
  ]
}
