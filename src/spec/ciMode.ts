const CI_MODE: boolean = !!(process.env && process.env.CI) || (process.argv && process.argv[2] === "--ci=true")

export {
    CI_MODE,
}
