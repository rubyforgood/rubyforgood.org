# Ruby for Good New Website

## Welcome Contributors!

We love open source contributors! Feel free to take on open issues that are
marked `help wanted` or open new issues. Please comment on the issue to be
assigned to work on it as well as if you need more clarification. You can also
reach out to @meg-gutshall via the
[Ruby for Good Slack](https://rubyforgood.herokuapp.com/).

When submitting your pull request, please submit to the `dev` branch as this is
our working branch.

### Getting Started

Fork this repository and clone it down to your computer. Create a new branch
that describes what you're working on. Then, run `bundle install` and
`npm install` to make sure you have all the gems and packages you need.

We built this site using Jekyll and it's hosted via GitHub pages. We used Ruby
with Bundler on the initial build and have since added NodeJS. We've included
dot files that support both rbenv (.ruby-version) and asdf (.tool-versions) ruby
managers for your convenience.

#### Tool Versioning

- Ruby 2.7.1
- Bundler 2.1.4
- NodeJS 16.1.0
- NPM 7.22.0

### Useful Commands

To run the website locally, type `npm run test` in your terminal and navigate to
[http://127.0.0.1:4000/](http://127.0.0.1:4000/) to see the site in your
browser. A reload will be triggered every time you change the code in you
editor.

We have also implemented some tools that check the files for syntax issues and
autocorrect them whenever possible. These are called linters and they will
automatically check any files you have staged for a commit.

If you'd like to lint your code before you stage it, you can do so with the
following commands:

```bash
npm run lint:js     // Applies to JS files only
npm run lint:style  // Applies to CSS, Less, Sass, and SCSS files
npm run lint:text   // Applies to HTML and Markdown files
```

You will not be able to successfully commit your work until all errors are
cleared.

### Going Deeper

Below is some info on tools we've been using to build/maintain the site and
their configurations. It's a work in progress and will hopefully be cleaned up
or reorganized into a more readable format over time.

#### ESLint

[ESLint](https://eslint.org/): Find and fix problems in your JavaScript code.

We used the
[`eslint-plugin-unicorn`](https://github.com/sindresorhus/eslint-plugin-unicorn)
and
[`eslint-plugin-prettier`](https://github.com/prettier/eslint-plugin-prettier)
config extensions. It specifies a few ignorefiles in the `package.json` file.

#### Stylelint

[Stylelint](https://stylelint.io/): A mighty, modern linter that helps you avoid
errors and enforce conventions in your styles.

We used the
[`stylelint-config-sass-guidelines`](https://github.com/bjankord/stylelint-config-sass-guidelines)
(based on the [Sass Guidelines styleguide](https://sass-guidelin.es/)) and
[`stylelint-config-prettier`](https://github.com/prettier/stylelint-config-prettier)
config extensions.

#### Prettier

[Prettier](https://prettier.io/): An opinionated code formatter.

Prettier is run after ESLint and Stylelint. It has an ignorefile specified at
`.prettierignore`.

#### Husky

[Husky](https://typicode.github.io/husky/#/): Modern native git hooks made easy.

We can use it to lint your commit messages, run tests, lint code, etc... when
you commit or push. Husky supports all Git hooks.

Read this blog post about
[why husky has dropped conventional JS config](https://blog.typicode.com/husky-git-hooks-javascript-config/)
to learn more about how it works under the hood.

#### lint-staged

[lint-staged](https://github.com/okonet/lint-staged): Run linters on git staged
files.

We use this in conjunction with Husky to let it know which files to lint.
