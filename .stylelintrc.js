module.exports = {
    extends: [
        'stylelint-config-standard',
        'stylelint-config-rational-order',
    ],
    plugins: [
        'stylelint-scss',
        'stylelint-order',
        'stylelint-config-rational-order/plugin',
        'stylelint-declaration-block-no-ignored-properties',
        'stylelint-use-nesting',
    ],
    rules: {
        'scss/at-rule-no-unknown': true,
        'order/order': [
            'custom-properties',
            'dollar-variables',
            'declarations',
            'at-rules',
            'rules',
        ],
        'order/properties-order': [],
        'plugin/rational-order': [
            true,
            {
                'border-in-box-model': false,
                'empty-line-between-groups': false,
            },
        ],
        'plugin/declaration-block-no-ignored-properties': true,
        'csstools/use-nesting': 'always',

        'color-no-invalid-hex': true,

        'font-family-no-duplicate-names': true,
        'font-family-no-missing-generic-family-keyword': true,

        'function-calc-no-invalid': true,
        'function-calc-no-unspaced-operator': true,
        'function-linear-gradient-no-nonstandard-direction': true,

        'string-no-newline': true,

        'unit-no-unknown': true,

        'property-no-unknown': [
            true,
            {
                checkPrefixed: true,
            },
        ],

        'keyframe-declaration-no-important': true,

        'declaration-block-no-duplicate-properties': [
            true,
            {
                ignore: ['consecutive-duplicates-with-different-values'],
            },
        ],
        'declaration-block-no-shorthand-property-overrides': true,

        'block-no-empty': true,

        'selector-pseudo-class-no-unknown': true,
        'selector-pseudo-element-no-unknown': [
            true,
            {
                ignorePseudoElements: ['v-deep'],
            },
        ],
        'selector-type-no-unknown': true,

        'media-feature-name-no-unknown': true,

        'at-rule-no-unknown': null,

        'comment-no-empty': true,

        'no-descending-specificity': null,
        'no-duplicate-at-import-rules': true,
        'no-duplicate-selectors': true,
        'no-empty-source': true,
        'no-extra-semicolons': true,
        'no-invalid-double-slash-comments': true,

        'alpha-value-notation': 'number',

        'hue-degree-notation': 'angle',

        'color-function-notation': 'legacy',
        'color-named': [
            'never',
            {
                ignore: ['inside-function'],
            },
        ],

        'length-zero-no-unit': [
            true,
            {
                ignore: ['custom-properties'],
            },
        ],

        'font-weight-notation': 'numeric',

        'shorthand-property-no-redundant-values': true,

        'value-no-vendor-prefix': true,

        'property-no-vendor-prefix': true,

        'declaration-no-important': true,
        'declaration-property-unit-allowed-list': [
            {
                'line-height': ['', 'px'],
            },
        ],

        'declaration-block-single-line-max-declarations': 0,

        'selector-max-compound-selectors': 3,
        'selector-max-empty-lines': 0,
        'selector-max-id': 0,
        'selector-max-type': 1,
        'selector-max-universal': 1,
        'selector-no-vendor-prefix': true,
        'selector-pseudo-element-colon-notation': 'double',

        'media-feature-name-no-vendor-prefix': true,

        'at-rule-no-vendor-prefix': true,

        'no-unknown-animations': null,

        'color-hex-case': 'lower',
        'color-hex-length': 'long',

        'font-family-name-quotes': 'always-where-recommended',

        'function-comma-newline-after': 'always-multi-line',
        'function-comma-newline-before': 'never-multi-line',
        'function-comma-space-after': 'always-single-line',
        'function-comma-space-before': 'never',
        'function-max-empty-lines': 0,
        'function-name-case': 'lower',
        'function-parentheses-newline-inside': 'always-multi-line',
        'function-parentheses-space-inside': 'never-single-line',
        'function-url-quotes': 'always',
        'function-whitespace-after': 'always',

        'number-leading-zero': 'always',
        'number-no-trailing-zeros': true,

        'string-quotes': 'double',

        'unit-case': 'lower',

        'value-keyword-case': [
            'lower',
            {
                ignoreKeywords: ['/.*Fedra.*/'],
            },
        ],

        'value-list-comma-newline-after': 'always-multi-line',
        'value-list-comma-newline-before': 'never-multi-line',
        'value-list-comma-space-after': 'always-single-line',
        'value-list-comma-space-before': 'never',
        'value-list-max-empty-lines': 0,

        'property-case': 'lower',

        'declaration-bang-space-after': 'never',
        'declaration-bang-space-before': 'always',
        'declaration-colon-newline-after': 'always-multi-line',
        'declaration-colon-space-after': 'always-single-line',
        'declaration-colon-space-before': 'never',
        'declaration-empty-line-before': [
            'always',
            {
                except: [
                    'after-comment',
                    'after-declaration',
                    'first-nested',
                ],
            },
        ],

        'declaration-block-semicolon-newline-after': 'always',
        'declaration-block-semicolon-newline-before': 'never-multi-line',
        'declaration-block-semicolon-space-after': 'always-single-line',
        'declaration-block-semicolon-space-before': 'never',
        'declaration-block-trailing-semicolon': 'always',

        'block-closing-brace-empty-line-before': 'never',
        'block-closing-brace-newline-after': 'always',
        'block-closing-brace-newline-before': 'always-multi-line',
        'block-closing-brace-space-after': 'always-single-line',
        'block-closing-brace-space-before': 'always-single-line',
        'block-opening-brace-newline-after': 'always',
        'block-opening-brace-space-after': 'always-single-line',
        'block-opening-brace-space-before': 'always',

        'selector-attribute-brackets-space-inside': 'never',
        'selector-attribute-operator-space-after': 'never',
        'selector-attribute-operator-space-before': 'never',
        'selector-attribute-quotes': 'always',
        'selector-combinator-space-after': 'always',
        'selector-combinator-space-before': 'always',
        'selector-descendant-combinator-no-non-space': true,
        'selector-pseudo-class-case': 'lower',
        'selector-pseudo-class-parentheses-space-inside': 'never',
        'selector-pseudo-element-case': 'lower',
        'selector-type-case': 'lower',

        'selector-list-comma-newline-after': 'always',
        'selector-list-comma-newline-before': 'never-multi-line',
        'selector-list-comma-space-after': 'always-single-line',
        'selector-list-comma-space-before': 'never',

        'rule-empty-line-before': [
            'always',
            {
                except: ['first-nested'],
                ignore: ['after-comment'],
            },
        ],

        'media-feature-colon-space-after': 'always',
        'media-feature-colon-space-before': 'never',
        'media-feature-name-case': 'lower',
        'media-feature-parentheses-space-inside': 'never',
        'media-feature-range-operator-space-after': 'always',
        'media-feature-range-operator-space-before': 'always',

        'media-query-list-comma-newline-after': 'always-multi-line',
        'media-query-list-comma-newline-before': 'never-multi-line',
        'media-query-list-comma-space-after': 'always-single-line',
        'media-query-list-comma-space-before': 'never-single-line',

        'at-rule-empty-line-before': [
            'always',
            {
                except: [
                    'first-nested',
                    'blockless-after-blockless',
                ],
                ignore: ['after-comment'],
            },
        ],
        'at-rule-name-case': 'lower',
        'at-rule-name-space-after': 'always',
        'at-rule-semicolon-newline-after': 'always',
        'at-rule-semicolon-space-before': 'never',

        'comment-whitespace-inside': 'always',

        'indentation': 4,
        'max-empty-lines': 1,
        'max-line-length': [
            100,
            {
                severity: 'warning',
            },
        ],
        'no-eol-whitespace': true,
        'no-missing-end-of-source-newline': true,
        'no-empty-first-line': true,
        'unicode-bom': 'never',
    },
};
