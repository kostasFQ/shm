module.exports = 
{
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": ["eslint:recommended", "plugin:react/recommended" ],

    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "semi": ["error","always"],
        "arrow-body-style": ["error", "always"],
        "no-unused-vars": ["warning", { "vars": "all", "args": "after-used", "ignoreRestSiblings": false }]
    }
};