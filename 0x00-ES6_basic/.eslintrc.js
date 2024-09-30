module.exports = {
	env: {
		browser: false,
		es6: true,
		jest: true,
	},
	extends: ['semistandard', 'plugin:jest/all'],
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly',
	},
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: 'module',
	},
	plugins: ['jest'],
	rules: {
		'no-console': 'off',
		'no-shadow': 'off',
		'no-restricted-syntax': ['error', 'LabeledStatement', 'WithStatement'],
		semi: ['error', 'always'],
		indent: ['error', 2],
		'comma-dangle': ['error', 'never'],
		'space-before-function-paren': ['error', 'never'],
	},
	overrides: [
		{
			files: ['*.js'],
			excludedFiles: 'babel.config.js',
		},
	],
};
