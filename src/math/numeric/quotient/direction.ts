import { Super, Unison, NumericProperties, Sub, AnyDirection } from "../types"
import { Denominator, Numerator, Quotient, QuotientPart } from "./types"

const isQuotientSuper = <T extends NumericProperties>(
    candidateSuperQuotient: Quotient<T>,
): candidateSuperQuotient is Quotient<T & Super> => {
    const numerator: Numerator<T> = candidateSuperQuotient[0]
    const denominator: Denominator<T> = candidateSuperQuotient[1]

    return numerator > denominator
}

const isQuotientSub = <T extends NumericProperties>(
    candidateSubQuotient: Quotient<T>,
): candidateSubQuotient is Quotient<T & Sub> => {
    const numerator: Numerator<T> = candidateSubQuotient[0]
    const denominator: Denominator<T> = candidateSubQuotient[1]

    return numerator < denominator
}

const isQuotientUnison = <T extends NumericProperties>(
    candidateUnisonQuotient: Quotient<T>,
): candidateUnisonQuotient is Quotient<T & Unison> => {
    const numerator: Numerator<T> = candidateUnisonQuotient[0]
    const denominator: Denominator<T> = candidateUnisonQuotient[1]

    return (numerator as QuotientPart<T>) === (denominator as QuotientPart<T>)
}

const computeSuperQuotient = <T extends NumericProperties>(quotient: Quotient<T>): Quotient<T & Super> =>
    isQuotientSuper(quotient) ? quotient : invertQuotient(quotient)

const computeSubQuotient = <T extends NumericProperties>(quotient: Quotient<T>): Quotient<T & Sub> =>
    isQuotientSub(quotient) ? quotient : invertQuotient(quotient)

const invertQuotient = <T extends NumericProperties>([numerator, denominator]: Quotient<T>): Quotient<
    T & AnyDirection
> =>
    [denominator as number as Numerator<T>, numerator as number as Denominator<T>] as Quotient<
        T & AnyDirection
    >

export {
    computeSuperQuotient,
    computeSubQuotient,
    isQuotientSuper,
    isQuotientSub,
    isQuotientUnison,
    invertQuotient,
}
