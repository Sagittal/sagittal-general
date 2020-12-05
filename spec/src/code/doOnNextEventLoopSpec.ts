import {doOnNextEventLoop, Ms} from "../../../src"

describe("doOnNextEventLoop", (): void => {
    it("resolves on the next event loop", async (done: DoneFn): Promise<void> => {
        let work = 0
        const fn = (): void => {
            work = 1
        }

        doOnNextEventLoop(fn).then((): void => {
            expect(work).toBe(1)
            done()
        })

        expect(work).toBe(0)
    })

    it("works when the function passed in is itself async", async (done: DoneFn): Promise<void> => {
        let work = 0
        const fn = (): Promise<void> => {
            return new Promise((resolve: () => void): void => {
                setTimeout((): void => {
                    work = 1
                    resolve()
                }, 0)
            })
        }

        doOnNextEventLoop(fn).then((): void => {
            expect(work).toBe(1)
            done()
        })

        expect(work).toBe(0)
    })

    it("supports having a longer timeout", async (done: DoneFn): Promise<void> => {
        let work = 0
        const fn = (): void => {
            work = 1
        }

        doOnNextEventLoop(fn, 30 as Ms).then((): void => {
            expect(work).toBe(1)
        })

        setTimeout((): void => {
            expect(work).toBe(0)
        }, 20 as Ms)

        setTimeout((): void => {
            expect(work).toBe(1)
            done()
        }, 40 as Ms)

        expect(work).toBe(0)
    })
})
