# Ruby for Good New Website

## Welcome Contributors!

We love open source contributors! Feel free to take on open issues that are
marked `help wanted` or open new issues. Please comment on the issue to be
assigned to work on it as well as if you need more clarification. You can also
reach out to @meg-gutshall via the
[Ruby for Good Slack](https://rubyforgood.herokuapp.com/).

When submitting your pull request, please submit to the `main` branch.

## Getting Started

Fork this repository and clone it down to your computer. Create a new branch
that describes what you're working on. Then, run `bundle install` and
`npm install` to make sure you have all the gems and packages you need.

We built this site using Jekyll and it's hosted via GitHub pages. We used Ruby
with Bundler on the initial build and have since added NodeJS. We've included
dot files that support multiple version managers (.npmrc, .node-version,
.ruby-version, .tool-versions) for your convenience.

### Tool Versioning

- Ruby 2.7.4
- Bundler 2.1.4
- NodeJS 16.1.0
- npm 7.11.2

## Useful Commands

To run the website locally, type `npm run preview` in your terminal and navigate
to [http://127.0.0.1:4000/](http://127.0.0.1:4000/) to see the site in your
browser. A reload will be triggered every time you change the code in you
editor.

We have also implemented some tools that check the files for syntax issues and
autocorrect them whenever possible. These are called linters and they will
automatically check any files you have staged for a commit.

<!-- If you'd like to lint your code before you stage it, you can do so with the
following commands:

```bash
npm run lint        // Lints all files (i.e. corrects them syntactically for this codebase)
npm run lint:js     // Applies to JS files only
npm run lint:style  // Applies to CSS and SCSS files only
npm run lint:text   // Applies to Markdown files only
npm run prettier    // Formats and styles all files
``` -->

You will not be able to successfully commit your work until all errors are
cleared.

## Going Deeper

Please see our
[Ruby for Good Website Wiki](https://github.com/rubyforgood/rubyforgood.org/wiki)
to learn more about the project! Content will be continually added there. Also,
keep an eye out for project boards in the future!
