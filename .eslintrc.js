module.exports = {
    extends: [require.resolve('arui-presets-lint/eslint'), 'plugin:react/jsx-runtime', 'next/core-web-vitals', 'prettier'],
    parserOptions: {
        project: ['./tsconfig.eslint.json'],
    },
    rules: {
        'import/no-default-export': 'error',
        indent: 'off',
        '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^action' }],
        'no-param-reassign': [
            'error',
            {
                props: true,
                ignorePropertyModificationsFor: ['state'],
            },
        ],
        '@typescript-eslint/naming-convention': 'off',
        '@typescript-eslint/array-type': 'off',
    }
};
