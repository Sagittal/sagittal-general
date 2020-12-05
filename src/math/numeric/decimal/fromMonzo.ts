import {
    decrement,
    increment,
    indexOfFinalElement,
    MAX_JS_VALUE_PRESERVING_PRECISION,
    MIN_JS_VALUE_PRESERVING_PRECISION,
    shallowClone,
} from "../../../code"
import {MULTIPLICATIVE_IDENTITY} from "../../constants"
import {Prime, PRIMES} from "../../rational"
import {pow} from "../../typedOperations"
import {Exponent} from "../../types"
import {isMonzoUnison, Monzo} from "../monzo"
import {NumericProperties} from "../types"
import {Decimal} from "./types"

const isDecimalWithLostPrecision = (decimal: Decimal): boolean =>
    isNaN(decimal) || decimal > MAX_JS_VALUE_PRESERVING_PRECISION || decimal < MIN_JS_VALUE_PRESERVING_PRECISION

const computeDecimalFromHugeMonzo = <T extends NumericProperties>(monzo: Monzo): Decimal<T> => {
    let decimal = MULTIPLICATIVE_IDENTITY as Decimal<T>
    let depletingMonzo = shallowClone(monzo)
    let maybeNewDecimal
    let negative
    let prime
    let index

    while (!isMonzoUnison(depletingMonzo)) {
        index = depletingMonzo.length
        maybeNewDecimal = NaN as Decimal<T>
        while (isDecimalWithLostPrecision(maybeNewDecimal)) {
            index = decrement(index)
            if (depletingMonzo[index] === 0) continue
            if (index < 0) return maybeNewDecimal

            negative = depletingMonzo[index] < 0
            prime = PRIMES[index]
            maybeNewDecimal = decimal * (negative ? 1 / prime : prime) as Decimal<T>
        }

        decimal = maybeNewDecimal
        if (negative) {
            depletingMonzo[index] = increment(depletingMonzo[index])
        } else {
            depletingMonzo[index] = decrement(depletingMonzo[index])
        }

        if (depletingMonzo[index] === 0 && index === indexOfFinalElement(depletingMonzo)) depletingMonzo.pop()
    }

    return decimal
}

const computeDecimalFromMonzo = <T extends NumericProperties>(monzo: Monzo<T>): Decimal<T> => {
    const decimal = monzo.reduce(
        (decimal: Decimal<T>, primeExponent: Exponent<Prime>, index: number): Decimal<T> => {
            return decimal * pow(PRIMES[index], primeExponent) as Decimal<T>
        },
        MULTIPLICATIVE_IDENTITY as Decimal<T>,
    )

    if (isDecimalWithLostPrecision(decimal)) {
        return computeDecimalFromHugeMonzo(monzo)
    }

    return decimal
}

export {
    computeDecimalFromMonzo,
}
