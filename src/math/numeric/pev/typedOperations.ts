import {computeRange, computeTrimmedArray, shallowClone} from "../../../code"
import {add, count, Decimal, Exponent, invertPev, max, multiply, NumericProperties, Pev, Prime} from "../../../math"
import {Multiplier} from "../../types"
import {NumericPropertyTranslationForPevsAndQuotientsToTheirTerms} from "../types"

const sumPevs = <T extends NumericProperties>(...pevs: Array<Pev<T>>): Pev<T> => {
    const maxPevLength = max(...pevs.map(count))

    const summedPevs: Pev = computeRange(maxPevLength).map((index: number): Exponent<Prime> => {
        return pevs.reduce(
            (totalPrimeExponent: Exponent<Prime>, pev: Pev): Exponent<Prime> => {
                const primeExponent: Exponent<Prime> = pev[index] || 0 as Exponent<Prime>

                return add(totalPrimeExponent, primeExponent)
            },
            0 as Exponent<Prime>,
        ) as Exponent<Prime>
    }) as Pev

    return computeTrimmedArray(summedPevs) as Pev<T>
}

const addPevs = <T extends NumericProperties>(augendPev: Pev<T>, addendPev: Pev<T>): Pev<T> => {
    const pevToMap = shallowClone(augendPev)
    while (pevToMap.length < addendPev.length) {
        pevToMap.push(0 as Decimal<NumericPropertyTranslationForPevsAndQuotientsToTheirTerms<T>> & Exponent<Prime>)
    }

    return computeTrimmedArray(pevToMap.map((primeExponent: Exponent<Prime>, index: number): Exponent<Prime> => {
        return addendPev[index] ? add(primeExponent, addendPev[index]) : primeExponent
    })) as Pev<T>
}

const subtractPevs = <T extends NumericProperties>(minuendPev: Pev<T>, subtrahendPev: Pev<T>): Pev<T> =>
    addPevs(minuendPev, invertPev(subtrahendPev) as Pev<T>)

const multiplyPev = <T extends NumericProperties>(
    pev: Pev<T>,
    multiplier: Decimal<{integer: true}> & Multiplier,
): Pev<T> =>
    pev.map((primeExponent: Exponent<Prime>): Exponent<Prime> => {
        return multiply(primeExponent, multiplier as Decimal<{integer: true}> & Multiplier<Exponent<Prime>>)
    }) as Pev<T>

export {
    sumPevs,
    addPevs,
    subtractPevs,
    multiplyPev,
}
