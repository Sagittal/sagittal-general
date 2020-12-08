import {indexOfFinalElement, MAX_JS_INTEGER_VALUE} from "../../../code"
import {
    Decimal,
    Monzo,
    NumericProperties,
    NumericPropertyTranslationForMonzosAndQuotientsToTheirTerms,
} from "../../numeric"
import {Exponent} from "../../types"
import {computePrimes, MAX_POSSIBLE_PRIME_THAT_SHOULD_BE_COMPUTED} from "../primes"
import {computeRationalQuotientFromRationalDecimal} from "../quotient"
import {Prime} from "../types"
import {computeRationalMonzoFromRationalQuotient} from "./fromQuotient"

const computeRationalMonzoFromRationalDecimal = <T extends NumericProperties>(
    rationalDecimal: Decimal<T & {rational: true}>,
): Monzo<T & {rational: true}> => {
    if (rationalDecimal < 0) throw new Error(`Cannot convert ${rationalDecimal} to a monzo because it is negative.`)

    const rationalQuotient = computeRationalQuotientFromRationalDecimal(rationalDecimal)

    return computeRationalMonzoFromRationalQuotient(rationalQuotient) as Monzo<T & {rational: true}>
}

const computeIntegerMonzoFromIntegerDecimal = <T extends NumericProperties>(
    integerDecimal: Decimal<T & {integer: true}>,
): Monzo<T & {integer: true}> => {
    const integerMonzo = [] as unknown[] as Monzo<T & {integer: true}>
    let remnant = integerDecimal as number

    if (integerDecimal > MAX_JS_INTEGER_VALUE) {
        throw new Error(`This integer ${integerDecimal} is larger than the maximum integer JavaScript can encode (double float precision, 2^53) and therefore will be rounded and be unable to be prime factored properly.`)
    }

    const primes = computePrimes(integerDecimal > MAX_POSSIBLE_PRIME_THAT_SHOULD_BE_COMPUTED ? undefined : integerDecimal)

    let index = 0
    let divisor = primes[index]
    integerMonzo[index] = 0 as
        Decimal<NumericPropertyTranslationForMonzosAndQuotientsToTheirTerms<T>> & Exponent<Prime>

    while (remnant > 1) {
        if (remnant % divisor === 0) {
            remnant = remnant / divisor
            integerMonzo[index] = integerMonzo[index] + 1 as
                Decimal<NumericPropertyTranslationForMonzosAndQuotientsToTheirTerms<T>> & Exponent<Prime>
        } else {
            if (index === indexOfFinalElement(primes)) {
                throw new Error(`This integer ${integerDecimal} contains primes which are too big; remainder is ${remnant}`)
            }

            index = index + 1
            divisor = primes[index]
            integerMonzo[index] = 0 as
                Decimal<NumericPropertyTranslationForMonzosAndQuotientsToTheirTerms<T>> & Exponent<Prime>
        }
    }

    return integerMonzo
}

export {
    computeRationalMonzoFromRationalDecimal,
    computeIntegerMonzoFromIntegerDecimal,
}
