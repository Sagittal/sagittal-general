import { Direction, NumericProperties } from "../types"
import { Denominator, Numerator, Quotient, QuotientPart } from "./types"

const isQuotientSuper = <T extends NumericProperties>(
    candidateSuperQuotient: Quotient<Omit<T, "direction">>,
    // @ts-ignore
): candidateSuperQuotient is Quotient<Omit<T, "direction"> & { direction: Direction.SUPER }> => {
    // @ts-ignore
    const numerator: Numerator = candidateSuperQuotient[0]
    // @ts-ignore
    const denominator: Denominator = candidateSuperQuotient[1]

    return numerator > denominator
}

const isQuotientSub = <T extends NumericProperties>(
    candidateSubQuotient: Quotient<Omit<T, "direction">>,
    // @ts-ignore
): candidateSubQuotient is Quotient<Omit<T, "direction"> & { direction: Direction.SUB }> => {
    // @ts-ignore
    const numerator: Numerator = candidateSubQuotient[0]
    // @ts-ignore
    const denominator: Denominator = candidateSubQuotient[1]

    return numerator < denominator
}

const isQuotientUnison = <T extends NumericProperties>(
    candidateUnisonQuotient: Quotient<Omit<T, "direction">>,
    // @ts-ignore
): candidateUnisonQuotient is Quotient<Omit<T, "direction"> & { direction: Direction.UNISON }> => {
    // @ts-ignore
    const numerator: Numerator = candidateUnisonQuotient[0]
    // @ts-ignore
    const denominator: Denominator = candidateUnisonQuotient[1]

    return (numerator as QuotientPart) === (denominator as QuotientPart)
}

const computeSuperQuotient: {
    <T extends NumericProperties>(quotient: Quotient<T & { direction: Direction.UNISON }>): Quotient<
        Omit<T, "direction"> & { direction: Direction.UNISON }
    >
    <T extends NumericProperties>(quotient: Quotient<T>): Quotient<
        Omit<T, "direction"> & { direction: Direction.SUPER; integer: false }
    >
    // @ts-ignore
} = <T extends NumericProperties>(
    quotient: Quotient<T>,
): Quotient<Omit<T, "direction"> & { direction: Direction.SUPER & Direction.UNISON }> =>
    // @ts-ignore
    isQuotientSuper(quotient) ? (quotient as Quotient<Omit<T, "direction">>) : invertQuotient(quotient)

const computeSubQuotient: {
    <T extends NumericProperties>(quotient: Quotient<T & { direction: Direction.UNISON }>): Quotient<
        Omit<T, "direction"> & { direction: Direction.UNISON }
    >
    <T extends NumericProperties>(quotient: Quotient<T>): Quotient<
        Omit<T, "direction"> & { direction: Direction.SUB; integer: false }
    >
    // @ts-ignore
} = <T extends NumericProperties>(
    quotient: Quotient<T>,
): Quotient<Omit<T, "direction"> & { direction: Direction.SUB & Direction.UNISON }> =>
    // @ts-ignore
    isQuotientSub(quotient) ? (quotient as Quotient<Omit<T, "direction">>) : invertQuotient(quotient)

const invertQuotient: {
    <T extends NumericProperties>(quotient: Quotient<T & { direction: Direction.SUPER }>): Quotient<
        Omit<T, "direction"> & { direction: Direction.SUB; integer: false }
    >
    <T extends NumericProperties>(quotient: Quotient<T & { direction: Direction.SUB }>): Quotient<
        Omit<T, "direction"> & { direction: Direction.SUPER; integer: false }
    >
    <T extends NumericProperties>(quotient: Quotient<T & { direction: Direction.UNISON }>): Quotient<
        Omit<T, "direction"> & { direction: Direction.UNISON }
    >
    <T extends NumericProperties>(quotient: Quotient<T>): Quotient<Omit<T, "direction"> & { integer: false }>
    // @ts-ignore
} = <T extends NumericProperties>([numerator, denominator]: Quotient<T>): Quotient<
    Omit<T, "direction"> & { direction: Direction.SUPER & Direction.SUB & Direction.UNISON }
> =>
    // @ts-ignore
    [denominator as number as Numerator, numerator as number as Denominator] as Quotient<Omit<T, "direction">>

export {
    computeSuperQuotient,
    computeSubQuotient,
    isQuotientSuper,
    isQuotientSub,
    isQuotientUnison,
    invertQuotient,
}
