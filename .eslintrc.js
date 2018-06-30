module.exports =
{
    "env": {
        "browser": true,
        "es6": true,
        "node": true,
    },
    "extends": ["airbnb" ],
    "parser": "babel-eslint",

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
        "linebreak-style": 0,
        "react/prefer-stateless-function": [0, { "ignorePureComponents": false }],
        "react/prop-types": 0,
        "max-len": ["error", { "code": 150, "ignoreUrls": true }],
        "no-nested-ternary": 0,
        "no-underscore-dangle": 0,
        "label-has-for": 0,
        "jsx-a11y/label-has-for": [ 2, { "required": { "every": [ "id" ] } }],
        "func-names": 0
    }
};
