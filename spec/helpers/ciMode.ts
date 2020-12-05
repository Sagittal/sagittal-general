const CI_MODE: boolean = !!process.env.CI || process.argv[2] === "--ci=true"

export {
    CI_MODE,
}
