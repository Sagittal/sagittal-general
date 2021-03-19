import {
    decrement,
    increment,
    indexOfFinalElement,
    MAX_JS_VALUE_PRESERVING_MAX_PRECISION,
    MIN_JS_VALUE_PRESERVING_MAX_PRECISION,
    shallowClone,
} from "../../../code"
import {MULTIPLICATIVE_IDENTITY} from "../../constants"
import {Prime, primes} from "../../rational"
import {pow} from "../../typedOperations"
import {Exponent} from "../../types"
import {isPevUnison, Pev} from "../pev"
import {NumericProperties} from "../types"
import {Decimal} from "./types"

const isDecimalWithLostPrecision = (decimal: Decimal): boolean =>
    isNaN(decimal) || decimal > MAX_JS_VALUE_PRESERVING_MAX_PRECISION || decimal < MIN_JS_VALUE_PRESERVING_MAX_PRECISION

const computeDecimalFromHugePev = <T extends NumericProperties>(pev: Pev): Decimal<T> => {
    let decimal = MULTIPLICATIVE_IDENTITY as Decimal<T>
    let depletingPev = shallowClone(pev)
    let maybeNewDecimal
    let negative
    let prime
    let index

    while (!isPevUnison(depletingPev)) {
        index = depletingPev.length
        maybeNewDecimal = NaN as Decimal<T>
        while (isDecimalWithLostPrecision(maybeNewDecimal)) {
            index = decrement(index)
            if (depletingPev[index] === 0) continue
            if (index < 0) return maybeNewDecimal

            negative = depletingPev[index] < 0
            prime = primes[index]
            maybeNewDecimal = decimal * (negative ? 1 / prime : prime) as Decimal<T>
        }

        decimal = maybeNewDecimal
        if (negative) {
            depletingPev[index] = increment(depletingPev[index])
        } else {
            depletingPev[index] = decrement(depletingPev[index])
        }

        if (depletingPev[index] === 0 && index === indexOfFinalElement(depletingPev)) depletingPev.pop()
    }

    return decimal
}

const computeDecimalFromPev = <T extends NumericProperties>(pev: Pev<T>): Decimal<T> => {
    const decimal = pev.reduce(
        (decimal: Decimal<T>, primeExponent: Exponent<Prime>, index: number): Decimal<T> => {
            return decimal * pow(primes[index], primeExponent) as Decimal<T>
        },
        MULTIPLICATIVE_IDENTITY as Decimal<T>,
    )

    if (isDecimalWithLostPrecision(decimal)) {
        return computeDecimalFromHugePev(pev)
    }

    return decimal
}

export {
    computeDecimalFromPev,
}
