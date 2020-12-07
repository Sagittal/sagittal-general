import {CI_MODE} from "./ciMode"

const onlyRunInCi = (): void => {
    if (!CI_MODE) {
        pending("slow test only run in CI")
    }
}

export {
    onlyRunInCi,
}
