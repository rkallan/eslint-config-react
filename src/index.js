module.exports = {
    parserOptions: {
        ecmaVersion: "latest",
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
};
