# eslint-config-react

> Shareable [ESLint](https://eslint.org/) config.

## Usage

This package needs eslint-config-rkallan

And has the follow packages as peer dependacy

-   eslint
-   eslint-config-prettier
-   eslint-config-rkallan
-   eslint-plugin-jsx-a11y
-   eslint-plugin-mdx
-   eslint-plugin-prettier
-   eslint-plugin-react-hooks
-   object.assign
-   react

**Install**:

```bash
npm install --save-dev eslint-config-rkallan eslint-config-react-rkallan
```

**Usage in `.eslintrc.js`**:

```js
module.exports = {
    extends: ["rkallan", "react-rkallan"],
};
```

run `npx sort-package-json` to sort package.json
