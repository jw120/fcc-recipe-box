// React-scripts builds in a permissive eslint configuration. We provide a stricter version here to run manually

const indent = 2

module.exports = {

  parser: 'babel-eslint',
  extends: 'eslint:recommended',
  plugins: [
    'flowtype',
    'import',
    'react'
  ],
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      generators: true,
      experimentalObjectRestSpread: true
    }
  },
  rules: {

    // Choices for formatting
    'indent': ['error', indent, { SwitchCase: 1 }],
    'linebreak-style': ['error', 'unix'],
    'quotes': ['error', 'single', { avoidEscape: true }],
    'semi': ['error', 'never'],
    'no-trailing-spaces': 'error',
    'array-bracket-spacing': ['error', 'never'],
    'block-spacing': 'error',
    'brace-style': 'error',
    'camelcase': 'error',
    'comma-dangle': ['error', 'never'],
    'comma-spacing': ['error', { before: false, after: true }],
    'comma-style': ['error', 'last'],
    'eol-last': 'error',
    'func-call-spacing': ['error', 'never'],
    'jsx-quotes': ['error', 'prefer-single'],
    'key-spacing': 'error',
    'keyword-spacing': 'error',
    'no-lonely-if': 'error',
    'no-negated-condition': 'error',
    'no-unneeded-ternary': 'error',
    'no-whitespace-before-property': 'error',
    'object-curly-newline': ['error', { multiline: true }],
    'object-curly-spacing': ['error', 'always'],
    'semi-spacing': 'error',
    'space-infix-ops': 'error',
    'arrow-parens': 'error',
    'arrow-spacing': 'error',
    'no-confusing-arrow': 'error',
    'no-useless-constructor': 'error',
    'no-var': 'error',
    'object-shorthand': 'error',
    'prefer-const': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'rest-spread-spacing': ['error', 'never'],
    'prefer-arrow-callback': 'error',
    'template-curly-spacing': ['error', 'always'],
    'no-useless-escape': 'error',

    // Removed rules from recommended
    'no-console': 'off',

    // Extra rules beyond recommended
    'dot-location': ['error', 'property'], // put dot before property in multi-line object.property expression
    'dot-notation': 'error', // require dot notation instead of square brackets for objects
    'eqeqeq': 'error', // Always use ===
    'no-magic-numbers': ['error', { ignore: [0, 1] }], // Require numeric constants to be in declarations
    'no-extra-parens': 'error', // No unnecessary parens
    'no-param-reassign': 'error', // Don't change function parameters
    'no-return-assign': 'error', // Don't assign in return statements
    'no-unused-expressions': 'error', // No expressions that are not used
    'consistent-return': 'error', // All code branches have return or none do
    'curly': 'error', // Require curly braces in if etc
    'yoda': 'error', // Disallow conditionals that have the variable after the operator
    'default-case': 'error', // Switch much have default or a comment saying 'no default'

    // Flow-type rules
    'flowtype/boolean-style': ['error', 'boolean'],
    'flowtype/define-flow-type': 'error',
    'flowtype/delimiter-dangle': ['error', 'never'],
    'flowtype/generic-spacing': ['error', 'never'],
    'flowtype/no-weak-types': 'error',
    'flowtype/require-parameter-type': 'error',
    'flowtype/require-return-type': ['error', 'always', {
      annotateUndefined: 'never',
      excludeArrowFunctions: 'expressionsOnly'
    }],
    'flowtype/require-valid-file-annotation': 'error',
    'flowtype/semi': ['error', 'never'],
    'flowtype/space-after-type-colon': ['error', 'always'],
    'flowtype/space-before-generic-bracket': ['error', 'never'],
    'flowtype/space-before-type-colon': ['error', 'never'],
    'flowtype/type-id-match': ['error', '^[A-Z][a-zA-Z]+$'], // type names capitalized words
    'flowtype/union-intersection-spacing': ['error', 'always'],
    'flowtype/use-flow-type': 'error',
    'flowtype/valid-syntax': 'error',

    // Import plugin rules
    'import/default': 'error',
    'import/export': 'error',
    'import/imports-first': 'error',
    'import/named': 'error',
    'import/namespace': 'error',
    'import/newline-after-import': 'error',
    'import/no-amd': 'error',
    'import/no-duplicates': 'error',
    'import/no-extraneous-dependencies': 'error',
    'import/no-named-as-default': 'error',
    'import/no-named-as-default-member': 'error',
    'import/no-mutable-exports': 'error',
    'import/no-unresolved': ['error', { commonjs: true }],

    // React plugin rules
    'react/jsx-boolean-value': ['error', 'always'],
    'react/jsx-closing-bracket-location': 'error',
    'react/jsx-equals-spacing': ['error', 'never'],
    'react/jsx-curly-spacing': ['error', 'always'],
    'react/jsx-first-prop-new-line': ['error', 'multiline'],
    'react/jsx-handler-names': 'error',
    'react/jsx-indent-props': ['error', indent],
    'react/jsx-indent': ['error', indent],
    'react/jsx-key': 'error',
    // 'react/jsx-max-props-per-line': ['error', { maximum: 1 }],
    'react/jsx-no-duplicate-props': ['error', { ignoreCase: true }],
    'react/jsx-no-undef': 'error',
    'react/jsx-pascal-case': 'error',
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/no-deprecated': 'error',
    'react/no-direct-mutation-state': 'error',
    'react/no-is-mounted': 'error',
    'react/react-in-jsx-scope': 'error',
    'react/require-render-return': 'error',
    'react/self-closing-comp': 'error',
    'react/require-optimization': 'error',
    'react/prefer-stateless-function': 'error',
    'react/prefer-es6-class': 'error',
    'react/no-unknown-property': 'error',
    'react/no-set-state': 'error',
    'react/no-render-return-value': 'error',
    'react/no-multi-comp': 'error',
    'react/no-find-dom-node': 'error',
    'react/no-did-update-set-state': 'error',
    'react/no-did-mount-set-state': 'error',
    'react/no-danger': 'error',
    'react/no-danger-with-children': 'error',
    'react/jsx-wrap-multilines': 'error',
    'react/jsx-space-before-closing': 'error',
    'react/jsx-no-target-blank': 'error',
    'react/jsx-no-comment-textnodes': 'error'
  }
}
