import { Override } from "../../../code"
import { Direction, NumericProperties } from "../types"
import { Denominator, Numerator, Quotient, QuotientPart } from "./types"

const isQuotientSuper = <T extends NumericProperties>(
    candidateSuperQuotient: Quotient<Omit<T, "direction">>,
): candidateSuperQuotient is Quotient<Override<T, "direction", Direction.SUPER>> => {
    const numerator: Numerator = candidateSuperQuotient[0]
    const denominator: Denominator = candidateSuperQuotient[1]

    return numerator > denominator
}

const isQuotientSub = <T extends NumericProperties>(
    candidateSubQuotient: Quotient<Omit<T, "direction">>,
): candidateSubQuotient is Quotient<Override<T, "direction", Direction.SUB>> => {
    const numerator: Numerator = candidateSubQuotient[0]
    const denominator: Denominator = candidateSubQuotient[1]

    return numerator < denominator
}

const isQuotientUnison = <T extends NumericProperties>(
    candidateUnisonQuotient: Quotient<Omit<T, "direction">>,
): candidateUnisonQuotient is Quotient<Override<T, "direction", Direction.UNISON>> => {
    const numerator: Numerator = candidateUnisonQuotient[0]
    const denominator: Denominator = candidateUnisonQuotient[1]

    return (numerator as QuotientPart) === (denominator as QuotientPart)
}

const computeSuperQuotient = <T extends NumericProperties>(
    quotient: Quotient<Omit<T, "direction">>,
): Quotient<Override<T, "direction", Direction.SUPER>> =>
    (isQuotientSuper(quotient) ? quotient : invertQuotient(quotient)) as Quotient<
        Override<T, "direction", Direction.SUPER>
    >

const computeSubQuotient = <T extends NumericProperties>(
    quotient: Quotient<Omit<T, "direction">>,
): Quotient<Override<T, "direction", Direction.SUB>> =>
    (isQuotientSub(quotient) ? quotient : invertQuotient(quotient)) as Quotient<
        Override<T, "direction", Direction.SUB>
    >

const invertQuotient = <T extends NumericProperties>([numerator, denominator]: Quotient<
    Omit<T, "direction">
>): Quotient<Omit<T, "direction">> =>
    [denominator as number as Numerator, numerator as number as Denominator] as Quotient<Omit<T, "direction">>

export {
    computeSuperQuotient,
    computeSubQuotient,
    isQuotientSuper,
    isQuotientSub,
    isQuotientUnison,
    invertQuotient,
}
