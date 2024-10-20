import { increment } from "../../../code"
import { Count, Step, Window } from "../../../types"
import { computePrimes } from "../../rational"
import { abs } from "../../typedOperations"
import { Decimal } from "../decimal"
import { Map, SimpleMapOptions } from "./types"

const computeSimpleMap = <T extends Window>(
    options: SimpleMapOptions<T>,
): Map<T & { integer: true }> => {
    const { ed, window, primeLimit } = options

    const stepSize: number = window ** (1 / ed)

    const primes = computePrimes(primeLimit)
    const maxPrimeIndex = primes.indexOf(primeLimit)

    let simpleMap: Map<T & { integer: true }> = []
    for (
        let primeIndex = 0;
        primeIndex <= maxPrimeIndex;
        primeIndex = increment(primeIndex)
    ) {
        const prime = primes[primeIndex]

        let previousApproximation = undefined
        let currentApproximation = undefined
        let stepCount = 0 as Decimal<{ integer: true }> & Count<Step<T>>
        while (true) {
            previousApproximation = currentApproximation
            currentApproximation = stepSize ** stepCount

            if (currentApproximation > prime) {
                const currentDiff = abs(currentApproximation - prime)
                const previousDiff = previousApproximation
                    ? abs(previousApproximation - prime)
                    : Infinity

                if (currentDiff < previousDiff) {
                    simpleMap.push(stepCount)
                } else {
                    simpleMap.push(
                        (stepCount - 1) as Decimal<{ integer: true }> &
                            Count<Step<T>>,
                    )
                }
                break
            }

            stepCount = increment(stepCount)
        }
    }

    return simpleMap
}

export { computeSimpleMap }
