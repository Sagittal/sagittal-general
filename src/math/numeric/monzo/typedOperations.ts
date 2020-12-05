import {computeRange, computeTrimmedArray, shallowClone} from "../../../code"
import {add, count, Decimal, Exponent, invertMonzo, max, Monzo, multiply, NumericProperties, Prime} from "../../../math"
import {Multiplier} from "../../types"
import {NumericPropertyTranslationForMonzosAndQuotientsToTheirTerms} from "../types"

const sumMonzos = <T extends NumericProperties>(...monzos: Array<Monzo<T>>): Monzo<T> => {
    const maxMonzoLength = max(...monzos.map(count))

    const summedMonzos: Monzo = computeRange(maxMonzoLength).map((index: number): Exponent<Prime> => {
        return monzos.reduce(
            (totalPrimeExponent: Exponent<Prime>, monzo: Monzo): Exponent<Prime> => {
                const primeExponent: Exponent<Prime> = monzo[index] || 0 as Exponent<Prime>

                return add(totalPrimeExponent, primeExponent)
            },
            0 as Exponent<Prime>,
        ) as Exponent<Prime>
    }) as Monzo

    return computeTrimmedArray(summedMonzos) as Monzo<T>
}

const addMonzos = <T extends NumericProperties>(augendMonzo: Monzo<T>, addendMonzo: Monzo<T>): Monzo<T> => {
    const monzoToMap = shallowClone(augendMonzo)
    while (monzoToMap.length < addendMonzo.length) {
        monzoToMap.push(0 as Decimal<NumericPropertyTranslationForMonzosAndQuotientsToTheirTerms<T>> & Exponent<Prime>)
    }

    return computeTrimmedArray(monzoToMap.map((primeExponent: Exponent<Prime>, index: number): Exponent<Prime> => {
        return addendMonzo[index] ? add(primeExponent, addendMonzo[index]) : primeExponent
    })) as Monzo<T>
}

const subtractMonzos = <T extends NumericProperties>(minuendMonzo: Monzo<T>, subtrahendMonzo: Monzo<T>): Monzo<T> =>
    addMonzos(minuendMonzo, invertMonzo(subtrahendMonzo) as Monzo<T>)

const multiplyMonzo = <T extends NumericProperties>(
    monzo: Monzo<T>,
    multiplier: Decimal<{integer: true}> & Multiplier,
): Monzo<T> =>
    monzo.map((primeExponent: Exponent<Prime>): Exponent<Prime> => {
        return multiply(primeExponent, multiplier as Decimal<{integer: true}> & Multiplier<Exponent<Prime>>)
    }) as Monzo<T>

export {
    sumMonzos,
    addMonzos,
    subtractMonzos,
    multiplyMonzo,
}
