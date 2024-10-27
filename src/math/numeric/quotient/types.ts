import { Decimal } from "../decimal"
import {
    NumericProperties,
    NumericPropertyEffects,
    NumericPropertyTranslationForVectorsAndQuotientsToTheirTerms,
} from "../types"

type NumericPropertyTranslationForQuotientsToTheirQuotientParts<T extends NumericProperties = {}> =
    (T extends { rough: number } ? T & { rough: T["rough"] } : T) &
        (T extends { smooth: number } ? T & { smooth: T["smooth"] } : T)

type Numerator = number & { _NumeratorBrand: boolean }
type Denominator = number & { _DenominatorBrand: boolean }

type Quotient<T extends NumericProperties = {}> = [
    Numerator &
        Decimal<
            NumericPropertyTranslationForQuotientsToTheirQuotientParts<
                NumericPropertyTranslationForVectorsAndQuotientsToTheirTerms<T>
            >
        >,
    Denominator &
        Decimal<
            NumericPropertyTranslationForQuotientsToTheirQuotientParts<
                NumericPropertyTranslationForVectorsAndQuotientsToTheirTerms<T>
            >
        >,
] &
    NumericPropertyEffects<T>

enum QuotientPartType {
    NUMERATOR = "numerator",
    DENOMINATOR = "denominator",
}

type QuotientPart = Numerator | Denominator

export { QuotientPartType, Quotient, QuotientPart, Numerator, Denominator }
