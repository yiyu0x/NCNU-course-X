module.exports = {
    env: {
        browser: true,
        es6: true
    },
    extends: ['eslint:recommended'],
    parserOptions: {
        // ecmaVersion: 2016,
        sourceType: 'module',
        parser: 'babel-eslint',
        ecmaVersion: 6
    },
    rules: {
        indent: ['error', 4],
        'linebreak-style': ['error', 'unix'],
        quotes: ['error', 'single'],
        semi: ['error', 'always']
    },
    parser: 'babel-eslint'
};
