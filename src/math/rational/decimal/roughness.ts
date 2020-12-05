import {increment} from "../../../code"
import {Index} from "../../../types"
import {dividesEvenly} from "../../dividesEvenly"
import {Decimal, NumericProperties} from "../../numeric"
import {computeRoughnessIndex} from "../primeCount"
import {PRIMES} from "../primes"
import {Prime, Primes, Roughness} from "../types"
import {integerDivide} from "./typedOperations"

const isIntegerDecimalRough = (integerDecimal: Decimal<{integer: true}>, roughness: Roughness): boolean => {
    let isRough = true

    let index = 0 as Index<Prime>
    while (true) {
        const prime = PRIMES[index]
        if (prime >= roughness) {
            break
        }

        if (integerDecimal % prime === 0) {
            isRough = false
            break
        }

        index = increment(index)
    }

    return isRough
}

const computeRoughIntegerDecimal = <S extends Primes, T extends NumericProperties, U extends unknown>(
    integerDecimal: U & Decimal<T & {integer: true}>,
    roughness: S & Roughness,
): U & Decimal<T & {integer: true, rough: S}> => {
    const roughnessIndex = computeRoughnessIndex(roughness)

    let roughIntegerDecimal = integerDecimal
    let primeIndex = 0
    while (primeIndex < roughnessIndex) {
        const prime: Decimal<{integer: true}> = PRIMES[primeIndex]
        while (dividesEvenly(roughIntegerDecimal, prime)) {
            roughIntegerDecimal =
                integerDivide(roughIntegerDecimal, prime) as U & Decimal<T & {integer: true}>
        }

        primeIndex = increment(primeIndex)
    }

    return roughIntegerDecimal as U & Decimal<T & {integer: true, rough: S}>
}

export {
    isIntegerDecimalRough,
    computeRoughIntegerDecimal,
}
