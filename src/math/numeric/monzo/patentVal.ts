import {increment} from "../../../code"
import {Step, Window} from "../../../types"
import {PRIMES} from "../../rational"
import {abs} from "../../typedOperations"
import {Exponent} from "../../types"
import {Decimal} from "../decimal"
import {PatentValOptions, Val} from "./types"

const computePatentVal = <T extends Window>(options: PatentValOptions<T>): Val<T & {integer: true}> => {
    const {ed, window, primeLimit} = options

    const stepSize: number = window ** (1 / ed)

    const maxPrimeIndex = PRIMES.indexOf(primeLimit)

    let patentVal: Val<T & {integer: true}> = []
    for (let primeIndex = 0; primeIndex <= maxPrimeIndex; primeIndex = increment(primeIndex)) {
        const prime = PRIMES[primeIndex]

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
                    patentVal.push(primeExponent)
                } else {
                    patentVal.push(primeExponent - 1 as Decimal<{integer: true}> & Exponent<Step<T>>)
                }
                break
            }

            primeExponent = increment(primeExponent)
        }
    }

    return patentVal
}

export {
    computePatentVal,
}
