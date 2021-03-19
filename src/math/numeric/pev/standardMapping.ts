import {increment} from "../../../code"
import {Step, Window} from "../../../types"
import {computePrimes} from "../../rational"
import {abs} from "../../typedOperations"
import {Exponent} from "../../types"
import {Decimal} from "../decimal"
import {Mapping, StandardMappingOptions} from "./types"

const computeStandardMapping = <T extends Window>(options: StandardMappingOptions<T>): Mapping<T & {integer: true}> => {
    const {ed, window, primeLimit} = options

    const stepSize: number = window ** (1 / ed)

    const primes = computePrimes(primeLimit)
    const maxPrimeIndex = primes.indexOf(primeLimit)

    let standardMapping: Mapping<T & {integer: true}> = []
    for (let primeIndex = 0; primeIndex <= maxPrimeIndex; primeIndex = increment(primeIndex)) {
        const prime = primes[primeIndex]

        let previousApproximation = undefined
        let currentApproximation = undefined
        let primeExponent = 0 as Decimal<{integer: true}> & Exponent<Step<T>>
        while (true) {
            previousApproximation = currentApproximation
            currentApproximation = stepSize ** primeExponent

            if (currentApproximation > prime) {
                const currentDiff = abs(currentApproximation - prime)
                const previousDiff = previousApproximation ? abs(previousApproximation - prime) : Infinity

                if (currentDiff < previousDiff) {
                    standardMapping.push(primeExponent)
                } else {
                    standardMapping.push(primeExponent - 1 as Decimal<{integer: true}> & Exponent<Step<T>>)
                }
                break
            }

            primeExponent = increment(primeExponent)
        }
    }

    return standardMapping
}

export {
    computeStandardMapping,
}
