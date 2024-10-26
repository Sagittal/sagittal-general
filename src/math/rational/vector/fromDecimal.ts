import { indexOfFinalElement, MAX_JS_INTEGER_VALUE } from "../../../code"
import { Count } from "../../../types"
import { dividesEvenly } from "../../dividesEvenly"
import {
    Decimal,
    Vector,
    NumericProperties,
    NumericPropertyTranslationForVectorsAndQuotientsToTheirTerms,
    mod,
} from "../../numeric"
import { Exponent } from "../../types"
import { computePrimes, MAX_POSSIBLE_PRIME_THAT_SHOULD_BE_COMPUTED } from "../primes"
import { computeRationalQuotientFromRationalDecimal } from "../quotient"
import { Prime } from "../types"
import { computeRationalVectorFromRationalQuotient } from "./fromQuotient"

const computeRationalVectorFromRationalDecimal = <T extends NumericProperties>(
    rationalDecimal: Decimal<T & { rational: true }>,
): Vector<T & { rational: true }> => {
    if (rationalDecimal < 0)
        throw new Error(`Cannot convert ${rationalDecimal} to a vector because it is negative.`)

    const rationalQuotient = computeRationalQuotientFromRationalDecimal(rationalDecimal)

    return computeRationalVectorFromRationalQuotient(rationalQuotient) as Vector<
        T & { rational: true }
    >
}

const computeIntegerVectorFromIntegerDecimal = <T extends NumericProperties>(
    integerDecimal: Decimal<T & { integer: true }>,
): Vector<T & { integer: true }> => {
    const integerVector = [] as unknown[] as Vector<T & { integer: true }>
    let remnant = integerDecimal as number

    if (integerDecimal > MAX_JS_INTEGER_VALUE) {
        throw new Error(
            `This integer ${integerDecimal} is larger than the maximum integer JavaScript can encode (double float precision, 2^53) and therefore will be rounded and be unable to be prime factored properly.`,
        )
    }

    const primes = computePrimes(
        integerDecimal > MAX_POSSIBLE_PRIME_THAT_SHOULD_BE_COMPUTED ? undefined : integerDecimal,
    )

    let index = 0
    let divisor = primes[index]
    integerVector[index] = 0 as Count<Prime> &
        Exponent<Prime> &
        NumericPropertyTranslationForVectorsAndQuotientsToTheirTerms<T>

    while (remnant > 1) {
        if (dividesEvenly(remnant, divisor)) {
            remnant = remnant / divisor
            integerVector[index] = (integerVector[index] + 1) as Count<Prime> &
                Exponent<Prime> &
                NumericPropertyTranslationForVectorsAndQuotientsToTheirTerms<T>
        } else {
            if (index === indexOfFinalElement(primes)) {
                throw new Error(
                    `This integer ${integerDecimal} contains primes which are too big; remainder is ${remnant}`,
                )
            }

            index = index + 1
            divisor = primes[index]
            integerVector[index] = 0 as Count<Prime> &
                Exponent<Prime> &
                NumericPropertyTranslationForVectorsAndQuotientsToTheirTerms<T>
        }
    }

    return integerVector
}

export { computeRationalVectorFromRationalDecimal, computeIntegerVectorFromIntegerDecimal }
