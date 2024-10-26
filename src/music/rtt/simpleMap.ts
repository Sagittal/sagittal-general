import { increment } from "../../code"
import { abs, computePrimes, NumericProperties, Prime } from "../../math"
import { Count } from "../../types"
import { OCTAVE_WINDOW } from "../ji"
import { Octaves } from "../types"
import { EtStep, Map, Per, SimpleMapOptions } from "./types"

const computeSimpleMap = <T extends NumericProperties = {}>(options: SimpleMapOptions): Map<T> => {
    const { edo, primeLimit } = options

    const stepOctaves: Octaves = (OCTAVE_WINDOW ** (1 / edo)) as Octaves

    const primes = computePrimes(primeLimit)
    const maxPrimeIndex = primes.indexOf(primeLimit)

    let simpleMap: Map<T> = []
    for (let primeIndex = 0; primeIndex <= maxPrimeIndex; primeIndex = increment(primeIndex)) {
        const prime = primes[primeIndex]

        let previousApproximation = undefined
        let currentApproximation = undefined
        let etStepsPerPrime = 0 as Per<Count<EtStep>, Prime, T>
        while (true) {
            previousApproximation = currentApproximation
            currentApproximation = stepOctaves ** etStepsPerPrime

            if (currentApproximation > prime) {
                const currentDiff = abs(currentApproximation - prime)
                const previousDiff = previousApproximation
                    ? abs(previousApproximation - prime)
                    : Infinity

                if (currentDiff < previousDiff) {
                    simpleMap.push(etStepsPerPrime)
                } else {
                    simpleMap.push((etStepsPerPrime - 1) as Per<Count<EtStep>, Prime, T>)
                }
                break
            }

            etStepsPerPrime = increment(etStepsPerPrime)
        }
    }

    return simpleMap
}

export { computeSimpleMap }
