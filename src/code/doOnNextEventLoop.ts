import {Ms} from "../types"

const doOnNextEventLoop = async (fn: Function, timeout: Ms = 0 as Ms): Promise<void> => {
    return new Promise((resolve: () => void): void => {
        setTimeout(async (): Promise<void> => {
            await fn()
            resolve()
        }, timeout)
    })
}

export {
    doOnNextEventLoop,
}
