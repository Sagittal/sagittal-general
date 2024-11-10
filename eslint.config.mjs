import eslint from "@eslint/js"
import importPlugin from "eslint-plugin-import"
import unusedImportsPlugin from "eslint-plugin-unused-imports"
import tseslint from "typescript-eslint"
import prettierConfig from "eslint-config-prettier"
import prettierPlugin from "eslint-plugin-prettier"

export default tseslint.config(
    {
        ignores: ["**/*.js", "**/*.d.ts", "dist/*", "eslint.config.mjs"],
    },
    eslint.configs.recommended,
    ...tseslint.configs.recommendedTypeChecked,
    prettierConfig,
    {
        languageOptions: {
            parserOptions: {
                projectService: true,
                tsconfigRootDir: import.meta.dirname,
            },
        },
    },
    {
        plugins: {
            import: importPlugin,
            "unused-imports": unusedImportsPlugin,
            prettier: prettierPlugin,
        },
        rules: {
            "no-control-regex": "off",
            "no-unused-vars": "off",
            "@typescript-eslint/no-unused-vars": "off",
            "no-loss-of-precision": "off",
            "no-prototype-builtins": "off",
            "ban-ts-comment": "off",
            "@typescript-eslint/ban-ts-comment": "off",
            "unused-imports/no-unused-imports": "error",
            "import/order": [
                "warn",
                {
                    groups: [
                        "builtin",
                        "external",
                        "internal",
                        "parent",
                        "sibling",
                        "index",
                        "object",
                        "type",
                    ],
                    alphabetize: { order: "asc", caseInsensitive: true },
                    "newlines-between": "never",
                },
            ],
            "@typescript-eslint/no-unnecessary-type-assertion": "error",
            "@typescript-eslint/no-inferrable-types": "error",
            "@typescript-eslint/typedef": [
                "error",
                {
                    variableDeclarationIgnoreFunction: true,
                    arrowParameter: false,
                    memberVariableDeclaration: false,
                    propertyDeclaration: false,
                    parameter: false,
                    arrayDestructuring: false,
                    objectDestructuring: false,
                    variableDeclaration: false,
                },
            ],
            "prettier/prettier": [
                "error",
                {
                    tabWidth: 4,
                    semi: false,
                    trailingComma: "all",
                    printWidth: 110,
                },
            ],
            // "no-warning-comments": [
            //     "warn",
            //     {
            //         terms: [" "],
            //         location: "anywhere",
            //     },
            // ],
        },
    },
)
