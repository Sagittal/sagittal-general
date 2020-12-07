import {CI_MODE} from "./ciMode"

// TODO: Perhaps I should instead have alternate versions of all these files which live in src/spec and are exported
const onlyRunInCi = (): void => {
    if (!CI_MODE) {
        pending("slow test only run in CI")
    }
}

export {
    onlyRunInCi,
}
