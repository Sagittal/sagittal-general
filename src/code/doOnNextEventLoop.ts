import { Ms } from "../types"

const doOnNextEventLoop = async (
    fn: (...args: unknown[]) => unknown,
    timeout: Ms = 0 as Ms,
): Promise<void> => {
    return new Promise((resolve: () => void): void => {
        setTimeout((): void => {
            ;(async (): Promise<void> => {
                await fn()
                resolve()
            })().catch(() => {
                resolve()
            })
        }, timeout)
    })
}

export { doOnNextEventLoop }
