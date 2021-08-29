module.exports = {
  // Lint then format TypeScript and JavaScript files
  '**/*.(js|ts|tsx|js|md|json)': (filenames) => [
    `npx eslint --fix ${filenames.join(' ')}`,
    `npx prettier --write ${filenames.join(' ')}`,
  ],
}
