import { Ms } from "../../types"

const adjustAsyncTimeoutForSpec = (timeout: Ms): void => {
    let originalJasmineTimeoutInterval: number
    beforeEach((): void => {
        originalJasmineTimeoutInterval = jasmine.DEFAULT_TIMEOUT_INTERVAL

        jasmine.DEFAULT_TIMEOUT_INTERVAL = timeout
    })

    afterEach((): void => {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = originalJasmineTimeoutInterval
    })
}

export { adjustAsyncTimeoutForSpec }
