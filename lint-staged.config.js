module.exports = {
    "*.{js,jsx,ts,tsx}": [
        "prettier --write",
        "eslint",
        "yarn test --findRelatedTests"
    ],
    "*.css": [
        "prettier --write",
        "stylelint"
    ],
    "*.json": [
        "prettier --write"
    ]
}
