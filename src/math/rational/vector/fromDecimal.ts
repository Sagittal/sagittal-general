import { indexOfFinalElement, MAX_JS_INTEGER_VALUE } from "../../../code"
import { dividesEvenly } from "../../dividesEvenly"
import { Decimal, Vector, NumericProperties, PrimeCount } from "../../numeric"
import { computePrimes, MAX_POSSIBLE_PRIME_THAT_SHOULD_BE_COMPUTED } from "../primes"
import { computeRationalQuotientFromRationalDecimal } from "../quotient"
import { Integer, Rational } from "../types"
import { computeRationalVectorFromRationalQuotient } from "./fromQuotient"

const computeRationalVectorFromRationalDecimal = <T extends NumericProperties>(
    rationalDecimal: Decimal<T & Rational>,
): Vector<T & Rational> => {
    if (rationalDecimal < 0)
        throw new Error(`Cannot convert ${rationalDecimal} to a vector because it is negative.`)

    const rationalQuotient = computeRationalQuotientFromRationalDecimal(rationalDecimal)

    return computeRationalVectorFromRationalQuotient(rationalQuotient)
}

const computeIntegerVectorFromIntegerDecimal = <T extends NumericProperties>(
    integerDecimal: Decimal<T & Integer>,
): Vector<T & Integer> => {
    const integerVector = [] as unknown[] as Vector<T & Integer>
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
    integerVector[index] = 0 as PrimeCount<T & Integer>

    while (remnant > 1) {
        if (dividesEvenly(remnant, divisor)) {
            remnant = remnant / divisor
            integerVector[index] = (integerVector[index] + 1) as PrimeCount<T & Integer>
        } else {
            if (index === indexOfFinalElement(primes)) {
                throw new Error(
                    `This integer ${integerDecimal} contains primes which are too big; remainder is ${remnant}`,
                )
            }

            index = index + 1
            divisor = primes[index]
            integerVector[index] = 0 as PrimeCount<T & Integer>
        }
    }

    return integerVector
}

export { computeRationalVectorFromRationalDecimal, computeIntegerVectorFromIntegerDecimal }
