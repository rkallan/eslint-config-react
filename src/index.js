module.exports = {
    parserOptions: {
        ecmaVersion: 11,
        sourceType: "module",
        ecmaFeatures: {
            jsx: true,
            globalReturn: true,
        },
    },
    settings: {
        react: {
            pragma: "React",
            version: "detect",
        },
    },
    extends: ["./react", "./react-a11y", "./react-hooks"],
    plugins: ["react", "react-hooks", "jsx-a11y", "prettier"],
    overrides: [
        {
            files: ["*.mdx"],
            extends: ["plugin:mdx/recommended"],
            rules: {
                "react/jsx-indent": 0,
            },
        },
    ],
};
