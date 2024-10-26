import {
    decrement,
    increment,
    indexOfFinalElement,
    MAX_JS_VALUE_PRESERVING_MAX_PRECISION,
    MIN_JS_VALUE_PRESERVING_MAX_PRECISION,
    shallowClone,
} from "../../../code"
import { MULTIPLICATIVE_IDENTITY } from "../../constants"
import { Prime, primes } from "../../rational"
import { pow } from "../../typedOperations"
import { isVectorUnison, Vector } from "../vector"
import { NumericProperties } from "../types"
import { Decimal } from "./types"
import { Exponent } from "../../types"

const isDecimalWithLostPrecision = (decimal: Decimal): boolean =>
    isNaN(decimal) ||
    decimal > MAX_JS_VALUE_PRESERVING_MAX_PRECISION ||
    decimal < MIN_JS_VALUE_PRESERVING_MAX_PRECISION

const computeDecimalFromHugeVector = <T extends NumericProperties>(
    vector: Vector<T>,
): Decimal<T> => {
    let decimal = MULTIPLICATIVE_IDENTITY as Decimal<T>
    let depletingVector = shallowClone(vector)
    let maybeNewDecimal
    let negative
    let prime
    let index

    while (!isVectorUnison(depletingVector)) {
        index = depletingVector.length
        maybeNewDecimal = NaN as Decimal<T>
        while (isDecimalWithLostPrecision(maybeNewDecimal)) {
            index = decrement(index)
            if (depletingVector[index] === 0) continue
            if (index < 0) return maybeNewDecimal as Decimal<T>

            negative = depletingVector[index] < 0
            prime = primes[index]
            maybeNewDecimal = (decimal * (negative ? 1 / prime : prime)) as Decimal<T>
        }

        decimal = maybeNewDecimal as Decimal<T>
        if (negative) {
            depletingVector[index] = increment(depletingVector[index])
        } else {
            depletingVector[index] = decrement(depletingVector[index])
        }

        if (depletingVector[index] === 0 && index === indexOfFinalElement(depletingVector))
            depletingVector.pop()
    }

    return decimal
}

const computeDecimalFromVector = <T extends NumericProperties>(vector: Vector<T>): Decimal<T> => {
    const decimal = vector.reduce(
        (decimal: Decimal<T>, primeExponent: Exponent<Prime>, index: number): Decimal<T> => {
            return (decimal * pow(primes[index], primeExponent)) as Decimal<T>
        },
        MULTIPLICATIVE_IDENTITY as Decimal<T>,
    )

    if (isDecimalWithLostPrecision(decimal)) {
        return computeDecimalFromHugeVector(vector)
    }

    return decimal
}

export { computeDecimalFromVector }
