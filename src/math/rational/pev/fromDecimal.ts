import {indexOfFinalElement, MAX_JS_INTEGER_VALUE} from "../../../code"
import {
    Decimal,
    Pev,
    NumericProperties,
    NumericPropertyTranslationForPevsAndQuotientsToTheirTerms,
    mod,
} from "../../numeric"
import {Exponent} from "../../types"
import {computePrimes, MAX_POSSIBLE_PRIME_THAT_SHOULD_BE_COMPUTED} from "../primes"
import {computeRationalQuotientFromRationalDecimal} from "../quotient"
import {Prime} from "../types"
import {computeRationalPevFromRationalQuotient} from "./fromQuotient"

const computeRationalPevFromRationalDecimal = <T extends NumericProperties>(
    rationalDecimal: Decimal<T & {rational: true}>,
): Pev<T & {rational: true}> => {
    if (rationalDecimal < 0) throw new Error(`Cannot convert ${rationalDecimal} to a pev because it is negative.`)

    const rationalQuotient = computeRationalQuotientFromRationalDecimal(rationalDecimal)

    return computeRationalPevFromRationalQuotient(rationalQuotient) as Pev<T & {rational: true}>
}

const computeIntegerPevFromIntegerDecimal = <T extends NumericProperties>(
    integerDecimal: Decimal<T & {integer: true}>,
): Pev<T & {integer: true}> => {
    const integerPev = [] as unknown[] as Pev<T & {integer: true}>
    let remnant = integerDecimal as number

    if (integerDecimal > MAX_JS_INTEGER_VALUE) {
        throw new Error(`This integer ${integerDecimal} is larger than the maximum integer JavaScript can encode (double float precision, 2^53) and therefore will be rounded and be unable to be prime factored properly.`)
    }

    const primes = computePrimes(integerDecimal > MAX_POSSIBLE_PRIME_THAT_SHOULD_BE_COMPUTED ? undefined : integerDecimal)

    let index = 0
    let divisor = primes[index]
    integerPev[index] = 0 as
        Decimal<NumericPropertyTranslationForPevsAndQuotientsToTheirTerms<T>> & Exponent<Prime>

    while (remnant > 1) {
        if (mod(remnant, divisor) === 0) {
            remnant = remnant / divisor
            integerPev[index] = integerPev[index] + 1 as
                Decimal<NumericPropertyTranslationForPevsAndQuotientsToTheirTerms<T>> & Exponent<Prime>
        } else {
            if (index === indexOfFinalElement(primes)) {
                throw new Error(`This integer ${integerDecimal} contains primes which are too big; remainder is ${remnant}`)
            }

            index = index + 1
            divisor = primes[index]
            integerPev[index] = 0 as
                Decimal<NumericPropertyTranslationForPevsAndQuotientsToTheirTerms<T>> & Exponent<Prime>
        }
    }

    return integerPev
}

export {
    computeRationalPevFromRationalDecimal,
    computeIntegerPevFromIntegerDecimal,
}
