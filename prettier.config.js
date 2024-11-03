module.exports = {
    tabWidth: 4,
    semi: false,
    overrides: [
        {
            files: ["*.js", "*.d.ts"],
            options: { parser: "ignore" },
        },
    ],
    trailingComma: "all",
    printWidth: 110,
}
