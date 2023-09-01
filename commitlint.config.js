module.exports = {
    extends: ['@commitlint/config-conventional'],
    "rules": {
        "subject-case": [
            2,
            "never",
            [
                "start-case",
                "pascal-case",
                "upper-case"
            ]
        ],
        "header-max-length": [
            2,
            "always",
            120
        ],
        "type-enum": [
            2,
            "always",
            [
                "build",
                "chore",
                "docs",
                "feat",
                "fix",
                "perf",
                "refactor",
                "revert",
                "style",
                "test"
            ]
        ]
    }
};
